<script setup>
// document.body.addEventListener('mousemove', (e) => {

//     const x = e.clientX;
//     const y = e.clientY;
//     let pointeur = document.getElementById('mouse');
//     let sizeOfCursor = ; // Size of the cursor
//     if (!pointeur) {
//         pointeur = document.createElement('div');
//         pointeur.id = 'mouse';
//         document.body.appendChild(pointeur);
//     }
// });
</script>

<template>
    <RouterView />
</template>

<style scoped>
#mouse{
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    z-index: 1000;
}
</style>
