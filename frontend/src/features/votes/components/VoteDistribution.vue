<script setup lang="ts">
import { computed } from "vue";
import DonutChart from "../../../components/data-visualization/charts/DonutChart.vue";
import type { VoteCount } from "../types";
const props = defineProps<{ counts: VoteCount[]; source: string }>();
const data = computed(() => ({
  categories: props.counts.map((x) => x.label),
  series: [{ name: "Votos", values: props.counts.map((x) => x.value) }],
}));
</script>
<template>
  <DonutChart
    title="Distribuição dos votos"
    :data="data"
    :metadata="{
      source,
      description:
        'Quantidade registrada por categoria de voto. Valores ausentes não equivalem a zero.',
    }"
  />
</template>
