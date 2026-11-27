<script setup lang="ts">
defineProps<{ text: string }>();
</script>
<template>
  <p class="rounded-ui-sm bg-muted p-3 text-caption">{{ text }}</p>
</template>
