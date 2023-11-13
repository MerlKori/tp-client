

<template>
  <div>test products 12</div>
  <ul>
    <li
      v-for="d in data"
      :key="d.id"
    >
      {{ d.label }}
    </li>
  </ul>
  <button @click="test">back</button>
</template>

<script setup lang="ts">
const router = useRouter()
const { data } = await useFetch('api/products', { query: { page: 1 } })

function test () {
  router.push('/')
}
</script>
