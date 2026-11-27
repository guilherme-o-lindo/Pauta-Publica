<script setup lang="ts">
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon, XIcon } from "@lucide/vue";
const model = defineModel<string>({ required: true });
withDefaults(defineProps<{ label?: string; placeholder?: string; disabled?: boolean }>(), {
  label: "Buscar",
  placeholder: "Digite um termo",
  disabled: false,
});
</script>
<template>
  <div class="relative flex items-center gap-2">
    <SearchIcon
      aria-hidden="true"
      class="pointer-events-none absolute start-3 size-5 text-muted-foreground"
    />
    <Input
      type="search"
      :model-value="model"
      :aria-label="label"
      :placeholder="placeholder"
      :disabled="disabled"
      class="ps-10"
      @update:model-value="model = String($event)"
    />
    <Button
      v-if="model"
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Limpar pesquisa"
      :disabled="disabled"
      @click="model = ''"
      ><XIcon aria-hidden="true"
    /></Button>
  </div>
</template>
