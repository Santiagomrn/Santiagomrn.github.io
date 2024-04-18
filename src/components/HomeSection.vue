<script lang="ts" setup>
import Theme from './Theme.vue'
</script>

<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <div class="home__content grid">
        <div class="home__social">
          <a
            href="https://www.linkedin.com/in/santiagorodrigueznoh/"
            target="_blank"
            class="home__social-icon"
            ><i class="uil uil-linkedin"></i
          ></a>
          <a href="https://github.com/Santiagomrn" target="_blank" class="home__social-icon"
            ><i class="uil uil-github"></i
          ></a>
        </div>
        <div class="home__image">
          <svg class="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M48.2,-68.4C60.1,-57.7,65.8,-40.5,72.2,-22.9C78.7,-5.4,86,12.5,82.9,28.5C79.8,44.5,66.4,58.6,50.8,70C35.3,81.4,17.6,90.1,-0.2,90.3C-18,90.6,-36,82.4,-50.8,70.8C-65.7,59.2,-77.3,44.1,-81.9,27.3C-86.4,10.5,-83.7,-7.9,-76.7,-23.5C-69.7,-39.1,-58.4,-51.9,-44.8,-62C-31.3,-72.2,-15.7,-79.7,1.2,-81.4C18.2,-83.1,36.3,-79.1,48.2,-68.4Z"
              transform="translate(100 100)"
            />
            <image class="home__blob-img" x="30" y="3" href="@/assets/img/me.png" />
          </svg>
        </div>
        <div class="home__theme">
          <Theme />
        </div>
        <div class="home__data">
          <h1 class="home__title">Hi, I'am santiago</h1>
          <h3 class="home__subtitle">Computer Engineer</h3>
          <p class="home__description">
            High level experience in software development and cloud technologies.
          </p>
          <a href="#contact" class="button button--flex">
            Contact Me
            <i class="uil uil-message button__icon"></i>
          </a>
        </div>
      </div>
      <div class="home__scroll">
        <a href="#about" class="home__scroll-button button--flex">
          <i class="uil uil-mouse-alt home__scroll-mouse"></i>
          <span class="home__scroll-name">Scroll down</span>
          <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  gap: 0;
}
.home__container {
  gap: 1rem;
}
.home {
  padding-top: 0 !important;
}
.home__content {
  grid-template-columns: 0.5fr 3fr;
  padding-top: 2.5rem;
  align-items: center;
}
.home__social {
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
  justify-content: center;
}
.home__social-icon {
  font-size: 1.7rem;
  color: var(--first-color);
}
.home__social-icon:hover {
  color: var(--first-color-alt);
}
.home__blob {
  width: 200px;
  fill: var(--first-color);
}
.home__blob-img {
  width: 150px;
}
.home__data {
  grid-column: 1/3;
}
.home__theme {
  grid-column: 1/3;
}
.home__title {
  font-size: var(--big-font-size);
}
.home__subtitle {
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
}
.home__description {
  margin-bottom: var(--mb-2);
}
.home__scroll {
  display: block;
}
.home__scroll-button {
  color: var(--first-color);
  transition: 0.3s;
}

.home__scroll-button:hover {
  transform: translateY(0.25rem);
}
.home__scroll-mouse {
  font-size: 2rem;
}
.home__scroll-name {
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-25);
}
.home__scroll-arrow {
  font-size: 1.25rem;
}

/* For medium devices */
@media screen and (min-width: 568px) {
  .home__content {
    grid-template-columns: max-content 1fr 1fr;
  }
  .home__social {
    order: 0;
  }
  .home__img {
    order: 1;
    justify-self: center;
  }
  .home__data {
    order: 2;
    grid-column: initial;
  }
  .home__theme {
    order: 3;
  }
}

@media screen and (min-width: 768px) {
  .home__container {
    row-gap: 5rem;
  }
  .home__content {
    padding-top: 5.5rem;
    column-gap: 2rem;
  }
  .home__blob {
    width: 270px;
  }
}

/* For large devices */
@media screen and (min-width: 1024px) {
  .home__social {
    transform: translateX(-6rem);
  }
  .home__social-icon {
    font-size: var(--big-font-size);
  }
}
</style>
