<script setup lang="ts">
defineOptions({ name: "NavigationSidebar" });
import type { NavigationItem } from "./navigation";
withDefaults(defineProps<{ items: readonly NavigationItem[]; label?: string }>(), {
  label: "Navegação da seção",
});
</script>
<template>
  <nav :aria-label="label" class="rounded-ui-md border border-border bg-card p-3">
    <ul class="grid gap-1">
      <li v-for="item in items" :key="item.href">
        <a
          :href="item.href"
          :aria-current="item.current ? 'page' : undefined"
          class="flex min-h-11 items-center rounded-ui-sm px-3 hover:bg-muted"
          :class="item.current ? 'bg-muted font-bold underline' : ''"
          >{{ item.label }}</a
        >
      </li>
    </ul>
  </nav>
</template>
