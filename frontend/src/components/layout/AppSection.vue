<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: "section" | "div" | "article";
    spacing?: "compact" | "normal" | "spacious";
  }>(),
  { as: "section", spacing: "normal" },
);
const spaces = { compact: "gap-4 py-4", normal: "gap-6 py-8", spacious: "gap-8 py-12 md:py-16" };
</script>
<template>
  <component :is="as" class="grid min-w-0" :class="spaces[spacing]"><slot /></component>
</template>
