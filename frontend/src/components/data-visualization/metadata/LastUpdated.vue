<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ date: string }>();
const label = computed(() => {
  const d = new Date(props.date);
  return Number.isNaN(d.getTime())
    ? "Não informada"
    : new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeZone: "UTC" }).format(d);
});
</script>
<template>
  <p class="text-caption text-muted-foreground">
    Atualização: <time :datetime="date">{{ label }}</time>
  </p>
</template>
