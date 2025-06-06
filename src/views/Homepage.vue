<template >
    <div id="page" class="start" @click="clicked">
        <img src="../img/genesii_starting.svg" alt="bouton de démarrage" id="logo" class="mouvement"  />
        <img src="../img/genesii-name.svg" alt="" id="name" />
        <h2 class="opacity">Cliquer pour commencer</h2>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function clicked() {
    document.getElementById('page').classList.add('out')
    setTimeout(() => {
        router.push('/choice')
    }, 300)
}
</script>

<style scoped>
@font-face {
    font-family: "font genesii";
    src: url(../font/bigFont.otf);
}

h2 {
    font-family: "font genesii", sans-serif;
    text-align: center;
}

#page {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
}

#name {
    margin-top: 5vh;
    width: 30vw;
    height: 20vh;
}

#logo {
    margin-top: 5vh;
    height: 50vh;
    cursor: pointer;
    transition: all 0.3s ease;

}

#logo:hover {
    filter: brightness(1.2);
}

a {
    display: flex;
    justify-content: center;
    align-items: center;
}

.mouvement {
    animation: infiniteScale 3s ease-in-out infinite;
}

@keyframes infiniteScale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.opacity {
    animation: infiniteopacity 3s ease-in-out infinite;
}

@keyframes infiniteopacity {
    0% {
        opacity:0;
    }

    50% {
        opacity:1;
    }

    100% {
        opacity:0.3;
    }
}


.start {
    animation: start 0.3s ease;
}

@keyframes start {
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