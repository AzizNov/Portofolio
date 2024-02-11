<template>
  <Navbar />
  <section>
    <Hero />
  </section>
  <section>
    <AboutMe />
  </section>
  <section>
    <Projects />
  </section>
  <section>
    <Contact />
  </section>
</template>

<script setup>
import AboutMe from "./components/AboutMe.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
</script>
