<script setup lang="ts">
import { computed } from "vue";
import VChart from "vue-echarts";
import "../../../lib/visualization/engine";
import { chartOptions, donutItems, validNumber } from "../../../lib/visualization/options";
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
    ? donutItems(props.data).some((v) => (v.value ?? 0) > 0)
    : props.data.series.some((s) =>
        props.data.categories.some((_, i) => validNumber(s.values[i]) !== null),
      ),
);
const labels = computed(() =>
  props.kind === "donut"
    ? donutItems(props.data).map((item) => item.name)
    : props.data.series.map((s) => s.name),
);
</script>
<template>
  <ChartContainer :title="title" :data="data" :metadata="metadata"
    ><template v-if="available"
      ><VChart
        :option="option"
        :init-options="{ renderer: 'svg' }"
        autoresize
        class="w-full min-w-0"
        style="height: 288px; min-height: 288px"
        aria-hidden="true" /><ChartLegend :labels="labels"
    /></template>
    <p v-else role="status">Dados insuficientes para a visualização.</p></ChartContainer
  >
</template>
