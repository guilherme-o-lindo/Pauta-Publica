<script setup lang="ts">
import { computed } from "vue";
import VChart from "vue-echarts";
import "../../../lib/visualization/engine";
import { chartOptions } from "../../../lib/visualization/options";
import type { ChartData, ChartKind, ChartMetadata } from "../../../types/visualization";
import ChartContainer from "../primitives/ChartContainer.vue";
import ChartLegend from "../primitives/ChartLegend.vue";
const props = defineProps<{
  title: string;
  data: ChartData;
  metadata: ChartMetadata;
  kind: ChartKind;
}>();
const option = computed(() => chartOptions(props.data, props.kind));
const available = computed(() =>
  props.kind === "donut"
    ? props.data.series[0]?.values.some((v) => v !== null && Number.isFinite(v) && v > 0)
    : props.data.series.some((s) => s.values.some((v) => v !== null && Number.isFinite(v))),
);
</script>
<template>
  <ChartContainer :title="title" :data="data" :metadata="metadata"
    ><template v-if="available"
      ><VChart
        :option="option"
        :init-options="{ renderer: 'svg' }"
        autoresize
        class="h-72 w-full"
        aria-hidden="true" /><ChartLegend
        :labels="kind === 'donut' ? data.categories : data.series.map((s) => s.name)"
    /></template>
    <p v-else role="status">Dados insuficientes para a visualização.</p></ChartContainer
  >
</template>
