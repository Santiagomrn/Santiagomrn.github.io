<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import ThemeButton from './ThemeButton.vue'
import { Carousel, Slide } from 'vue3-carousel'
const myCarousel = ref(null)
const root = ref()
onMounted(() => {
  root.value = document.documentElement
  changeTheme(colorButtons.value[0].color)
})
const currentIndex = ref(0)
const colorButtons = ref([
  {
    color: 0
  },
  {
    color: 32
  },
  {
    color: 62
  },
  {
    color: 92
  },
  {
    color: 142
  },
  {
    color: 175
  },
  {
    color: 250
  },
  {
    color: 218
  },
  {
    color: 280
  },
  {
    color: 310
  }
])
const handleLoop = (data) => {
  // console.log(data)
  changeTheme(colorButtons.value[data.slidingToIndex % 10].color)
}
const changeTheme = (hue) => {
  root.value.style.setProperty('--hue-color', hue)
}
const onClick = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="theme__container">
    <Carousel
      v-model="currentIndex"
      ref="myCarousel"
      :itemsToShow="5"
      :autoplay="4000"
      :wrapAround="true"
      :transition="800"
      @slide-start="handleLoop"
    >
      <Slide v-for="(button, index) in colorButtons" :key="index" :index="currentIndex">
        <ThemeButton :color="button.color" @click="onClick(index)"></ThemeButton>
      </Slide>
    </Carousel>
  </div>
</template>
<!-- v-tooltip="{
  content: 'Click me',
  shown: button.tooltlip
}" -->
<style lang="css" scoped>
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
.theme__container {
  margin: auto 1.5rem;
}

@media screen and (min-width: 568px) {
  .theme__container {
    margin: auto 3rem;
  }
}
</style>
