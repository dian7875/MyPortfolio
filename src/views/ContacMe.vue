<template>
    <section id="Contacts" class="w-11/12 flex flex-col items-center space-y-4">
        <h2 class=" text-3xl font-bold">
            Contactos
        </h2>
        <div class=" flex justify-between w-full gap-10 max-sm:flex-col">
            <aside class="w-2/4 max-sm:w-full">
                <section class="mb-4 space-y-2.5 text-xl">
                    <p><strong>Nombre completo:</strong> Adrian Aguilar Diaz</p>
                    <p><strong>Correo:</strong> dian7875.a@gmail.com</p>
                    <p><strong>Teléfono:</strong> +506 61968116</p>
                    <p><strong>Residencia:</strong> Río Grande de Nicoya, Guanacaste, Costa Rica</p>
                </section>
                <section aria-label="Redes sociales">
                    <h2 class="font-semibold mb-2 text-xl">Redes sociales</h2>
                    <div class="flex gap-2">
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
                        <button type="button"
                            class=" hover:bg-zinc-50 rounded-md p-2 dark:hover:bg-zinc-900 hover:text-red-300">
                            <a target="_blank" href="https://www.linkedin.com/in/adrian-aguilar-diaz-4b1079354/">
                                <AnFilledInstagram class="text-2xl" />
                            </a>
                        </button>
                        <button type="button"
                            class=" hover:bg-zinc-50 rounded-md p-2 dark:hover:bg-zinc-900 hover:text-blue-600">
                            <a target="_blank" href="https://www.linkedin.com/in/adrian-aguilar-diaz-4b1079354/">
                                <AkFacebookFill n class="text-2xl" />
                            </a>
                        </button>
                    </div>
                </section>
            </aside>
            <aside class="w-2/4 max-sm:w-full">
                <ContactForm />
            </aside>
        </div>
    </section>
</template>
<script setup lang="ts">
import { AkFacebookFill } from '@kalimahapps/vue-icons';
import { AnFilledInstagram } from '@kalimahapps/vue-icons';
import { OcMarkGithub } from '@kalimahapps/vue-icons';
import { CoBrandLinkedin } from '@kalimahapps/vue-icons';
import ContactForm from '../components/ContactForm.vue';
</script>


<style >

</style>
