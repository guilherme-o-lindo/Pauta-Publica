<script setup lang="ts">
import Badge from "./Badge.vue";
withDefaults(defineProps<{ tone?: "neutral" | "info" | "success" | "warning" | "error" }>(), {
  tone: "neutral",
});
</script>
<template>
  <Badge :variant="tone === 'neutral' ? 'secondary' : tone"><slot /></Badge>
</template>
