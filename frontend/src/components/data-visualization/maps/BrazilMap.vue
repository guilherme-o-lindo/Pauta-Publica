<script setup lang="ts">
import { computed, useId, watchEffect } from "vue";
import VChart from "vue-echarts";
import { registerMap } from "echarts/core";
import "../../../lib/visualization/engine";
import ChartContainer from "../primitives/ChartContainer.vue";
import type { ChartMetadata } from "../../../types/visualization";
type Geometry = Parameters<typeof registerMap>[1];
const props = defineProps<{
  title: string;
  geometry?: Geometry;
  geometrySource?: string;
  values: { name: string; value: number | null }[];
  metadata: ChartMetadata;
}>();
const mapId = "pp-map-" + useId();
watchEffect(() => {
  if (props.geometry) registerMap(mapId, props.geometry);
});
const data = computed(() => ({
  categories: props.values.map((v) => v.name),
  series: [{ name: "Valor", values: props.values.map((v) => v.value) }],
}));
const option = computed(() => ({
  animation: false,
  tooltip: { trigger: "item", renderMode: "richText" },
  series: [
    {
      type: "map",
      map: mapId,
      roam: false,
      label: { show: false },
      itemStyle: { areaColor: "#eae5db", borderColor: "#626c78" },
      data: props.values.map((v) => ({ name: v.name, value: v.value ?? NaN })),
    },
  ],
  visualMap: {
    min: Math.min(0, ...props.values.map((v) => v.value ?? 0)),
    max: Math.max(1, ...props.values.map((v) => v.value ?? 0)),
    inRange: { color: ["#e4edf5", "#35678c"] },
    calculable: false,
  },
}));
</script>
<template>
  <ChartContainer :title="title" :data="data" :metadata="metadata"
    ><template v-if="geometry && geometrySource"
      ><VChart
        :option="option"
        :init-options="{ renderer: 'svg' }"
        autoresize
        class="h-80 w-full"
        aria-hidden="true"
      />
      <p class="text-caption">Geometria: {{ geometrySource }}</p></template
    >
    <p v-else role="status">
      Geometria territorial verificada não disponível. Consulte os dados em tabela.
    </p></ChartContainer
  >
</template>
