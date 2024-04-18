<script lang="ts" setup></script>

<template>
  <section class="about section" id="about">
    <h2 class="section__title">About Me</h2>
    <!-- <span class="section__subtitle"> </span> -->
    <div class="about__container container grid">
      <div class="about__data">
        <p class="about__description">
          Passionate and dedicated software engineer with expertise in full-stack JavaScript and
          back-end Java development.
        </p>
        <div class="about__info">
          <div>
            <span class="about__info-title">04+</span>
            <span class="about__info-name">Years <br />experience</span>
          </div>
          <div>
            <span class="about__info-title">10+</span>
            <span class="about__info-name">Completed <br />projects</span>
          </div>
          <div>
            <span class="about__info-title">04+</span>
            <span class="about__info-name">Companies <br />worked</span>
          </div>
        </div>
        <div class="about__buttons">
          <a download="" href="/assets/pdf/CV-Santiago_Rodriguez.pdf" class="button button--flex">
            Download CV
            <i class="uil uil-download-alt button__icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__description {
  text-align: center;
  margin-bottom: var(--mb-2-5);
}
.about__info {
  display: flex;
  justify-content: space-around;
  margin-bottom: var(--mb-2-5);
}
.about__info-title {
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
}
.about__info-name {
  font-size: var(--smaller-font-size);
}
.about__info-title,
.about__info-name {
  display: block;
  text-align: center;
}
.about__buttons {
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .about__container {
    column-gap: 5rem;
  }
  .about__description {
    text-align: center;
  }
}
</style>
