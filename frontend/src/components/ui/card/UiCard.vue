<template>
  <div class="card"><slot /></div>
</template>

<style scoped>
.card {
  display: grid;
  gap: var(--card-gap);
  background: var(--card);
  color: var(--card-foreground);
  padding: var(--card-padding);
  border: var(--border-thin) solid var(--border);
  border-radius: var(--card-radius);
  min-width: 0;
}
</style>
