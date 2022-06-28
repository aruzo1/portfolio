<script lang="ts" setup>
const technologies = [
  "HTML",
  "JavaScript",
  "CSS",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Nuxt.js",
  "MySQL",
  "GraphQL",
];
</script>

<template>
  <section id="about" class="about">
    <h2 class="title--section">About <span class="highlight">Me</span></h2>
    <div class="about__content">
      <div class="about__text">
        <p class="paragraph">
          Below are the top twenty (20) web developer portfolio examples that
          you can reference when seeking the right.
        </p>
        <p class="paragraph">
          inspiration to build yours or improve your already existing portfolio.
          Because we know that having a professional portfolio. Here are a few
          I&rsquo;ve been working with recently:
        </p>
        <ul class="about__technologies">
          <li class="about__technology" v-for="technology in technologies">
            {{ technology }}
          </li>
        </ul>
      </div>
      <div class="img-wrapper">
        <img src="/me.png" alt="me" width="250" height="250" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/variables";

.about {
  padding: 2rem 0;

  &__content {
    display: flex;
    gap: 2rem;

    @media (max-width: $sm) {
      flex-direction: column;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  &__technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__technology {
    color: $gray;

    &::before {
      content: "•";
      margin-right: 0.25rem;
      color: $primary;
    }
  }
}
</style>
