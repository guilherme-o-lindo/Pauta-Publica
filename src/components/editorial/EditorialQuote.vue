<script setup lang="ts">
import { AppBlockquote } from "../typography";
defineProps<{ attribution?: string; cite?: string }>();
</script>
<template>
  <AppBlockquote :attribution="attribution" :cite="cite" class="rounded-ui-sm bg-muted p-6"
    ><slot
  /></AppBlockquote>
</template>
