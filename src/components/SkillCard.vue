<template>
    <div class=" border  p-6 rounded-md w-full space-y-2.5 
    border-zinc-300
    dark:border-zinc-700">
        <h3 class="text-2xl font-bold max-md:text-lg">
            {{ title }}
        </h3>
        <ul class="list-disc pl-8">
            <li v-for="(tech, index) in technologies" :key="index">
                {{ tech.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
defineProps({
    title: String,
    technologies: Array as PropType<{ name: string }[]>
})
</script>

<style lang="">

</style>