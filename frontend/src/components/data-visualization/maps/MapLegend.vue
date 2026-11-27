<script setup lang="ts">
import { formatValue } from "../../../lib/visualization/format";
defineProps<{ min: number; max: number; label: string }>();
</script>
<template>
  <div class="grid gap-2 text-caption">
    <p>{{ label }}</p>
    <div
      aria-hidden="true"
      class="h-3 rounded-sm"
      style="background: linear-gradient(to right, #e4edf5, #35678c)"
    />
    <div class="flex justify-between">
      <span>{{ formatValue(min) }}</span><span>{{ formatValue(max) }}</span>
    </div>
    <span>Sem informação: área neutra</span>
  </div>
</template>
