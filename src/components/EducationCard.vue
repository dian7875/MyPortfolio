<template>
    <div class="border p-6 rounded-md w-full space-y-2.5
    border-zinc-300
    dark:border-zinc-700">
        <div>
            <h3 class="text-2xl font-bold">
                {{ title }}
            </h3>
            <p>
                {{ place }}, {{ yearStart }} - {{ yearEnd }}
            </p>
        </div>
        <p>
            {{ description }}
        </p>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    title: string
    place: string
    yearStart: string
    yearEnd: string
    description: string
}>()
</script>

<style lang="">

</style>