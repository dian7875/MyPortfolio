<template>
    <div class="border p-6 rounded-md w-full space-y-2.5
    border-zinc-300
    dark:border-zinc-700">
        <div>
            <h3 class="text-2xl font-bold
            max-md:text-lg">
                Idiomas
            </h3>
            <ul>
                <LanguageLi language="Español" level="Nativo"/>
                <LanguageLi language="Ingles" level="Intermedio B2"/>
            </ul>
        </div>
       
    </div>
</template>
<script setup>
import LanguageLi from './LanguageLi.vue';



</script>
