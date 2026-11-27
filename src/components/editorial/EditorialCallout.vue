<script setup lang="ts">
import { Heading, AppText } from "../typography";
import ColorStrip from "../brand/ColorStrip.vue";
defineProps<{ title: string; description: string }>();
</script>
<template>
  <aside class="grid gap-4 rounded-ui-md border border-border bg-card p-6">
    <ColorStrip /><Heading :level="3">{{ title }}</Heading
    ><AppText>{{ description }}</AppText
    ><slot />
  </aside>
</template>
