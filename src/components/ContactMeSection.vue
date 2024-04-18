<script lang="ts" setup></script>

<template>
  <section class="contact section" id="contact">
    <h2 class="section__title">Contact Me</h2>
    <span class="section__subtitle">Get in touch with me</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <i class="uil uil-envelope contact__icon"></i>
          <div>
            <h3 class="contact__title">Email</h3>
            <spam class="contact__subtitle"> rodrigueznohsantiagomiguel@gmail.com </spam>
          </div>
        </div>
        <div class="contact__information">
          <i class="uil uil-map-marker contact__icon"></i>
          <div>
            <h3 class="contact__title">Location</h3>
            <spam class="contact__subtitle"> México </spam>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.contact__container {
  row-gap: 3rem;
}
.contact__information {
  display: flex;
  margin-bottom: var(--mb-2);
}
.contact__icon {
  padding-top: 0.7rem;
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
}
.contact__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}
.contact__subtitle {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}
.contact__content {
  background-color: var(--input-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;
}
.contact__input {
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
}
.contact__label {
  font-size: var(--small-font-size);
  color: var(--title-color);
}
/* For medium devices */
@media screen and (min-width: 568px) {
  .contact__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
