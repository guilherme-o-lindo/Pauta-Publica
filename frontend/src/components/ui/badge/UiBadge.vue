<script setup lang="ts">
withDefaults(defineProps<{ tone?: "neutral" | "info" | "success" | "warning" | "error" }>(), {
  tone: "neutral",
});
</script>
<template>
  <span class="badge" :data-tone="tone"><slot /></span>
</template>
<style scoped>
.badge {
  display: inline-block;
  width: fit-content;
  padding: var(--space-1) var(--space-2);
  background: var(--muted);
  color: var(--foreground);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 700;
}
.badge[data-tone="info"] {
  background: var(--info-bg);
  color: var(--info-fg);
}
.badge[data-tone="success"] {
  background: var(--success-bg);
  color: var(--success-fg);
}
.badge[data-tone="warning"] {
  background: var(--warning-bg);
  color: var(--warning-fg);
}
.badge[data-tone="error"] {
  background: var(--error-bg);
  color: var(--error-fg);
}
</style>
