<script setup lang="ts">
import BaseChart from "./BaseChart.vue";
import type { ChartData, ChartMetadata } from "../../../types/visualization";
defineProps<{ title: string; data: ChartData; metadata: ChartMetadata }>();
</script>
<template><BaseChart :title="title" :data="data" :metadata="metadata" kind="bar" /></template>
