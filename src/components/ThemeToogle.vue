<template>
    <button @click="toggleTheme" type="button" class=" cursor-pointer
     hover:bg-zinc-50 p-2 rounded-md flex items-center justify-center group dark:hover:bg-zinc-900">
        <span v-if="isDarkMode">
            <BsMoonStarsFill class="group-hover:text-indigo-500 text-2xl " />
        </span>
        <span v-else>
            <AkSun class=" group-hover:text-amber-400 text-2xl" />
        </span>
    </button>
</template>


<script setup lang="ts">
import { AkSun } from '@kalimahapps/vue-icons';
import { BsMoonStarsFill } from '@kalimahapps/vue-icons';
import { onMounted, ref } from 'vue';

//Funcionalidad de cambio de tema
//Estado para control del modo obscuro
const isDarkMode = ref(false);

// Aplica el tema oscuro o claro a la etiqueta html y guarda la preferencia en localStorage
const applyTheme = () => {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    //Si isDarkMode es true añadira dark como clase del html en caso contrario lo va a remover
};

//Funcion de cambio de tema para accion click del boton al que se le aplique como funcion onclick
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    applyTheme();
};

//Revision en localStorage para establecer el dark al document en caso que de se seleccionara previamente
//Esta es la que evita perder el modo obscuro
//Dado que la weeb es una sola pagina no se manejo por contexto global si no que al montar el componente ya que esta pensado para montarse al arrancar la pagina
onMounted(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        isDarkMode.value = storedTheme === 'dark';
    }
    applyTheme();
});


</script>
<style scoped lang="css">

</style>