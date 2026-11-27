<script setup lang="ts">
import PublicLayout from "./PublicLayout.vue";
import type { NavigationItem } from "../components/navigation";
defineProps<{ items: readonly NavigationItem[] }>();
</script>
<template>
  <PublicLayout :items="items"
    ><div class="grid gap-8 py-8">
      <slot name="hero" />
      <article class="mx-auto w-full max-w-reading"><slot /></article>
    </div>
    <template #footer><slot name="footer" /></template
  ></PublicLayout>
</template>
