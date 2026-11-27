<template>
  <div class="card"><slot /></div>
</template>

<style scoped>
.card {
  display: grid;
  gap: var(--space-4);
  background: var(--card);
  color: var(--card-foreground);
  padding: var(--card-padding);
  border: 1px solid var(--border);
  border-radius: var(--card-radius);
  min-width: 0;
}
</style>
