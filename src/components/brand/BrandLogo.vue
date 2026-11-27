<script setup lang="ts">
import RegionalShape from "./RegionalShape.vue";
import { regions } from "./regions";
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false });
</script>
<template>
  <div class="inline-flex max-w-full items-center gap-3">
    <span class="grid w-12 shrink-0 grid-cols-3 gap-0.5" aria-hidden="true">
      <RegionalShape v-for="region in regions" :key="region.id" :region="region.id" />
    </span>
    <span class="font-heading font-bold leading-tight" :class="compact ? 'text-h4' : 'text-h3'"
      >Pauta Pública</span
    >
  </div>
</template>
