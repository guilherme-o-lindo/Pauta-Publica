<script setup lang="ts">
import { Button } from "../ui/button";
import { XIcon } from "@lucide/vue";
defineProps<{ filters: { id: string; label: string }[] }>();
const emit = defineEmits<{ remove: [id: string]; clear: [] }>();
</script>
<template>
  <div
    v-if="filters.length"
    class="flex flex-wrap items-center gap-2"
    role="group"
    aria-label="Filtros aplicados"
  >
    <Button
      v-for="filter in filters"
      :key="filter.id"
      type="button"
      variant="outline"
      size="sm"
      :aria-label="'Remover filtro: ' + filter.label"
      @click="emit('remove', filter.id)"
      >{{ filter.label }}<XIcon aria-hidden="true" /></Button
    ><Button type="button" variant="ghost" @click="emit('clear')">Limpar todos</Button>
  </div>
</template>
