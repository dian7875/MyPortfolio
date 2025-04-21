<template>
    <form @submit.prevent="sendEmail"
        class="border flex flex-col space-y-5 p-5 rounded-md w-full dark:border-zinc-800 border-zinc-300 ">
        <fieldset class="flex flex-col space-y-2">
            <legend class="font-semibold mb-2">Información de contacto</legend>

            <label for="name">Nombre</label>
            <input id="name" v-model="form.name" name="name" required minlength="2" type="text" autocomplete="name"
                class="border border-zinc-300 dark:border-zinc-800 rounded-md p-2" placeholder="Nombre completo" />

            <label for="email">Correo</label>
            <input id="email" v-model="form.email" name="email" required type="email" autocomplete="email"
                class="border border-zinc-300 dark:border-zinc-800 rounded-md p-2" placeholder="ejem@tudominio.com" />

            <label for="phone">Teléfono</label>
            <input id="phone" v-model="form.phone" name="phone" required type="tel" pattern="[0-9]{8,}"
                autocomplete="tel" class="border border-zinc-300 dark:border-zinc-800 rounded-md p-2"
                placeholder="Numero para contacto" />
        </fieldset>

        <fieldset class="flex flex-col space-y-2">
            <label for="reason">Motivo</label>
            <textarea v-model="form.reason" id="reason" name="reason" required rows="4" minlength="10"
                class="border border-zinc-300 dark:border-zinc-800 rounded-md p-2"
                placeholder="Me encantaria saber en que puedo colaborarte. Escribe cualquier motivo aqui."></textarea>
        </fieldset>

        <button type="submit" class=" border rounded-md py-2 px-4 
        bg-black text-white
        dark:bg-white dark:text-black 
        hover:bg-zinc-400 dark:hover:bg-zinc-300
        transition-colors duration-300">
            <span v-if="isLoading">Enviando...</span>
            <span v-else>Enviar</span>
        </button>
    </form>

</template>
<script setup lang="ts">

import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';
import { toast } from '@steveyuowo/vue-hot-toast';

const userId = import.meta.env.VITE_EMAILJS_USER_ID;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


const form = reactive({
    name: '',
    email: '',
    phone: '',
    reason: '',
    projectName: 'ProjectZero'
})

const isLoading = ref(false);

async function sendEmail() {
    try {
        isLoading.value = true;
        await emailjs.send(serviceId, templateId, form, userId);
        toast.success("Enviado con exito")
        form.name = '';
        form.email = '';
        form.phone = '';
        form.reason = '';
    } catch (error) {
        console.error('Error al enviar correo:', error);
        alert('Error al enviar el correo ❌');
    } finally {
        isLoading.value = false;
    }
}
</script>
<style lang="">

</style>