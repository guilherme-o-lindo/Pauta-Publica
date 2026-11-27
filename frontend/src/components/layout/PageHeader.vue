<script setup lang="ts">
import Heading from "../typography/Heading.vue";
import AppText from "../typography/AppText.vue";
import Stack from "./Stack.vue";
defineProps<{ title: string; description?: string; eyebrow?: string }>();
</script>
<template>
  <header class="flex flex-wrap items-end justify-between gap-6 py-8">
    <Stack gap="xs" class="max-w-reading">
      <AppText v-if="eyebrow" variant="overline" tone="muted">{{ eyebrow }}</AppText>
      <Heading :level="1">{{ title }}</Heading>
      <AppText v-if="description" variant="lead">{{ description }}</AppText>
    </Stack>
    <div v-if="$slots.actions" class="flex flex-wrap items-center gap-3">
      <slot name="actions" />
    </div>
  </header>
</template>
