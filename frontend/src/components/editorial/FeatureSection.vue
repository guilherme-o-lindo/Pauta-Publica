<script setup lang="ts">
import { Heading, AppText } from "../typography";
withDefaults(defineProps<{ title: string; description: string; reverse?: boolean }>(), {
  reverse: false,
});
</script>
<template>
  <section class="grid items-center gap-6 py-8 md:grid-cols-2">
    <div class="grid min-w-0 gap-4" :class="reverse ? 'md:order-2' : ''">
      <Heading :level="2">{{ title }}</Heading><AppText variant="lead">{{ description }}</AppText>
      <div v-if="$slots.actions" class="flex flex-wrap gap-3"><slot name="actions" /></div>
    </div>
    <div class="min-w-0"><slot /></div>
  </section>
</template>
