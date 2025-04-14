<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
<footer class=" w-full dark:bg-zinc-800 p-4 mt-10 flex items-center justify-center flex-col bg-black text-white
 max-md:text-sm max-md:items-center max-md:px-2">
    <p>&copy; {{ year }} Adrian Aguilar D. Todos los derechos reservados</p>
    <p>Desarrollado con Vue3 y Tailwind CSS</p>
</footer>
</template>

<style lang="postcss"></style>