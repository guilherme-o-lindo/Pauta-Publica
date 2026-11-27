<script setup lang="ts">
defineOptions({ name: "DataMetric" });
import { formatValue } from "../../../lib/visualization/format";
defineProps<{ label: string; value: number | null; format?: Intl.NumberFormatOptions }>();
</script>
<template>
  <dl class="grid gap-2 rounded-ui-md border border-border bg-card p-4">
    <dt class="text-caption">{{ label }}</dt>
    <dd class="font-heading text-h2 font-bold tabular-nums">{{ formatValue(value, format) }}</dd>
  </dl>
</template>
