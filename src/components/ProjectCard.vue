<template>
    <div class=" border  p-6 rounded-md w-full space-y-2.5 
   border-zinc-300
   dark:border-zinc-700">
        <img v-if="srcImg" :src="currentImg" :alt="`Vista previa del proyecto ${name}`"  class="w-full h-[15rem] transition-opacity duration-500 ease-in-out opacity-100"
            @mouseover="changeImage(true)" @mouseout="changeImage(false)">
        <h3 class="text-2xl font-bold  max-md:text-lg">
            {{ name }}
        </h3>
        <p class=" text-sm">
            {{ resumen }}
        </p>
        <div class=" space-x-1.5 grid grid-cols-6 max-md:grid-cols-4 w-fit space-y-1">
            <span class=" bg-zinc-200 rounded-xl dark:bg-zinc-700 p-1 text-xs" v-for="(tec, index) in tech"
                :key="index">
                {{ tec.text }}
            </span>
        </div>
        <div class="space-x-3">
            <button v-if="demoLink" class=" border py-2 px-4 dark:hover:bg-zinc-900 hover:bg-zinc-200 rounded-md">
                <a :href="demoLink" target="_blank" class=" flex space-x-2 items-center">
                    <AkLinkChain />
                    <span>Demo</span>
                </a>
            </button>
            <button v-if="githubLink" class=" border py-2 px-4 dark:hover:bg-zinc-900 hover:bg-zinc-200 rounded-md">
                <a :href="githubLink" target="_blank" class=" flex space-x-2 items-center">
                    <OcMarkGithub />
                    <span>Codigo</span>
                </a>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { AkLinkChain } from '@kalimahapps/vue-icons';
import { OcMarkGithub } from '@kalimahapps/vue-icons';
const props = defineProps({
    srcImg: {
        type: String,
        required: false,
        default: '',
    },
    srcImg2: {
        type: String,
        required: false,
        default: '',
    },
    role:String,
    name: String,
    tech: Array as PropType<{ text: String }[]>,
    resumen: String,
    demoLink: {
        type: String,
        required: false,
        default: '',
    },
    githubLink: {
        type: String,
        required: false,
        default: '',
    },
})
const currentImg = ref(props.srcImg);

function changeImage(isHovering: boolean) {
    currentImg.value = isHovering ? props.srcImg2 : props.srcImg;
}
</script>
<style lang="">

</style>