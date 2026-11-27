<script setup lang="ts">
import { Card } from "../../../components/ui/card";
import VotingResult from "./VotingResult.vue";
import type { Voting } from "../types";
defineProps<{ voting: Voting }>();
</script>
<template>
  <Card
    ><h3 class="font-heading text-h4 font-bold">
      <a v-if="voting.href" :href="voting.href" class="underline">{{ voting.title }}</a><template
        v-else
        >{{ voting.title }}</template
      >
    </h3>
    <time :datetime="voting.date">{{ voting.date }}</time><VotingResult :result="voting.result" />
    <p class="text-caption text-muted-foreground">Fonte: {{ voting.source }}</p>
    <slot
  /></Card>
</template>
