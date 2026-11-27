<script setup lang="ts">
import { computed, ref } from "vue";
import SearchInput from "../forms/SearchInput.vue";
import DateRangePicker from "../forms/DateRangePicker.vue";
import FilterBar from "../filters/FilterBar.vue";
import FilterPanel from "../filters/FilterPanel.vue";
import ActiveFilters from "../filters/ActiveFilters.vue";
import SortControl from "../filters/SortControl.vue";
import DataTable from "./DataTable.vue";
import DescriptionList from "./DescriptionList.vue";
import Timeline from "./Timeline.vue";
import ErrorState from "../feedback/ErrorState.vue";
import LoadingState from "../feedback/LoadingState.vue";
import CopyButton from "../actions/CopyButton.vue";
import ShareButton from "../actions/ShareButton.vue";
const query = ref("");
const period = ref({ start: "", end: "" });
const sort = ref("name");
const open = ref(false);
const filters = computed(() => (query.value ? [{ id: "query", label: query.value }] : []));
const rows = computed(() =>
  [
    { id: "a", cells: { name: "Exemplo A", value: 42 } },
    { id: "b", cells: { name: "Exemplo B", value: 18 } },
  ]
    .filter((row) => row.cells.name.toLowerCase().includes(query.value.toLowerCase()))
    .sort((a, b) =>
      sort.value === "value"
        ? a.cells.value - b.cells.value
        : a.cells.name.localeCompare(b.cells.name),
    ),
);
</script>
<template>
  <div class="grid gap-6">
    <p class="text-caption text-muted-foreground">
      Dados exclusivamente ilustrativos. O período demonstra a seleção, sem consulta a uma API.
    </p>
    <FilterBar
      ><SearchInput v-model="query" /><SortControl
        v-model="sort"
        :options="[
          { value: 'name', label: 'Nome' },
          { value: 'value', label: 'Valor' },
        ]"
    /></FilterBar>
    <FilterPanel v-model:open="open"><DateRangePicker v-model="period" /></FilterPanel>
    <ActiveFilters :filters="filters" @remove="query = ''" @clear="query = ''" />
    <DataTable
      caption="Registros demonstrativos"
      :columns="[
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'value', label: 'Valor', sortable: true },
      ]"
      :rows="rows"
      :page-size="1"
    />
    <DescriptionList
      :items="[
        { label: 'Fonte', value: 'Demonstração' },
        { label: 'Situação', value: 'Sem dados oficiais' },
      ]"
    />
    <Timeline
      :events="[
        { id: '1', date: '2026-01-01', label: 'Evento fictício' },
        { id: '2', date: '2026-01-02', label: 'Atualização fictícia' },
      ]"
    />
    <LoadingState /><ErrorState description="Exemplo de falha." />
    <CopyButton text="Pauta Pública" /><ShareButton
      title="Pauta Pública"
      url="https://example.org"
    />
  </div>
</template>
