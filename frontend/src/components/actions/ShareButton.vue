<script setup lang="ts">
import { ref } from "vue";
import { Button } from "../ui/button";
const props = defineProps<{ url: string; title: string }>();
const status = ref("");
async function share() {
  try {
    if (globalThis.navigator.share) {
      await globalThis.navigator.share({ title: props.title, url: props.url });
      status.value = "Compartilhado";
    } else {
      await globalThis.navigator.clipboard.writeText(props.url);
      status.value = "Link copiado";
    }
  } catch (e) {
    if (e instanceof Error && e.name === "AbortError") return;
    status.value = "Não foi possível compartilhar.";
  }
}
</script>
<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button type="button" variant="outline" @click="share">Compartilhar</Button
    ><span role="status" class="text-caption">{{ status }}</span>
  </div>
</template>
