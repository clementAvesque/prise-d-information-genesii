<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timeoutId
let animation
function resetTimer() {
    clearTimeout(animation)
    clearTimeout(timeoutId)
    animation = setTimeout(() => {
        document.getElementById("contenus").classList.add('out')
    }, 9500)
    timeoutId = setTimeout(() => {
        document.getElementById("contenus").classList.remove('out')
        router.push('/')
    }, 10000) 
}

onMounted(() => {
    document.getElementById("contenus").addEventListener('click', resetTimer)
    resetTimer()
})

onUnmounted(() => {
    clearTimeout(timeoutId)
    document.getElementById("contenus").removeEventListener('click', resetTimer)
})
</script>

<template>
    <div id="contenus">
    <RouterView />
    </div>
</template>

<style scoped>
.out {
    animation: out 0.5s ease;
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
