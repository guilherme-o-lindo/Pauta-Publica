<script setup lang="ts">
import GeometricMosaic from "./GeometricMosaic.vue";
import type { Region } from "./regions";
const sequence: Region[] = [
  "north",
  "northeast",
  "center-west",
  "southeast",
  "south",
  "southeast",
  "south",
  "north",
  "northeast",
  "center-west",
];
</script>
<template>
  <div aria-hidden="true" class="pointer-events-none overflow-hidden">
    <GeometricMosaic :sequence="sequence" />
  </div>
</template>
