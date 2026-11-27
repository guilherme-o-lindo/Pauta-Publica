<script setup lang="ts">
import { regions } from "./regions";
</script>
<template>
  <div aria-hidden="true" class="flex h-2 w-full overflow-hidden rounded-full">
    <span
      v-for="region in regions"
      :key="region.id"
      class="flex-1"
      :style="{ backgroundColor: 'var(--region-' + region.id + ')' }"
    />
  </div>
</template>
