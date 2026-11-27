<script setup lang="ts">
defineProps<{ src: string; alt: string; caption: string; credit?: string }>();
</script>
<template>
  <figure class="grid gap-2">
    <img :src="src" :alt="alt" loading="lazy" class="h-auto max-w-full rounded-ui-md" />
    <figcaption class="text-caption text-muted-foreground">
      {{ caption }}<span v-if="credit"> · {{ credit }}</span>
    </figcaption>
  </figure>
</template>
