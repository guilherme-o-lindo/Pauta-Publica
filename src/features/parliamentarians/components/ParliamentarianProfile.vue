<script setup lang="ts">
import ParliamentarianCard from "./ParliamentarianCard.vue";
import DescriptionList from "../../../components/data-display/DescriptionList.vue";
import type { Parliamentarian } from "../types";
defineProps<{ person: Parliamentarian; details: { label: string; value: string }[] }>();
</script>
<template>
  <section class="grid gap-4">
    <ParliamentarianCard :person="person" /><DescriptionList :items="details" /><slot />
  </section>
</template>
