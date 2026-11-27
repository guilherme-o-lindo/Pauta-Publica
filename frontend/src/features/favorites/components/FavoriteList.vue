<script setup lang="ts">
import { Button } from "../../../components/ui/button";
import EmptyState from "../../../components/feedback/EmptyState.vue";
import type { FavoriteItem } from "../types";
defineProps<{ items: FavoriteItem[] }>();
const emit = defineEmits<{ remove: [id: string] }>();
</script>
<template>
  <section class="grid gap-3">
    <h3 class="font-heading text-h4 font-bold">Favoritos</h3>
    <ul v-if="items.length" class="grid gap-2">
      <li
        v-for="item in items"
        :key="item.id"
        class="flex flex-wrap items-center justify-between gap-2 rounded-ui-sm border border-border p-3"
      >
        <a :href="item.href" class="underline">{{ item.label }}</a><Button
          type="button"
          variant="ghost"
          :aria-label="'Remover ' + item.label"
          @click="emit('remove', item.id)"
          >Remover</Button
        >
      </li>
    </ul>
    <EmptyState
      v-else
      title="Nenhum favorito"
      description="Os itens selecionados aparecerão aqui."
    />
  </section>
</template>
