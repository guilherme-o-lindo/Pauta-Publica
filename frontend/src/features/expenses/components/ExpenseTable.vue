<script setup lang="ts">
import { computed } from "vue";
import DataTable from "../../../components/data-display/DataTable.vue";
import { formatValue } from "../../../lib/visualization/format";
import type { Expense } from "../types";
const props = defineProps<{ expenses: Expense[] }>();
const rows = computed(() =>
  props.expenses.map((e) => ({
    id: e.id,
    cells: {
      category: e.category,
      date: e.date,
      amount: formatValue(e.amount, { style: "currency", currency: "BRL" }),
      source: e.source,
    },
  })),
);
</script>
<template>
  <DataTable
    caption="Despesas registradas"
    :rows="rows"
    :columns="[
      { key: 'category', label: 'Categoria', sortable: true },
      { key: 'date', label: 'Data', sortable: true },
      { key: 'amount', label: 'Valor' },
      { key: 'source', label: 'Fonte' },
    ]"
  />
</template>
