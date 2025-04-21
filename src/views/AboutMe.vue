<template>
    <section class=" flex w-11/12 items-center 
    max-md:flex-col-reverse" id="Start">
        <div class="w-full space-y-3">
            <h1 class=" text-4xl font-bold max-md:text-xl max-md:mt-3">
                Hola, soy Adrian Aguilar D.
            </h1>
            <h2 class=" text-2xl max-md:text-xl">Desarrollador Web y estudiante de ingeniria en sistemas de infomacion
            </h2>
            <p class=" text-md">
                Soy un apasionado desarrollador web con experiencia en tecnologías frontend y backend. Actualmente estoy
                cursando mi carrera universitaria y buscando oportunidades para aplicar mis conocimientos en proyectos
                desafiantes.
            </p>
            <div class=" space-x-4">
                <a href="#Contacts">
                    <button type="button" class=" 
                      p-2 rounded-md cursor-pointer transition-colors duration-300 border
                    bg-emerald-600 hover:bg-emerald-700 text-white
                    dark:bg-emerald-500 dark:hover:bg-emerald-600
                    ">Contactar</button>
                </a>
                <a href="/Adrian_AguilarCV.pdf" download>
                    <button type="button" class=" 
    p-2 rounded-md cursor-pointer transition-colors duration-300 border
    bg-black text-white hover:bg-zinc-300 border-zinc-300
    dark:bg-white dark:text-black dark:hover:bg-zinc-300 dark:border-zinc-700 
  ">
                        Descargar CV
                    </button>
                </a>
                <router-link to="/portfolio">
                    <button type="button" class=" 
                        p-2 rounded-md cursor-pointer transition-colors duration-300 border
                        bg-white text-black hover:bg-zinc-200 border-zinc-300
                        dark:bg-black dark:text-white dark:hover:bg-zinc-800 dark:border-zinc-700 
                        ">Ver portafolio</button>
                </router-link>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <div class="w-64 h-64 rounded-full flex items-center justify-center
            bg-zinc-300
            dark:bg-zinc-800">
                <img class="rounded-full w-56 h-56 object-cover" src="/image.png" alt="">
            </div>
        </div>
    </section>
    <section class="flex w-11/12 items-center flex-col space-y-4" id="Education">
        <h2 class=" text-3xl font-bold">
            Educación
        </h2>
        <div class=" grid grid-cols-2 gap-10 w-full max-md:grid-cols-1">
            <EducationCard title="Ingenieria en sistemas de informacion" place="Universidad nacional de costa rica"
                year-start="2020" year-end="Presente"
                description="Cursando actualmente el ultimo año de la carrera con enfoque en desarrollo web." />
            <LanguageCard />
        </div>
    </section>
</template>

<script setup>
import EducationCard from '../components/EducationCard.vue';
import LanguageCard from '../components/LanguageCard.vue';



</script>

<style></style>