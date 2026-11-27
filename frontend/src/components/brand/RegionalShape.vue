<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ region: 'north' | 'northeast' | 'center-west' | 'southeast' | 'south' }>()
const paths = {
  north: 'M0 100 V50 A50 50 0 0 1 50 0 H100 V100Z',
  northeast: 'M0 0 H50 A50 50 0 0 1 100 50 V100 H0Z',
  'center-west': 'M0 100 V50 A50 50 0 0 1 100 50 V100Z',
  southeast: '',
  south: 'M0 0 H100 V50 A50 50 0 0 1 50 100 H0Z',
}
const fill = computed(() => `var(--region-${props.region})`)
</script>
<template>
  <svg viewBox="0 0 100 100" aria-hidden="true" class="shape">
    <circle v-if="region === 'southeast'" cx="50" cy="50" r="50" :fill="fill" />
    <path v-else :d="paths[region]" :fill="fill" />
  </svg>
</template>
<style scoped>
.shape { display: block; width: 100%; height: auto; }
</style>
