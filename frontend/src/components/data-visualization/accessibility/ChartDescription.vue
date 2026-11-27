<script setup lang="ts">
defineProps<{ description: string }>();
</script>
<template>
  <p class="text-body">{{ description }}</p>
</template>
