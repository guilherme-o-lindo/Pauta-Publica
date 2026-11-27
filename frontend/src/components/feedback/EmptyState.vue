<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>
<template>
  <div class="empty">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <slot />
  </div>
</template>
<style scoped>
.empty {
  text-align: center;
  display: grid;
  justify-items: center;
  gap: var(--space-3);
  padding: var(--space-8);
  border: 1px dashed var(--border);
  border-radius: var(--radius-md);
}
</style>
