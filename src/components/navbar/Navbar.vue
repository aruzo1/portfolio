<script lang="ts" setup>
import { ref } from "vue";
import Menu from "./Menu.vue";
import MenuIcon from "./MenuIcon.vue";

const showMobileMenu = ref(false);

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}
</script>

<template>
  <nav class="nav">
    <a href="#home">
      <img src="/logo.png" alt="logo" height="32" />
    </a>

    <!-- Desktop -->
    <Menu class="nav__menu--desktop" />

    <!-- Mobile -->
    <button class="menu--mobile__btn" @click="toggleMobileMenu">
      <MenuIcon class="btn__icon" />
    </button>
    <Menu class="nav__menu--mobile" v-if="showMobileMenu" />
  </nav>
</template>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/components";

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid $gray-light;

  &__menu--desktop {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    @media (max-width: $sm) {
      display: none;
    }
  }

  &__menu--mobile {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    margin-top: 1rem;

    @media (min-width: $sm) {
      display: none;
    }
  }
  
  .menu--mobile__btn {
    @extend .btn;
    padding: 0.5rem;

    @media (min-width: $sm) {
      display: none;
    }

    .btn__icon {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
</style>
