<script setup lang="ts">
defineProps<{ source: string; href?: string }>();
</script>
<template>
  <p class="text-caption text-muted-foreground">
    Fonte: <a v-if="href" :href="href" class="underline underline-offset-4">{{ source }}</a><span
      v-else
      >{{ source }}</span
    >
  </p>
</template>
