<script setup lang="ts">
import Metric from "../../../components/data-visualization/metrics/Metric.vue";
import type { Indicator } from "../types";
defineProps<{ indicator: Indicator }>();
</script>
<template>
  <div class="grid gap-2">
    <Metric :label="indicator.label" :value="indicator.value" :format="indicator.format" />
    <p class="text-caption text-muted-foreground">
      {{ indicator.period }} · Fonte: {{ indicator.source }}
    </p>
  </div>
</template>
