<template>
  <section id="home" class="home">
    <h1 class="title">
      Hi, I'm <span class="highlight">Aruzo</span> Frontend Web Developer.
    </h1>
    <p class="text">
      For over a decade, I have studied and inscribed the sacred runes and
      performed the arcane rituals that breathe life into the realm of the
      internet. For over a decade, I have studied and inscribed the sacred runes
      and performer.
    </p>
    <div class="home__btns">
      <a class="btn--primary" href="#projects">My Projects</a>
      <a class="btn--text" href="#contact">Contact Me</a>
    </div>
  </section>
</template>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1rem;
  padding: 2rem 0;

  &__btns {
    display: flex;
    column-gap: 1rem;
  }
}
</style>
