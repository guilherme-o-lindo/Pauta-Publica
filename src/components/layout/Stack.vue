<script setup lang="ts">
defineOptions({ name: "LayoutStack" });
import { gaps, type LayoutGap } from "./layout-variants";
withDefaults(defineProps<{ gap?: LayoutGap; as?: "div" | "ul" | "ol" }>(), {
  gap: "md",
  as: "div",
});
</script>
<template>
  <component :is="as" class="flex min-w-0 flex-col" :class="gaps[gap]"><slot /></component>
</template>
