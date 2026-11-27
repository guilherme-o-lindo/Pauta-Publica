<script setup lang="ts">
import { useId } from "vue";
import type { ChartData, ChartMetadata } from "../../../types/visualization";
import ChartDescription from "../accessibility/ChartDescription.vue";
import ChartDataTable from "../accessibility/ChartDataTable.vue";
import DataSource from "../metadata/DataSource.vue";
import LastUpdated from "../metadata/LastUpdated.vue";
import DataDisclaimer from "../metadata/DataDisclaimer.vue";
defineProps<{ title: string; data: ChartData; metadata: ChartMetadata }>();
const id = useId();
</script>
<template>
  <figure
    :aria-labelledby="id"
    class="grid min-w-0 gap-4 rounded-ui-md border border-border bg-card p-4"
  >
    <figcaption :id="id" class="font-heading text-h4 font-bold">{{ title }}</figcaption>
    <ChartDescription :description="metadata.description" /><slot />
    <details class="min-w-0">
      <summary class="cursor-pointer py-3 font-bold">Ver dados em tabela</summary>
      <ChartDataTable :data="data" :caption="title" />
    </details>
    <DataSource :source="metadata.source" :href="metadata.sourceUrl" /><LastUpdated
      v-if="metadata.updatedAt"
      :date="metadata.updatedAt"
    /><DataDisclaimer v-if="metadata.disclaimer" :text="metadata.disclaimer" />
  </figure>
</template>
