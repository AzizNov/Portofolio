<template>
  <Navbar />
  <section>
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  </section>
</template>

<script setup>
import AboutMe from "./components/about/AboutMe.vue";
import Hero from "./components/hero/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Projects from "./components/projects/Projects.vue";
import Contact from "./components/contact/Contact.vue";
</script>
