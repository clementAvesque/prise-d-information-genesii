<template>
    <section id="page" :style="{ filter: loading ? 'brightness(0.7)' : '' }">
        <img src="../img/genesii-name.svg" alt="genesii" id="name" />
        <section id="content" v-if="!response">
            <img src="../img/loupe.png" alt="" id="icon" :class="{'rotate' : loading }"/>
            <h1>Une réponse?</h1>
            <p>Vous avez trouvé le mot de passe de l’énigmeque vous avez reçu?</p>
            <div id="formulaire" v-if="!user">
                <h2>entrez votre téléphone</h2>
                <form @submit.prevent="click">
                    <input type="tel" v-model="tel" required />
                    <button type="submit">je m'identifie</button>
                </form>
            </div>
            <div v-else class="in" id="found_code">
                <h2>Avez-vous trouvé votre code {{ userName }}?</h2>
                <form @submit.prevent="verifyCode">
                    <input type="text" v-model="code" required />
                    <button type="submit">je m'identifie</button>
                </form>
            </div>
        </section>
        <div v-else class="in" id="text_response">
            <h1>Bravo {{ userName }}!</h1>
            <p>tu as trouvé le code de l'énigme, tu peux maintenant aller vérifier tes mails pour découvrir la suite de
                l'aventure.</p>
        </div>
    </section>
</template>


<style scoped>
@font-face {
    font-family: "font genesii";
    src: url(../font/bigFont.otf);
}

#page {
    transition: all 0.3s ease;
}

#text_response {
    font-family: "font genesii", sans-serif;
    font-size: 2rem;
    color: black;
    margin: 20vh;
    font-size: clamp(1rem, 2vw, 2.5rem);
}

#content p {
    font-size: 16pt;
    width: 50%;
    text-align: center;
    margin: 0;
}

#name {

    width: 100vw;
    height: 10vh;
    margin-top: 5vh;
}

#formulaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

#content {
    font-family: "font genesii", sans-serif;
    background-color: #f83c4f;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 75vh;
    margin-top: 11.3vh;
    transition: all 1s ease-in-out, background-color 0.3s ease-in-out;
}

#content h1 {
    font-size: 34pt;
    font-weight: 600;
    margin: 0;
}


button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: black 2px solid;
    font-size: 24pt;
    background-color: transparent;
    font-family: "font genesii", sans-serif;
}

#content h2 {
    font-size: 24pt;
    font-weight: 600;
    margin: 0;
    margin-bottom: 50px;
}

input {
    background-color: transparent;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    font-size: 24pt;
    outline: none;
    padding: 10px;
    border: black 2px solid;
    font-family: "font genesii", sans-serif;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    font-family: "font genesii", sans-serif;
    height: 200px;
    justify-content: space-between;
    align-items: center;
}

#icon {
    width: 10vw;
    margin-right: 5vw;
    position: absolute;
    top: 60vh;
    right: 10vw;
}

.rotate {
  animation: rotate 4s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.in {
    animation: in 0.8s ease;
}

@keyframes in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.out {
    animation: out 0.8s ease;
}

@keyframes out {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.tremblement {
    animation: tremblement 0.5s cubic-bezier(.36, .07, .19, .97) both;
}

@keyframes tremblement {

    10%,
    90% {
        transform: translateX(-20px);
    }

    20%,
    80% {
        transform: translateX(20px);
    }

    30%,
    50%,
    70% {
        transform: translateX(-20px);
    }

    40%,
    60% {
        transform: translateX(20px);
    }
}
</style>


<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
const response = ref(false)
const backendUrl = import.meta.env.VITE_BACKEND_KEY // ou ton URL d'API
const tel = ref('') // ici code = numéro de téléphone
let goodcode;
const user = ref(false);
const code = ref('');
const userName = ref('')
const mail = ref('')
const loading = ref(false);




function click() {
    loading.value = true;
    fetch(`${backendUrl}/api/getClient`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: tel.value })
    })
        .then(async res => {
            loading.value = false;
            let data;
            data = await res.json();
            if (data.success === false || data.client === false) {
                document.getElementById('formulaire').classList.add('tremblement');
                setTimeout(() => {
                    document.getElementById('formulaire').classList.remove('tremblement');
                }, 500);
                return;
            } else {
                goodcode = data.client.code;
                userName.value = data.client.firstName;
                mail.value = data.client.mail;
                document.getElementById('formulaire').classList.add('out');
                setTimeout(() => {
                    user.value = true;
                }, 800);
            }


        })

}

function verifyCode() {
    if (code.value.toUpperCase() === goodcode) {
        document.getElementById('content').style.backgroundColor = '#13ffdf';

        fetch(`${backendUrl}/api/sendMail`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phone: tel.value,
            })
        })
            .then(res => res.json())
        document.getElementById('content').classList.add('out');
        setTimeout(() => {
            response.value = true;
        }, 800);
        setTimeout(() => {
            document.getElementById('name').classList.add('out');
            document.getElementById('text_response').classList.add('out');
        }, 6000);
        setTimeout(() => {
            router.push('/');
        }, 6800);

    } else {
        document.getElementById('found_code').classList.add('tremblement');
        setTimeout(() => {
            document.getElementById('found_code').classList.remove('tremblement');
        }, 500);
    }
}
</script>