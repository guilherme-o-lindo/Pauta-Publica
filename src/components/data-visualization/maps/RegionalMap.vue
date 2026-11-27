<script setup lang="ts">
import BrazilMap from "./BrazilMap.vue";
import type { ChartMetadata } from "../../../types/visualization";
import type { Region } from "../../brand/regions";
import { regionName } from "../../brand/regions";
import type { registerMap } from "echarts/core";
defineProps<{
  region: Region;
  geometry?: Parameters<typeof registerMap>[1];
  geometrySource?: string;
  values: { name: string; value: number | null }[];
  metadata: ChartMetadata;
}>();
</script>
<template>
  <BrazilMap
    :title="'Região ' + regionName(region)"
    :geometry="geometry"
    :geometry-source="geometrySource"
    :values="values"
    :metadata="metadata"
  />
</template>
