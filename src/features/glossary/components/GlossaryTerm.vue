<script setup lang="ts">
import type { GlossaryEntry } from "../types";
defineProps<{ entry: GlossaryEntry }>();
</script>
<template>
  <div class="grid gap-2">
    <dt class="font-bold">{{ entry.term }}</dt>
    <dd>{{ entry.definition }}</dd>
    <dd v-if="entry.source" class="text-caption text-muted-foreground">
      Fonte:
      <a v-if="entry.href" :href="entry.href" class="underline">{{ entry.source }}</a><template
        v-else
        >{{ entry.source }}</template
      >
    </dd>
  </div>
</template>
