<script setup lang="ts">
import type { NavigationItem } from "./navigation";
defineProps<{ items: readonly NavigationItem[] }>();
</script>
<template>
  <nav aria-label="Navegação principal" class="hidden lg:block">
    <ul class="flex flex-wrap items-center gap-1">
      <li v-for="item in items" :key="item.href">
        <a
          :href="item.href"
          :aria-current="item.current ? 'page' : undefined"
          class="inline-flex min-h-11 items-center rounded-ui-sm px-3 font-bold hover:bg-muted"
          :class="item.current ? 'bg-muted underline underline-offset-4' : ''"
          >{{ item.label }}</a
        >
      </li>
    </ul>
  </nav>
</template>
