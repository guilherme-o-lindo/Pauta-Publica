<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "../ui/button";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "../ui/table";
type Cell = string | number | null;
const props = withDefaults(
  defineProps<{
    columns: { key: string; label: string; sortable?: boolean }[];
    rows: { id: string; cells: Record<string, Cell> }[];
    caption: string;
    pageSize?: number;
  }>(),
  { pageSize: 10 },
);
const sort = ref("");
const ascending = ref(true);
const page = ref(1);
const size = computed(() => Math.max(1, Math.floor(props.pageSize) || 10));
const sorted = computed(() => {
  const rows = [...props.rows];
  if (!sort.value) return rows;
  return rows.sort((a, b) => {
    const x = a.cells[sort.value],
      y = b.cells[sort.value];
    const result =
      typeof x === "number" && typeof y === "number"
        ? x - y
        : String(x ?? "").localeCompare(String(y ?? ""), "pt-BR", { numeric: true });
    return ascending.value ? result : -result;
  });
});
const pages = computed(() => Math.max(1, Math.ceil(sorted.value.length / size.value)));
const current = computed(() => Math.min(page.value, pages.value));
const visible = computed(() =>
  sorted.value.slice((current.value - 1) * size.value, current.value * size.value),
);
function order(key: string) {
  if (sort.value === key) ascending.value = !ascending.value;
  else {
    sort.value = key;
    ascending.value = true;
  }
  page.value = 1;
}
</script>
<template>
  <div class="grid gap-3">
    <Table
      ><caption class="p-2 text-start font-bold">
        {{
          caption
        }}
      </caption>
      <TableHeader
        ><TableRow
          ><TableHead
            v-for="column in columns"
            :key="column.key"
            scope="col"
            :aria-sort="sort === column.key ? (ascending ? 'ascending' : 'descending') : undefined"
            ><Button
              v-if="column.sortable"
              type="button"
              variant="ghost"
              size="sm"
              @click="order(column.key)"
              >{{ column.label
              }}<span aria-hidden="true">{{
                sort === column.key ? (ascending ? "↑" : "↓") : "↕"
              }}</span></Button
            ><template v-else>{{ column.label }}</template></TableHead
          ></TableRow
        ></TableHeader
      ><TableBody
        ><TableRow v-for="row in visible" :key="row.id"
          ><TableCell v-for="column in columns" :key="column.key">{{
            row.cells[column.key] ?? "—"
          }}</TableCell></TableRow
        ><TableRow v-if="!visible.length"
          ><TableCell :colspan="Math.max(1, columns.length)">Nenhum resultado.</TableCell></TableRow
        ></TableBody
      ></Table
    >
    <div class="flex flex-wrap items-center justify-between gap-2">
      <p aria-live="polite" class="text-caption">
        Página {{ current }} de {{ pages }} · {{ rows.length }} registros
      </p>
      <div class="flex gap-2">
        <Button type="button" variant="outline" :disabled="current <= 1" @click="page = current - 1"
          >Anterior</Button
        ><Button
          type="button"
          variant="outline"
          :disabled="current >= pages"
          @click="page = current + 1"
          >Próxima</Button
        >
      </div>
    </div>
  </div>
</template>
