<script setup lang="ts">
import { computed } from "vue";
import BarChart from "../../../components/data-visualization/charts/BarChart.vue";
const props = defineProps<{
  categories: { label: string; amount: number | null }[];
  source: string;
}>();
const data = computed(() => ({
  categories: props.categories.map((x) => x.label),
  series: [{ name: "Valor em reais", values: props.categories.map((x) => x.amount) }],
}));
</script>
<template>
  <BarChart
    title="Despesas por categoria (R$)"
    :data="data"
    :metadata="{
      source,
      description: 'Valores por categoria, em reais. Dados ausentes não são zero.',
    }"
  />
</template>
