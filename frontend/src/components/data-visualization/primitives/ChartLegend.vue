<script setup lang="ts">
import { chartColors } from "../../../lib/visualization/options";
defineProps<{ labels: string[] }>();
</script>
<template>
  <ul aria-label="Legenda" class="flex flex-wrap gap-3">
    <li v-for="(label, i) in labels" :key="i" class="flex items-center gap-2 text-caption">
      <span
        aria-hidden="true"
        class="size-3 rounded-sm"
        :style="{ backgroundColor: chartColors[i % chartColors.length] }"
      />{{ label }}
    </li>
  </ul>
</template>
