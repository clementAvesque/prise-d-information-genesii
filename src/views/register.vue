<template>
    <section id="page" :style="{ filter: Loading ? 'brightness(0.7)' : '' }">
        <img src="../img/genesii-name.svg" alt="genesii" id="name" />
        <div id="content" v-if="showContent">
            <img src="../img/questionnaire.png" alt="" class="in">

            <form class="in" @submit.prevent="click">
                <h2>Inscription</h2>
                <div>
                    <div id="asking">
                        <div class="info">
                            <label>Prénom:</label>
                            <input type="text" placeholder="Entrez votre prénom" v-model="firstName" required />
                        </div>
                        <div class="info">
                            <label>nom:</label>
                            <input type="text" placeholder="Entrez votre nom" v-model="name" required />
                        </div>
                        <div class="info">
                            <label>téléphone:</label>
                            <input type="tel" placeholder="Entrez votre téléphone" v-model="phone" required />
                        </div>
                        <div class="info">
                            <label>mail:</label>
                            <input type="email" placeholder="Entrez votre email" v-model="mail" required />
                            <button type="submit">bonne chance a vous!</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div v-if="showAnnonce" :class="annonceClass" id="annonce">
            <h1>Merci pour votre inscription {{ firstName }} {{ name }} vous recevrez d'ici peu un message pour
                commencer le jeux!</h1>
        </div>
    </section>
</template>
<style scoped>
@font-face {
    font-family: "font genesii";
    src: url(../font/bigFont.otf);
}

#page{
    transition: all 0.3s ease;
}

#annonce {
    font-family: "font genesii", sans-serif;
    font-size: 2rem;
    color: black;
    margin: 20vh;
    font-size: clamp(1rem, 2vw, 2.5rem);
}

#content form #asking {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 50vh;
}

label {
    font-family: "font genesii", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
}

#name {

    width: 100vw;
    height: 10vh;
    margin-top: 5vh;
}

#content img {
    width: 20vw;
    margin-right: 5vw;
}

.info {
    display: flex;
    flex-direction: column;
    width: 20vw;
}


input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    font-family: "font genesii", sans-serif;
    background-color: transparent;
}

#content h2 {
    font-size: 2.5rem;
    font-weight: 600;

}

#content form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-family: "font genesii", sans-serif;
    align-self: flex-start;
    padding-right: 50px;

}

#content {
    background-color: #13ffdf;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 75vh;
    margin-top: 10vh;
    transition: all 1s ease-in-out, background-color 0.3s ease-in-out;
}

#content form button {
    width: 80%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    font-family: "font genesii", sans-serif;
    background-color: #f83c4f;
    color: black;
    cursor: pointer;
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
</style>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
const Loading = ref(false)

const backendUrl = import.meta.env.VITE_BACKEND_KEY
const firstName = ref('')
const name = ref('')
const phone = ref('')
const mail = ref('')
const showContent = ref(true)
const showAnnonce = ref(false)
const annonceClass = ref('')

// Fonction d'inscription
function click() {
    let content = document.getElementById('content');
    Loading.value = true;
    fetch(`${backendUrl}/api/createUser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName.value,
            name: name.value,
            mail: mail.value,
            phone: phone.value
        })
    })
        .then(async res => {
            Loading.value = false;
            let data = await res.json();
            if (data.success === false) {
                if (content) {
                    content.style.backgroundColor = '#f83c4f';
                    setTimeout(() => {
                        content.style.backgroundColor = '#13ffdf';
                    }, 1000);
                }
            }else {
                if (content) {
                                content.classList.add('out');
            setTimeout(() => {
                showContent.value = false;
                showAnnonce.value = true;
                annonceClass.value = 'in';
            }, 800);
            setTimeout(() => {
                annonceClass.value = 'out'
                document.getElementById('name').classList.add('out');
            }, 3200);
            setTimeout(() => {
                router.push('/');
            }, 4000);
                }
            }

        })
}
</script>
