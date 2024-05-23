<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">Projects</h2>
    <span class="section__subtitle"></span>
    <div class="container">
      <Carousel :itemsToShow="1.4" :wrapAround="true" :autoplay="2000" :transition="1000">
        <Slide v-for="(slide, index) in data" :key="index">
          <div class="portfolio__content">
            <img class="portfolio__img" :src="slide.image" />
            <div class="portfolio__data">
              <h3 class="portfolio__title">{{ slide.title }}</h3>
              <p class="portfolio__description">
                {{ slide.description }}
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const data = ref([
  {
    title: 'Constellations',
    description:
      ' interactive digital exhibition Constellations: Remaining Celestial Histories in the Early Américas.',
    image: 'assets/img/constellations.png'
  },
  {
    title: 'Covid Forms',
    description: ' Management system for covid expedients.',
    image: 'assets/img/covid.png'
  },
  {
    title: 'Wincify',
    description: 'E-commerce application',
    image: 'assets/img/wincify.png'
  },
  {
    title: 'TransportE',
    description: 'Payment for public transportation, travel optimization, real time tracking',
    image: 'assets/img/trasnportApp.jpeg'
  }
])
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
.portfolio__container {
  overflow: initial;
}
.portfolio__content {
  padding: 0 1.5rem;
}
.portfolio__img {
  /* width: 265px; */
  border-radius: 0.5rem;
  justify-self: center;
  max-height: 238px;
}
.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}
.portfolio__description {
  margin-bottom: var(--mb-0-75);
}
.portfolio__content:hover {
  cursor: pointer;
}

/* For medium devices */
@media screen and (min-width: 568px) {
  .portfolio__content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 768px) {
  .portfolio__img {
    max-height: 238px;
  }
}

/* For large devices */
@media screen and (min-width: 1024px) {
  .portfolio__content {
    column-gap: 5rem;
  }
}
</style>
