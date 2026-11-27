<script setup lang="ts">
import RegionalShape from "./RegionalShape.vue";
import { regions, type Region } from "./regions";
withDefaults(defineProps<{ sequence?: readonly Region[] }>(), {
  sequence: () => regions.map((r) => r.id),
});
</script>
<template>
  <div aria-hidden="true" class="grid grid-cols-5 gap-1">
    <RegionalShape v-for="(region, index) in sequence" :key="index" :region="region" />
  </div>
</template>
