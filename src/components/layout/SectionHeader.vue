<script setup lang="ts">
import Heading from "../typography/Heading.vue";
import AppText from "../typography/AppText.vue";
withDefaults(
  defineProps<{ title: string; description?: string; level?: 2 | 3 | 4; headingId?: string }>(),
  { level: 2, description: "", headingId: undefined },
);
</script>
<template>
  <div class="flex flex-wrap items-end justify-between gap-4">
    <div class="grid max-w-reading gap-2">
      <Heading :id="headingId" :level="level">{{ title }}</Heading>
      <AppText v-if="description" tone="muted">{{ description }}</AppText>
    </div>
    <div v-if="$slots.actions" class="flex flex-wrap items-center gap-3">
      <slot name="actions" />
    </div>
  </div>
</template>
