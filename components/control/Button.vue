<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
// interface Props {
//   color: ''
// }
// const props = defineProps<Props>()
function test () {
  count.value++
}
</script>

<template>
  <button @click="test">
    <slot />
    {{ count }}
  </button>
</template>
