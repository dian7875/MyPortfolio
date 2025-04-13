<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import AboutMe from "./AboutMe.vue";
import Experience from "./Experience.vue";
import MySkills from "./MySkills.vue";
</script>

<template>
  <Header />
  <main class=" flex w-full items-center flex-col mt-13 space-y-10">
    <AboutMe />
    <MySkills/>
    <Experience/>
  </main>
  <Footer />
</template>

<style lang="postcss"></style>
