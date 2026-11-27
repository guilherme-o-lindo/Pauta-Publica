<script setup lang="ts">
import MetricComparison from "../../../components/data-visualization/metrics/MetricComparison.vue";
defineProps<{
  label: string;
  current: number | null;
  previous: number | null;
  period: string;
  source: string;
}>();
</script>
<template>
  <div class="grid gap-2">
    <MetricComparison :label="label" :current="current" :previous="previous" />
    <p class="text-caption text-muted-foreground">{{ period }} · Fonte: {{ source }}</p>
  </div>
</template>
