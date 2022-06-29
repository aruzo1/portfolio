<script lang="ts" setup>
const projects = [
  {
    img: "/cosmac.png",
    title: "Cosmac",
    desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    badges: ["Next.js", "Django Rest Framework", "TypeScript", "Tailwind"],
  },
];
</script>

<template>
  <section id="projects" class="projects">
    <h2 class="title--section"><span class="highlight">My</span> Projects</h2>
    <ul>
      <li
        v-for="project in projects"
        :key="project.title"
        class="projects__project"
      >
        <div class="projects__content">
          <h3 class="projects__title">{{ project.title }}</h3>
          <p class="text">{{ project.desc }}</p>
          <ul class="projects__badges">
            <li
              v-for="badge in project.badges"
              :key="badge"
              class="projects__badge"
            >
              {{ badge }}
            </li>
          </ul>
        </div>
        <div class="projects__img-wrapper">
          <img :src="project.img" alt="projekt" />
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "@/styles/components";

.projects {
  padding: 2rem 0;

  &__project {
    position: relative;
  }

  &__content {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 65%;
    padding: 1rem;
    border-radius: $border-radius;
    background: #fff;
    box-shadow: 2px 2px 0.5rem 0 rgba(#000, 0.125);

    @media (max-width: $md) {
      position: unset;
      transform: none;
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  &__title {
    color: $primary;
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__badge {
    padding: 0.1rem 1rem;
    border: 1px solid $primary;
    border-radius: 999px;
    font-size: 0.9rem;
    color: $primary;
    background: rgba($primary, 0.1);
  }

  &__img-wrapper {
    @extend .img-wrapper;

    width: 75%;

    @media (max-width: $md) {
      width: calc(100% - 1rem);
    }

    & > img {
      width: 100%;
    }
  }
}
</style>
