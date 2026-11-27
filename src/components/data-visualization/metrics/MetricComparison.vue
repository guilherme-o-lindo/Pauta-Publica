<script setup lang="ts">
import { computed } from "vue";
import Metric from "./Metric.vue";
import { formatValue } from "../../../lib/visualization/format";
const props = defineProps<{ label: string; current: number | null; previous: number | null }>();
const change = computed(() =>
  props.current === null || props.previous === null ? null : props.current - props.previous,
);
</script>
<template>
  <div class="grid gap-2">
    <Metric :label="label" :value="current" />
    <p class="text-caption">
      Anterior: {{ formatValue(previous) }} · Variação absoluta:
      {{ formatValue(change, { signDisplay: "exceptZero" }) }}
    </p>
  </div>
</template>
