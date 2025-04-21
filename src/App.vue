<script setup lang="ts">
import { Toaster } from '@steveyuowo/vue-hot-toast';
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
</script>

<template>
    <Toaster />
    <router-view v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style lang="css">

.page-enter-active, .page-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
  transform-origin: top left;
}
.page-enter-from {
  transform: rotateY(-45deg) rotateX(5deg);
  opacity: 0;
}
.page-leave-to {
  transform: rotateY(45deg) rotateX(-5deg);
  opacity: 0;
}


</style>
