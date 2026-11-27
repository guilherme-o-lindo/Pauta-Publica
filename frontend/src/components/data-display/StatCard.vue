<script setup lang="ts">
import UiCard from '../ui/card/UiCard.vue'
defineProps<{ label: string; value: string; source?: string }>()
</script>
<template>
  <UiCard>
    <dl class="metric">
      <dt>{{ label }}</dt>
      <dd>{{ value }}</dd>
    </dl>
    <p v-if="source" class="pp-muted">{{ source }}</p>
  </UiCard>
</template>
<style scoped>
.metric { display: grid; gap: var(--space-2); margin: 0; }
dd { margin: 0; font: 700 2rem/1.2 var(--font-display); font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
</style>
