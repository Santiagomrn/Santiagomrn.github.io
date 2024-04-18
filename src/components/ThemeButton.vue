<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const root = ref()
const props = defineProps(['color', 'selected'])
const hslColor = ref('hsl(' + `${props.color}` + ', 71%, 27%)')
onMounted(() => {
  root.value = document.documentElement
})

// const changeTheme = (hue) => {
//   root.value.style.setProperty('--hue-color', hue)
// }
const mouseOver = () => {
  hslColor.value = 'hsl(' + `${props.color}` + ', 57%, 53%)'
}
const mouseLeave = () => {
  hslColor.value = 'hsl(' + `${props.color}` + ', 71%, 27%)'
}
</script>

<template>
  <button
    class="theme__button"
    :style="{ 'background-color': hslColor }"
    @click="$emit('click')"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  ></button>
</template>

<style lang="css" scoped>
.theme__button {
  border: 2.5px outset black;
  border-radius: 15%;
  height: 35px;
  width: 35px;
  cursor: pointer;
}
</style>
