<script setup lang="ts">
defineProps<{ cite?: string; attribution?: string }>();
</script>
<template>
  <figure class="grid gap-3 border-s-4 border-primary ps-4">
    <blockquote :cite="cite" class="text-lead leading-relaxed"><slot /></blockquote>
    <figcaption v-if="attribution" class="text-caption text-muted-foreground">
      {{ attribution }}
    </figcaption>
  </figure>
</template>
