<script lang="ts" setup>
import Navbar from "@/components/navbar/Navbar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import "@/styles/style.scss";
</script>

<template>
  <div class="container">
    <Navbar />
    <Home />
    <About />
    <Projects />
  </div>
</template>
