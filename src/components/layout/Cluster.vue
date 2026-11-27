<script setup lang="ts">
defineOptions({ name: "LayoutCluster" });
import { gaps, type LayoutGap } from "./layout-variants";
withDefaults(defineProps<{ gap?: LayoutGap; justify?: "start" | "center" | "between" | "end" }>(), {
  gap: "md",
  justify: "start",
});
const positions = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
  end: "justify-end",
};
</script>
<template>
  <div class="flex min-w-0 flex-wrap items-center" :class="[gaps[gap], positions[justify]]">
    <slot />
  </div>
</template>
