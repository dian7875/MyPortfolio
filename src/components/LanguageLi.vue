<template>
    <li>
        {{ language }} ({{ level }})
    </li>
</template>
<script setup lang="ts">
defineProps<{
    language: string,
    level: string
}>()
</script>
<style lang="">

</style>