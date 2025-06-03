<script setup>
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
