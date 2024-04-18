<script setup>
const props = defineProps(['itemName', 'href', 'icon'])
</script>

<template>
  <li class="nav__item">
    <a :href="props.href" class="nav__link">
      <i class="nav__icon" :class="[icon ? icon : '']"></i> {{ props.itemName }}
    </a>
  </li>
</template>

<style scoped>
.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: #fff;
  font-weight: var(--font-medium);
}
.nav__link:hover {
  color: var(--first-color-alt);
}
.nav__icon {
  font-size: 1.2rem;
}

a {
  text-decoration: none;
}
</style>
