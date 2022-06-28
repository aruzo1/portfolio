<script lang="ts" setup>
const menu = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact", button: true },
];
</script>

<template>
  <ul>
    <li v-for="item in menu" :key="item.name">
      <a :href="item.href" :class="item.button ? 'btn--primary' : 'link'">
        {{ item.name }}
      </a>
    </li>
  </ul>
</template>
