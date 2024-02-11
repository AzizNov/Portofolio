<template>
  <div class="flex justify-center items-center h-screen -mt-20">
    <main class="max-w-4xl">
      <Logo />
      <Header />
      <ButtonHero />
    </main>
  </div>
</template>

<script setup>
import ButtonHero from "./ButtonHero.vue";
import Header from "./Header.vue";
import Logo from "./Logo.vue";
</script>
