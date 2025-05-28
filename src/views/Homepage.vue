<template>
    <div id="page">
        <img src="../img/genesii_starting.svg" alt="bouton de démarrage" id="logo" :class="[{ animation: anim },'start']" @click="clicked" />
        <img src="../img/genesii-name.svg" alt="" id="name" class="start"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const anim = ref(false)
const router = useRouter()

function clicked() {
    document.getElementById('page').style.opacity = '0'
    anim.value = true
    setTimeout(() => {
        router.push('/choice')
    }, 300)
}
</script>

<style scoped>
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
    transform: scale(1.30);
    transition: transform 0.3s ease;
}

a {
    display: flex;
    justify-content: center;
    align-items: center;
}

.animation {
    animation: clicked 0.3s ease-in-out;
}

@keyframes clicked {
    0% {
        transform: scale(1.30);
    }

    50% {
        transform: scale(1.40);
    }

    100% {
        transform: scale(1.30);
    }

}

.start {
    animation: start 0.8s ease;
}

@keyframes start {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>