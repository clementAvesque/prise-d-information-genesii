<template>
    <div class="background">
        <div class="blob turquoise"></div>
        <div class="blob red"></div>
    </div>
</template>

<style scoped>
.background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    background: white;
}

.blob {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.7;

}

.turquoise {
    background-color: #00ffc8;
    top: -50px;
    right: 50px;
    animation-delay: 0s;
    animation: floatTurquoise 12s ease-in-out infinite alternate;

}

.red {
    background-color: #ff6f61;
    bottom: -50px;
    left: 50px;
    animation-delay: 2s;
    animation: floatRed 12s ease-in-out infinite alternate;
}

@keyframes floatRed {
    0% {
        transform: translate(0, 0) scale(1);
    }

    50% {
        transform: translate(0, -120%) scale(1.1);
    }

    100% {
        transform: translate(0, 0%) scale(1);
    }
}

@keyframes floatTurquoise {
    0% {
        transform: translate(0, 0) scale(1);
    }

    50% {
        transform: translate(0, 120%) scale(1.1);
    }

    100% {
        transform: translate(0, 0) scale(1);
    }
}
</style>
