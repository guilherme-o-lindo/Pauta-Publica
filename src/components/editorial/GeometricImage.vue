<script setup lang="ts">
import ImageWithCaption from "./ImageWithCaption.vue";
import ColorStrip from "../brand/ColorStrip.vue";
defineProps<{ src: string; alt: string; caption: string; credit?: string }>();
</script>
<template>
  <div class="grid gap-2">
    <ImageWithCaption :src="src" :alt="alt" :caption="caption" :credit="credit" /><ColorStrip />
  </div>
</template>
