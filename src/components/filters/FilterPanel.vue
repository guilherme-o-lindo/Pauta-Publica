<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
const open = defineModel<boolean>("open", { default: false });
</script>
<template>
  <Collapsible v-model:open="open" class="grid gap-3"
    ><CollapsibleTrigger as-child
      ><Button type="button" variant="outline">{{
        open ? "Ocultar filtros avançados" : "Filtros avançados"
      }}</Button></CollapsibleTrigger
    ><CollapsibleContent class="grid gap-4 rounded-ui-md border border-border bg-card p-4"
      ><slot /></CollapsibleContent
  ></Collapsible>
</template>
