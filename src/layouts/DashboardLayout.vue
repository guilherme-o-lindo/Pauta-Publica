<script setup lang="ts">
import PublicLayout from "./PublicLayout.vue";
import { Sidebar, type NavigationItem } from "../components/navigation";
defineProps<{ items: readonly NavigationItem[]; sidebarItems: readonly NavigationItem[] }>();
</script>
<template>
  <PublicLayout :items="items"
    ><div class="grid gap-6 py-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <aside><Sidebar :items="sidebarItems" /></aside>
      <div class="min-w-0"><slot /></div>
    </div>
    <template #footer><slot name="footer" /></template
  ></PublicLayout>
</template>
