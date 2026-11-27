<script setup lang="ts">
defineOptions({ name: "PpCard" });

import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col gap-4 rounded-ui-md border border-border p-6 min-w-0',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
