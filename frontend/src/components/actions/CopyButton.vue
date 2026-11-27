<script setup lang="ts">
import { ref } from "vue";
import { Button } from "../ui/button";
const props = defineProps<{ text: string }>();
const status = ref("");
async function copy() {
  try {
    await globalThis.navigator.clipboard.writeText(props.text);
    status.value = "Copiado";
  } catch {
    status.value = "Não foi possível copiar.";
  }
}
</script>
<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button type="button" variant="outline" @click="copy">Copiar</Button
    ><span role="status" class="text-caption">{{ status }}</span>
  </div>
</template>
