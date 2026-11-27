<script setup lang="ts">
import RegionalShape from "./RegionalShape.vue";
import { regionName, type Region } from "./regions";
defineProps<{ region: Region }>();
</script>
<template>
  <span class="inline-flex items-center gap-2"
    ><RegionalShape :region="region" class="!w-6 shrink-0" /><span>{{
      regionName(region)
    }}</span></span
  >
</template>
