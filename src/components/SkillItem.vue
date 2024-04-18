<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'icon'])
const isSkillOpen = ref(false)
const skillToggle = () => {
  isSkillOpen.value = !isSkillOpen.value
}
</script>

<template>
  <div
    class="skills__content"
    :class="[isSkillOpen ? 'skills__open' : 'skills__close']"
    @click="skillToggle"
  >
    <div class="skills__header">
      <i class="uil skills__icon" :class="[props.icon]"></i>
      <div>
        <h1 class="skills__title">{{ props.title }}</h1>
      </div>
      <i class="uil uil-angle-down skills__arrow"></i>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.skills__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
}
.skills__icon,
.skills__arrow {
  font-size: 3rem;
  color: var(--first-color);
}

.skills__icon {
  margin-right: var(--mb-0-75);
}
.skills__title {
  font-size: var(--h3-font-size);
}
</style>
