<script setup>
import { ref } from 'vue'
import NavigationItem from './NavigationItem.vue'
const menuIsOpen = ref(false)
const menuToggle = () => {
  menuIsOpen.value = !menuIsOpen.value
}
</script>

<template>
  <nav class="nav container">
    <a href="#" class="nav__logo">Santiago</a>
    <div class="nav__menu" :class="[menuIsOpen ? 'show-menu' : '']" id="nav-menu">
      <ul class="nav__list grid">
        <NavigationItem href="#home" item-name="Home" icon="uil uil-estate"></NavigationItem>
        <NavigationItem href="#about" item-name="About" icon="uil uil-user"></NavigationItem>
        <NavigationItem href="#skills" item-name="Skills" icon="uil uil-file-alt"></NavigationItem>
        <NavigationItem
          href="#portfolio"
          item-name="Portfolio"
          icon="uil uil-scenery"
        ></NavigationItem>
        <NavigationItem
          href="#contact"
          item-name="Contact me"
          icon="uil uil-message"
        ></NavigationItem>
      </ul>
      <i v-if="menuIsOpen" class="uil uil-times nav__close" id="nav-close" @click="menuToggle"></i>
    </div>
    <div class="nav__btns">
      <div class="nav__toggle" id="nav-toggle">
        <i v-if="!menuIsOpen" class="uil uil-apps" @click="menuToggle"></i>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.nav {
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo,
.nav__toggle {
  color: #fff;
  font-weight: var(--font-semi-bold);
  font-size: var(--h1-font-size);
}
.nav__logo:hover {
  color: var(--first-color-alt);
}
.nav__toggle {
  font-size: 1.1rem;
  cursor: pointer;
}
.nav__toggle:hover {
  color: var(--first-color-alt);
}
.nav__list {
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.nav__close {
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
}
.nav__close:hover {
  color: var(--first-color-alt);
}

ul {
  list-style: none;
}

@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: var(--first-color);
    padding: 2rem auto;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
}
@media screen and (min-width: 768px) {
  .nav {
    height: calc(var(--header-height)+1.5rem);
    column-gap: 1rem;
  }
  .nav__list {
    display: flex;
    column-gap: 2rem;
  }
  .nav__menu {
    margin-left: auto;
  }
  .nav__close,
  .nav__toggle {
    display: none;
  }
}

.show-menu {
  bottom: 0;
}
</style>
