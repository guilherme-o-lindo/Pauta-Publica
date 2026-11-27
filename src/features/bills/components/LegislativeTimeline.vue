<script setup lang="ts">
import Timeline from "../../../components/data-display/Timeline.vue";
import type { LegislativeEvent } from "../types";
defineProps<{ events: LegislativeEvent[] }>();
</script>
<template>
  <section class="grid gap-3">
    <h3 class="font-heading text-h4 font-bold">Tramitação</h3>
    <Timeline v-if="events.length" :events="events" />
    <p v-else>Histórico não disponível.</p>
  </section>
</template>
