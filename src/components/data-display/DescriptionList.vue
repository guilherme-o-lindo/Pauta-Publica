<script setup lang="ts">
defineProps<{ items: { label: string; value: string }[] }>();
</script>
<template>
  <dl class="grid gap-3 sm:grid-cols-2">
    <div v-for="(item, i) in items" :key="i" class="grid gap-1">
      <dt class="text-caption text-muted-foreground">{{ item.label }}</dt>
      <dd class="font-bold wrap-anywhere">{{ item.value }}</dd>
    </div>
  </dl>
</template>
