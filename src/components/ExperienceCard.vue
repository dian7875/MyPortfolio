<template>
    <div class=" border  p-6 rounded-md w-full space-y-2.5 
   border-zinc-300
   dark:border-zinc-700">
       <h3 class="text-2xl font-bold max-sm:text-lg">
           {{ role }}
       </h3>
       <p>
           {{ place }} ({{ lapse }})
       </p>
       <ul class="list-disc pl-8">
           <li v-for="(ob, index) in objetives" :key="index">
               {{ ob.text }}
           </li>
       </ul>
   </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
defineProps({
   role:String,
   place:String,
   lapse:String,
   objetives: Array as PropType<{ text: String }[]>
})
</script>
<style lang="">
   
</style>