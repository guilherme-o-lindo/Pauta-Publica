<script setup lang="ts">
import { Button } from "../ui/button";
withDefaults(defineProps<{ title?: string; description: string; retry?: boolean }>(), {
  title: "Não foi possível carregar",
  retry: false,
});
const emit = defineEmits<{ retry: [] }>();
</script>
<template>
  <div
    role="alert"
    class="grid justify-items-start gap-3 rounded-ui-md bg-error-bg p-4 text-error-fg"
  >
    <p class="font-bold">{{ title }}</p>
    <p>{{ description }}</p>
    <Button v-if="retry" type="button" variant="outline" @click="emit('retry')"
      >Tentar novamente</Button
    >
  </div>
</template>
