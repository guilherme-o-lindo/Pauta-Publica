<script setup lang="ts">
withDefaults(defineProps<{ as?: 'h2' | 'h3' | 'h4' | 'p' }>(), { as: 'h3' })
</script>
<template>
  <component :is="as" class="title"><slot /></component>
</template>
<style scoped>
.title { font: 700 1.375rem/1.2 var(--font-display); }
</style>
