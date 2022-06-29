<template>
  <section id="contact" class="contact">
    <h1 class="contact__title">Contact <span class="highlight">Me</span></h1>
    <p class="text">
      Although I&rsquo;m not currently looking for any new opportunities, my
      inbox is always open. Whether you have a question or just want to say hi,
      I&rsquo;ll try my best to get back to you!
    </p>
    <a href="mailto:dawid12391111@gmail.com" class="contact__btn">
      Dawid12391111@gmail.com
    </a>
  </section>
</template>

<style lang="scss">
@import "@/styles/components";

.contact {
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 1rem;
  padding: 2rem 0;

  &__title {
    @extend .title;

    overflow: hidden;

    &:before,
    &:after {
      content: "";
      position: relative;
      display: inline-block;
      vertical-align: middle;
      height: 1px;
      width: 50%;
      background: $gray-light;
    }

    &:before {
      right: 1rem;
      margin-left: -50%;
    }

    &:after {
      left: 1rem;
      margin-right: -50%;
    }
  }

  &__btn {
    @extend .btn--primary;

    align-self: center;
  }
}
</style>
