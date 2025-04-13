<template>
    <section class="flex flex-col space-y-4 w-11/12 items-center">
        <h2 class=" text-3xl font-bold">Proyectos</h2>
        <div class="grid grid-cols-3 gap-4">
            <ProjectCard name="Hogar de libros" resumen="Hogar de Libros es una aplicación web desarrollada a medida para la 
                Biblioteca Pública Municipal de Nicoya. El sistema incluye una página de 
                inicio atractiva y funcional, además de un panel de gestión administrativo. 
                Desde este panel, los administradores pueden gestionar eficientemente activos, cursos, eventos y 
                solicitudes de préstamos, entre otros.
                La plataforma también proporciona estadísticas detalladas sobre las actividades de la biblioteca, 
                permitiendo una gestión más precisa y basada en datos. Además, se ofrece una experiencia fluida para
                los usuarios externos, quienes pueden acceder a beneficios como la inscripción en cursos y la solicitud 
                de préstamos en línea, todo dentro de un entorno intuitivo y fácil de usar."
                :tech="hdltecno"
                srcImg="/HDLPREV.png"
                srcImg2="/HDL2.png"
                demo-link="https://hogar-de-libros-front-zer0.vercel.app"
                github-link="https://github.com/dian7875/Hogar_De_Libros_Front_Zer0.git" />
            <ProjectCard name="Gestion de transportes" resumen="."
                :tech="TDtecno"
                srcImg=""
                srcImg2=""
                demo-link="https://transportes-diaz-fe.vercel.app"
                github-link="https://github.com/dian7875/transportes-Diaz-FE.git" />
            <ProjectCard name="Gestion de cursos" resumen="."
                :tech="Coursetecno"
                srcImg=""
                srcImg2=""
                demo-link="https://hogar-de-libros-front-zer0.vercel.app"
                github-link="https://github.com/dian7875/Hogar_De_Libros_Front_Zer0.git" />

        </div>
        <button type="button" class=" border border-zinc-300 bg-black text-white cursor-pointer
        dark:bg-white dark:text-black dark:hover:bg-zinc-300
        hover:bg-zinc-800 p-4 w-fit rounded-md">
            <router-link to="/portfolio"> Ver portfolio completo </router-link>
        </button>
    </section>
</template>
<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";

const hdltecno=[
    {text:"React + Vite"},
    {text:"Tailwind CSS"},
    {text:"NestJS"},
    {text:"Node.js"},
    {text:"API REST"},
    {text:"MySQL"},
]

const TDtecno=[
    {text:"Angular"},
    {text:"Tailwind CSS"},
    {text:"NestJS"},
    {text:"Node.js"},
    {text:"API REST"},
    {text:"MySQL"},
]

const Coursetecno=[
    {text:"React + Vite"},
    {text:"Tailwind CSS"},
    {text:"MockApi"}
]
</script>
<style lang=""></style>
