<script setup lang="ts">
import { Card, CardHeader, CardTitle } from "../../../components/ui/card";
import BillStatus from "./BillStatus.vue";
import type { Bill } from "../types";
defineProps<Bill>();
</script>
<template>
  <Card
    ><CardHeader
      ><CardTitle
        ><a v-if="href" :href="href" class="underline">{{ code }}</a
        ><template v-else>{{ code }}</template></CardTitle
      ><BillStatus :status="status"
    /></CardHeader>
    <p>{{ summary }}</p>
    <p v-if="source" class="text-caption text-muted-foreground">Fonte: {{ source }}</p>
    <slot
  /></Card>
</template>
