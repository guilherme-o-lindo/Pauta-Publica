<script setup lang="ts">
withDefaults(
  defineProps<{ as?: "div" | "main" | "article"; width?: "content" | "reading" | "full" }>(),
  { as: "div", width: "content" },
);
const widths = { content: "max-w-content", reading: "max-w-reading", full: "max-w-none" };
</script>
<template>
  <component :is="as" class="mx-auto w-full px-[var(--gutter)]" :class="widths[width]"
    ><slot
  /></component>
</template>
