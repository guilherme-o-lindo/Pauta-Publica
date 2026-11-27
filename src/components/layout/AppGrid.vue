<script setup lang="ts">
import { gaps, type LayoutGap } from "./layout-variants";
withDefaults(defineProps<{ mode?: "columns" | "cards"; gap?: LayoutGap }>(), {
  mode: "columns",
  gap: "md",
});
</script>
<template>
  <div
    class="grid min-w-0"
    :class="[
      gaps[gap],
      mode === 'columns'
        ? 'grid-cols-4 md:grid-cols-8 lg:grid-cols-12'
        : 'grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))]',
    ]"
  >
    <slot />
  </div>
</template>
