<template>
  <div class="root">Nuxt module playground!{{ a }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const a = ref(1)
</script>

<style scoped>
.root {
  font-size: 20px;
}
</style>
