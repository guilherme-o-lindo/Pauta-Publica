<script setup lang="ts">
import { Card } from "../../../components/ui/card";
import PoliticalPartyBadge from "./PoliticalPartyBadge.vue";
import type { Parliamentarian } from "../types";
defineProps<{ person: Parliamentarian }>();
</script>
<template>
  <Card
    ><div class="flex items-start gap-4">
      <img
        v-if="person.photoUrl"
        :src="person.photoUrl"
        alt=""
        loading="lazy"
        class="size-16 shrink-0 rounded-ui-md object-cover"
      />
      <div class="grid gap-2">
        <h3 class="font-heading text-h4 font-bold">
          <a v-if="person.href" :href="person.href" class="underline">{{ person.name }}</a><template
            v-else
            >{{ person.name }}</template
          >
        </h3>
        <p>{{ person.office }} · {{ person.state }}</p>
        <PoliticalPartyBadge :party="person.party" />
      </div>
    </div>
    <p v-if="person.source" class="text-caption text-muted-foreground">
      Fonte: {{ person.source }}
    </p>
    <slot
  /></Card>
</template>
