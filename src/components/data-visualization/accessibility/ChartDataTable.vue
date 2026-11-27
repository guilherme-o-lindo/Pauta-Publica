<script setup lang="ts">
import { computed } from "vue";
import DataTable from "../../data-display/DataTable.vue";
import type { ChartData } from "../../../types/visualization";
import { formatValue } from "../../../lib/visualization/format";
const props = defineProps<{ data: ChartData; caption: string }>();
const columns = computed(() => [
  { key: "category", label: "Categoria" },
  ...props.data.series.map((s, i) => ({ key: "s" + i, label: s.name })),
]);
const rows = computed(() =>
  props.data.categories.map((category, i) => ({
    id: String(i),
    cells: {
      category,
      ...Object.fromEntries(
        props.data.series.map((s, j) => ["s" + j, formatValue(s.values[i] ?? null)]),
      ),
    },
  })),
);
</script>
<template><DataTable :columns="columns" :rows="rows" :caption="caption" /></template>
