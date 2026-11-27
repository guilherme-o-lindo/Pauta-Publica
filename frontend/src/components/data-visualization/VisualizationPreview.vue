<script setup lang="ts">
import {
  BarChart,
  LineChart,
  AreaChart,
  DonutChart,
  StackedBarChart,
  Metric,
  MetricComparison,
  MetricGroup,
  BrazilMap,
} from "./index";
import type { ChartData, ChartMetadata } from "../../types/visualization";
const metadata: ChartMetadata = {
  source: "Dados fictícios",
  description: "Exemplo de visualização; não representa estatísticas oficiais.",
  disclaimer: "Valores exclusivamente ilustrativos.",
};
const data: ChartData = {
  categories: ["Jan", "Fev", "Mar", "Abr"],
  series: [{ name: "Registros", values: [12, 0, null, 28] }],
};
const stacked: ChartData = {
  categories: ["A", "B", "C"],
  series: [
    { name: "Série 1", values: [20, 30, 15] },
    { name: "Série 2", values: [15, 10, 25] },
  ],
};
const donut: ChartData = {
  categories: ["A", "B", "C"],
  series: [{ name: "Distribuição", values: [45, 30, 25] }],
};
</script>
<template>
  <div class="grid gap-6">
    <MetricGroup
      ><Metric label="Valor demonstrativo" :value="28" /><Metric
        label="Sem informação"
        :value="null" /><MetricComparison
        label="Comparação ilustrativa"
        :current="28"
        :previous="12"
    /></MetricGroup>
    <div class="grid min-w-0 gap-4 lg:grid-cols-2">
      <BarChart title="Barras" :data="data" :metadata="metadata" /><LineChart
        title="Linhas"
        :data="data"
        :metadata="metadata"
      /><AreaChart title="Área" :data="data" :metadata="metadata" /><DonutChart
        title="Distribuição"
        :data="donut"
        :metadata="metadata"
      /><StackedBarChart title="Composição" :data="stacked" :metadata="metadata" /><BrazilMap
        title="Mapa brasileiro — alternativa tabular"
        :values="[
          { name: 'Ceará', value: 20 },
          { name: 'Pará', value: null },
        ]"
        :metadata="metadata"
      />
    </div>
  </div>
</template>
