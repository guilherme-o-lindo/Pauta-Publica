<script setup lang="ts">
import { Spinner } from "../ui/spinner";
withDefaults(defineProps<{ label?: string }>(), { label: "Carregando dados" });
</script>
<template>
  <div role="status" class="flex items-center gap-3 py-4">
    <Spinner aria-hidden="true" class="size-5" /><span>{{ label }}</span>
  </div>
</template>
