<script setup lang="ts">
defineOptions({ name: "EventTimeline" });
defineProps<{ events: { id: string; date: string; label: string; description?: string }[] }>();
</script>
<template>
  <ol class="grid gap-4 border-s-2 border-border ps-5">
    <li v-for="event in events" :key="event.id" class="relative grid gap-1">
      <span
        aria-hidden="true"
        class="absolute -start-7 top-1 size-3 rounded-full bg-primary"
      /><time :datetime="event.date" class="text-caption text-muted-foreground">{{
        event.date
      }}</time>
      <p class="font-bold">{{ event.label }}</p>
      <p v-if="event.description">{{ event.description }}</p>
    </li>
  </ol>
</template>
