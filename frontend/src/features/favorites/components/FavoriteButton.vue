<script setup lang="ts">
import { Button } from "../../../components/ui/button";
const model = defineModel<boolean>({ required: true });
defineProps<{ label: string }>();
</script>
<template>
  <Button
    type="button"
    variant="outline"
    :aria-pressed="model"
    :aria-label="'Favorito: ' + label"
    @click="model = !model"
    >{{ model ? "Remover dos favoritos" : "Favoritar" }}</Button
  >
</template>
