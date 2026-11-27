<script setup lang="ts">
withDefaults(defineProps<{ ratio?: "square" | "video" | "portrait" }>(), { ratio: "video" });
const ratios = { square: "aspect-square", video: "aspect-video", portrait: "aspect-3/4" };
</script>
<template>
  <div class="relative w-full overflow-hidden" :class="ratios[ratio]"><slot /></div>
</template>
