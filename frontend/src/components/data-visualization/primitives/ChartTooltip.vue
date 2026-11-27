<script setup lang="ts">
import { formatValue } from "../../../lib/visualization/format";
defineProps<{ label: string; value: number | null }>();
</script>
<template>
  <div class="rounded-ui-sm border border-border bg-card p-2 text-caption">
    <span>{{ label }}: </span><strong>{{ formatValue(value) }}</strong>
  </div>
</template>
