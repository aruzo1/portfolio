<script lang="ts" setup>
import Navbar from "@/components/navbar/Navbar.vue";
import Home from "./components/home/Home.vue";
import About from "./components/about/About.vue";
import "@/styles/style.scss";
</script>

<template>
  <div class="container">
    <Navbar />
    <Home />
    <About />
  </div>
</template>
