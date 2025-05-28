<template>
    <img src="../img/genesii-name.svg" alt="genesii" id="name" />
    <div id="container">
        <div class="animated-left" id="sub" @click="subscribe">
            <h2>inscription</h2>
            <p>Participez à notre événement pour obtenir le plan de la soirée grâce à notre assistant selmoh.</p>
            <img src="../img/questionnaire.png" alt="">
        </div>

        <div id="response"class="animated-right">
            <h2>une réponse?</h2>
            <p>vous avez trouvé le mot de passe de l’énigme que vous avez reçu?</p>
            <img src="../img/loupe.png" alt="">
        </div>
    </div>
</template>
<style scoped>

#name {
    width: 100vw;
    height: 10vh;
    margin-top: 5vh;
}
.poppins {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

#container h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 10px;
    text-align: center;
}

#container p {
    padding: 10px;
    font-weight: 600;
    text-align: center;
    width: 50%;
}

#container {
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

#sub {
    height: 60vh;
    background-color: #40d7c3;
    color: black;
    width: 50vw;
    padding-right: 10%;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-in-out;
}

#sub:hover {
    background-color: #13ffdf;
    transition: all 0.3s ease-in-out;
}

#sub img {
    height: 30%;
    margin-top: 10px;
}


#response {
    width: 40vw;
    padding-left: 10%;
    height: 60vh;
    background-color: #f48591;
    color: black;
    width: 45%;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-in-out;
}

#response:hover {
    background-color: #f83c4f;
    transition: all 0.3s ease-in-out;
}



#response img {
    height: 30%;
    margin-top: 10px;
}

.animated-left {
    animation: slideLeft 1s ease;
}

.animated-right {
    animation: slideRight 1s ease;
}

@keyframes slideLeft {
    0% {
        transform: translateX(-100vw);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideRight {
    0% {
        transform: translateX(100vw);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function subscribe() {
    
        document.getElementById('response').style.opacity = '0'
        document.getElementById('response').style.width = '0'
        setTimeout(() => {
           document.getElementById('response').style.display = 'none'
        }, 300)
        setTimeout(() => {
            let sub = document.getElementById('sub')
            sub.style.width = '100vw'
            sub.style.height = '90vh'
            sub.style.clipPath = 'none'
            document.getElementById('name').style.marginBottom = '10px'
            
            Array.from(sub.children).forEach(element => {
                element.style.display = 'none'
                
            });
            
        }, 900)
        setTimeout(() => {
            router.push('/register')
        }, 1500)
}
</script>