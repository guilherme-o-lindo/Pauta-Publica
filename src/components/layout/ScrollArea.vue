<script setup lang="ts">
withDefaults(defineProps<{ label: string; axis?: "horizontal" | "vertical" | "both" }>(), {
  axis: "horizontal",
});
const axes = { horizontal: "overflow-x-auto", vertical: "overflow-y-auto", both: "overflow-auto" };
</script>
<template>
  <div
    role="region"
    :aria-label="label"
    tabindex="0"
    class="min-w-0 max-w-full"
    :class="axes[axis]"
  >
    <slot />
  </div>
</template>
