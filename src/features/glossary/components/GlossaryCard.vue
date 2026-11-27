<script setup lang="ts">
import { Card } from "../../../components/ui/card";
import GlossaryTerm from "./GlossaryTerm.vue";
import type { GlossaryEntry } from "../types";
defineProps<{ entry: GlossaryEntry }>();
</script>
<template>
  <Card
    ><dl><GlossaryTerm :entry="entry" /></dl
  ></Card>
</template>
