<template>
    <section id="Experience" class="w-11/12 flex items-center justify-center space-y-4 flex-col">
        <h2 class=" text-3xl font-bold">
            Experiencia
        </h2>
        <div class=" flex w-full max-md:flex-col max-md:space-y-4">
            <ExperienceCard role="Desarrollador full stack" place="Biblioteca publica Municipal de Nicoya"
                lapse="2024 - 2025" :objetives="hdlObjetives" />
        </div>
    </section>
</template>
<script setup>
import ExperienceCard from '../components/ExperienceCard.vue';
const hdlObjetives = [
    { text: "Levantamiento y análisis de requerimientos con el cliente" },
    { text: "Diseño de arquitectura general de la solución" },
    { text: "Diseño de interfaces de usuario en Figma con enfoque UX/UI" },
    { text: "Desarrollo de interfaces responsivas con React y Tailwind CSS" },
    { text: "Implementación de lógica del negocio y APIs REST con NestJS" },
    { text: "Integración de base de datos y modelado de entidades (MySQL)" },
    { text: "Implementación de funcionalidades de generación de reportes en PDF con Handlebars y Puppeteer" },
    { text: "Validación de formularios y manejo de errores" },
    { text: "Pruebas funcionales manuales y automatizadas a UI (Cypress)" },
    { text: "Control de versiones y gestión del proyecto con Git y GitHub" },
    { text: "Despliegue de la aplicación en entorno de producción" },
    { text: "Documentación técnica y manuales para usuarios finales" }
];

</script>
<style lang="">

</style>