<script setup lang="ts">
import ThemeToogle from './ThemeToogle.vue';

</script>

<template>
    <header class="w-full py-6 px-4 flex justify-between items-center">
        <h2 class=" text-2xl font-bold">
            Mi portafolio
        </h2>
        <div class="flex items-center justify-center space-x-3">
            <nav>
                <ul className="flex space-x-4">
                    <li class="hover:text-green-600">
                        <a href="">Inicio</a>
                    </li>
                    <li class="hover:text-green-600">
                        <a href="">Educacion</a>
                    </li>
                    <li class="hover:text-green-600">
                        <a href="">Habilidades</a>
                    </li>
                    <li class="hover:text-green-600">
                        <a href="">Experiencia</a>
                    </li>
                    <li class="hover:text-green-600">
                        <a href="">Proyectos</a>
                    </li>
                    <li class="hover:text-green-600">
                        <a href="">Contactos</a>
                    </li>
                </ul>
            </nav>
            <ThemeToogle />
        </div>
    </header>
</template>

<style lang="postcss"></style>