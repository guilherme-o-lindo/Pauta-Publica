<script setup lang="ts">
import { ref } from "vue";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import type { NavigationItem } from "./navigation";
defineProps<{ items: readonly NavigationItem[] }>();
const open = ref(false);
</script>
<template>
  <div class="lg:hidden">
    <Sheet v-model:open="open"
      ><SheetTrigger as-child
        ><Button type="button" variant="outline" aria-label="Abrir menu de navegação"
          >Menu</Button
        ></SheetTrigger
      ><SheetContent side="right" class="overflow-y-auto"
        ><SheetTitle class="px-4 pt-4">Navegação</SheetTitle
        ><SheetDescription class="px-4">Escolha uma seção.</SheetDescription>
        <nav aria-label="Navegação móvel" class="p-4">
          <ul class="grid gap-2">
            <li v-for="item in items" :key="item.href">
              <a
                :href="item.href"
                :aria-current="item.current ? 'page' : undefined"
                class="flex min-h-11 items-center rounded-ui-sm px-3 font-bold hover:bg-muted"
                :class="item.current ? 'bg-muted underline' : ''"
                @click="open = false"
                >{{ item.label }}</a
              >
            </li>
          </ul>
        </nav></SheetContent
      ></Sheet
    >
  </div>
</template>
