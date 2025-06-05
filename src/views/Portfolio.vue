<template>
    <main class=" flex items-center justify-center flex-col space-y-4 ">
        <header class=" w-full flex justify-between py-4 px-3 bg-black text-white dark:dark:bg-zinc-800">
            <h1 class="text-3xl font-bold">
                Adrian Aguilar D.
            </h1>
            <div class=" flex items-center justify-center space-x-3 max-sm:hidden">
                <button type="button"
                    class=" hover:bg-zinc-50 rounded-md p-2 dark:hover:bg-zinc-900 hover:text-blue-600">
                    <a target="_blank" href="https://www.linkedin.com/in/adrian-aguilar-diaz-4b1079354/">
                        <CoBrandLinkedin class="text-2xl" />
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
        <section class="text-center space-y-3 p-10">
            <h2 class=" text-4xl font-bold">
                Mi Portafolio de proyectos
            </h2>
            <router-link to="/">
                <button class="border border-zinc-300 bg-black text-white cursor-pointer
                dark:bg-white dark:text-black dark:hover:bg-zinc-300
                hover:bg-zinc-800 p-2 w-fit rounded-md">
                    Volver al CV
                </button>
            </router-link>
        </section>
        <section class="space-y-3 w-11/12">
            <h3 class=" text-center text-2xl font-bold">Proyectos destacados</h3>
            <div class="grid grid-cols-1 gap-4 max-lg:grid-cols-1">
                <PortFolioProyectCard role="Desarrollador Full Stack (Full Stack Developer)" name="Hogar de libros"
                    resumen="Hogar de Libros es una aplicación web desarrollada a medida para la Biblioteca Pública Municipal de Nicoya. El sistema incluye una página de inicio atractiva y funcional, además de un panel de gestión administrativo desde el cual los administradores pueden gestionar eficientemente activos, cursos, eventos y solicitudes de préstamos, entre otros.
            La plataforma también proporciona estadísticas detalladas sobre las actividades de la biblioteca,
            lo que permite una gestión más precisa y basada en datos. Además, ofrece una experiencia fluida para
            los usuarios externos, quienes pueden acceder a beneficios como la inscripción en cursos y la solicitud de
            préstamos en línea, todo dentro de un entorno intuitivo y fácil de usar." :tech="hdltecno"
                    srcImg="/HDLPREV.png" srcImg2="/HDL2.png"
                    demo-link="https://hdl.dianprojects.online" />
                <PortFolioProyectCard role="Desarrollador Full Stack (Full Stack Developer)"
                    name="Gestion de transportes" resumen="Aplicación web desarrollada a la medida para la empresa Transportes Díaz.
                El sistema incluye la gestión básica de choferes, camiones y clientes, así como el control de los transportes realizados.
                Además, permite la generación de reportes detallados,
                tanto para análisis interno de la empresa como para presentación a clientes.
                   Incluye control de gastos y exportación de reportes en formatos PDF o Excel, adaptándose a los requerimientos de diferentes clientes.
                   Accede con las credenciales Ususario: Invitados Contraseña: Invitados123 para ver mas."
                    :tech="TDtecno" srcImg="/TD1.png" srcImg2="TD2.png"
                    demo-link="https://ejemplo-td.dianprojects.online"
                    github-link="https://github.com/dian7875/transportes-Diaz-FE.git" />
                <PortFolioProyectCard name="Gestion de cursos" role="Desarrollador Frontend (Frontend Developer)"
                    resumen="Aplicativo desarrollado como proyecto de programación, enfocado en el consumo de una API de terceros.
                Incluye la gestión de cursos, así como funcionalidades básicas para la eliminación, adición, edición y búsqueda de registros."
                    :tech="Coursetecno" srcImg="/TLD.png" srcImg2="/TDL2.png"
                    demo-link="https://courses-manage.vercel.app"
                    github-link="https://github.com/dian7875/CoursesManage.git" />
            </div>
        </section>
        <section class=" w-full flex items-center justify-center mt-3">
            <ContacMe />
        </section>
        <Footer />
    </main>
</template>

<script setup lang="ts">
import { OcMarkGithub } from '@kalimahapps/vue-icons';
import { CoBrandLinkedin } from '@kalimahapps/vue-icons';
import Footer from '../components/Footer.vue';
import PortFolioProyectCard from '../components/PortFolioProyectCard.vue';
import ContacMe from './ContacMe.vue';
import ThemeToogle from '../components/ThemeToogle.vue';
const hdltecno = [
    { text: "React + Vite" },
    { text: "Tailwind CSS" },
    { text: "NestJS" },
    { text: "Node.js" },
    { text: "API REST" },
    { text: "MySQL" },
]

const TDtecno = [
    { text: "Angular" },
    { text: "Tailwind CSS" },
    { text: "NestJS" },
    { text: "Node.js" },
    { text: "API REST" },
    { text: "MySQL" },
]

const Coursetecno = [
    { text: "React + Vite" },
    { text: "Tailwind CSS" },
    { text: "MockApi" }
]

</script>
<style lang="">

</style>
