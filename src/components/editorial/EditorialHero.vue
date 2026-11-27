<script setup lang="ts">
import { Heading, AppText } from "../typography";
import BrandPattern from "../brand/BrandPattern.vue";
withDefaults(
  defineProps<{ title: string; description: string; eyebrow?: string; level?: 1 | 2 | 3 }>(),
  { level: 1, eyebrow: "" },
);
</script>
<template>
  <section class="grid items-center gap-8 rounded-ui-lg bg-muted p-6 md:grid-cols-2 md:p-12">
    <div class="grid min-w-0 gap-4">
      <AppText v-if="eyebrow" variant="overline">{{ eyebrow }}</AppText><Heading
        :level="level"
        appearance="display"
        >{{ title }}</Heading
      ><AppText variant="lead">{{ description }}</AppText>
      <div v-if="$slots.actions" class="flex flex-wrap gap-3"><slot name="actions" /></div>
    </div>
    <div class="min-w-0">
      <slot name="visual"><BrandPattern /></slot>
    </div>
  </section>
</template>
