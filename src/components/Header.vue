<script setup lang="ts">
import ThemeToogle from './ThemeToogle.vue';
import { OcMarkGithub } from '@kalimahapps/vue-icons';
import { CoBrandLinkedin } from '@kalimahapps/vue-icons';
</script>

<template>
    <header class="w-full py-6 px-4 flex justify-between items-center">
        <div class="flex items-center justify-center space-x-3">
            <nav>
                <ul className="flex space-x-4 text-lg">
                    <li class="hover:text-zinc-500">
                        <a href="">Inicio</a>
                    </li>
                    <li class="hover:text-zinc-500">
                        <a href="">Educacion</a>
                    </li>
                    <li class="hover:text-zinc-500">
                        <a href="">Habilidades</a>
                    </li>
                    <li class="hover:text-zinc-500">
                        <a href="">Experiencia</a>
                    </li>
                    <li class="hover:text-zinc-500">
                        <a href="">Proyectos</a>
                    </li>
                    <li class="hover:text-zinc-500">
                        <a href="">Contactos</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class=" flex items-center justify-center space-x-3">
            <button type="button" class=" hover:bg-zinc-50 rounded-md p-2 dark:hover:bg-zinc-900 hover:text-blue-600">
                <a target="_blank" href="https://www.linkedin.com/in/adrian-aguilar-diaz-4b1079354/">
                    <CoBrandLinkedin class="text-2xl"/>
                </a>
            </button>
            <button type="button" class="hover:bg-zinc-50 rounded-md p-2 dark:hover:bg-zinc-900">
                <a target="_blank" href="https://github.com/dian7875">
                    <OcMarkGithub class="text-2xl" />
                </a>
            </button>
            <ThemeToogle />
        </div>
    </header>
</template>

<style lang="postcss"></style>