<template>
    <section id="Skills" class="w-11/12 flex items-center flex-col space-y-4 ">
        <h2 class=" text-3xl font-bold">Habilidades tecnicas</h2>
        <div class="grid grid-cols-3 w-full gap-10 max-lg:flex-col max-lg:flex">
            <SkillCard title="Lenguajes de programación, marcado y consulta" :technologies="LangCodeList" />
            <SkillCard title="Frameworks/Librerías de UI" :technologies="FrontEndTechList" />
            <SkillCard title="Frameworks Back-End" :technologies="BackEndTechList" />
            <div class="col-span-3 flex gap-10 max-md:flex-col max-md:flex">
                <SkillCard title="Base de datos" :technologies="BDTechList" />
                <SkillCard title="Herramientas de desarrollo" :technologies="ToolsTechList" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import SkillCard from '../components/SkillCard.vue';
const FrontEndTechList = [
    { name: 'React' },
    { name: 'Vue3' },
    { name: 'Angular' },
    { name: 'Tailwind CSS' },
]

const LangCodeList = [
    { name: 'JavaScript / TypeScript' },
    { name: 'HTML5' },
    { name: 'CSS' },
    { name: 'SQL' },
    { name: 'C++' },
    { name: 'C#' },
]
const BackEndTechList = [
    { name: 'NestJS' },
    { name: 'Express' },
    { name: '.NET' },
]
const BDTechList = [
    { name: 'Mysql' },
    { name: 'SqlServer' }
]
const ToolsTechList = [
    { name: 'Git & GitHub' },
    { name: 'Docker' },
    { name: 'Cypress' },
    { name: 'Figma' },
    { name: 'Mocha' },
    { name: 'MockAPI' },

]
</script>
<style></style>