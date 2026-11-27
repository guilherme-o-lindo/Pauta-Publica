<script setup lang="ts">
import PublicLayout from "./PublicLayout.vue";
import type { NavigationItem } from "../components/navigation";
defineProps<{ items: readonly NavigationItem[] }>();
</script>
<template>
  <PublicLayout :items="items"
    ><div class="grid gap-6 py-8">
      <slot name="breadcrumb" /><slot name="header" />
      <div
        class="grid gap-6"
        :class="$slots.aside ? 'lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]' : ''"
      >
        <div class="min-w-0"><slot /></div>
        <aside v-if="$slots.aside" class="min-w-0"><slot name="aside" /></aside>
      </div>
    </div>
    <template #footer><slot name="footer" /></template
  ></PublicLayout>
</template>
