
<script setup lang="ts">
// magnifying-glass
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
const navigaion = [
  {
    path: '/products',
    key: 'shop'
  },
  {
    path: '/deliveryAndPayment',
    key: 'deliveryAndPayment'
  },
  {
    path: '/about',
    key: 'about'
  },
  {
    path: '/contacts',
    key: 'contacts'
  }
]
</script>

<template>
  <header class="app-header">
    <div class="app-header__content grid-container">
      <!-- <div>
        Logo
      </div> -->
      <nav class="app-header__content-nav--desctop">
        <NuxtLink
          v-for="link in navigaion"
          :to="link.path"
          :key="link.key"
          class="app-header__content-nav-item"
        >
          {{ $t(`routes.${link.key}`) }}
        </NuxtLink>
      </nav>

      <!-- <NuxtIcon name="test" style="background-color: red; fill: aqua;" /> -->
      <MagnifyingGlassIcon style="width: 24px; height: 24px; color: blue;" />
    </div>
  </header>
</template>

<style>
.app-header__content {
  display: flex;
  align-items: center;
  border-bottom: var(--border);
}

.app-header__content-nav--desctop {
  font-size: 1rem;
  color: var(--c-accent);
}

.app-header__content-nav-item {
  margin: 0 1rem;
}
</style>
