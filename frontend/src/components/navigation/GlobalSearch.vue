<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import SearchInput from "../forms/SearchInput.vue";
import { searchNavigation, type NavigationItem } from "./navigation";
const props = defineProps<{ items: readonly NavigationItem[] }>();
const open = ref(false);
const query = ref("");
const results = computed(() => searchNavigation(props.items, query.value));
watch(open, (value) => {
  if (!value) query.value = "";
});
</script>
<template>
  <Dialog v-model:open="open"
    ><DialogTrigger as-child><Button type="button" variant="outline">Buscar</Button></DialogTrigger
    ><DialogContent
      ><DialogTitle>Buscar seções</DialogTitle
      ><DialogDescription>Pesquise entre as seções disponíveis nesta página.</DialogDescription
      ><SearchInput v-model="query" label="Buscar seções" />
      <p role="status" class="text-caption text-muted-foreground">
        {{ results.length }} resultado(s)
      </p>
      <ul class="grid max-h-60 gap-1 overflow-y-auto">
        <li v-for="item in results" :key="item.href">
          <a
            :href="item.href"
            class="flex min-h-11 items-center rounded-ui-sm px-3 hover:bg-muted"
            @click="open = false"
            >{{ item.label }}</a
          >
        </li>
      </ul>
      <p v-if="!results.length">Nenhuma seção encontrada.</p></DialogContent
    ></Dialog
  >
</template>
