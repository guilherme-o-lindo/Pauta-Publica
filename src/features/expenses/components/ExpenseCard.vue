<script setup lang="ts">
import { Card } from "../../../components/ui/card";
import { formatValue } from "../../../lib/visualization/format";
import type { Expense } from "../types";
defineProps<{ expense: Expense }>();
</script>
<template>
  <Card
    ><h3 class="font-heading text-h4 font-bold">{{ expense.category }}</h3>
    <p class="text-h3 font-bold tabular-nums">
      {{ formatValue(expense.amount, { style: "currency", currency: "BRL" }) }}
    </p>
    <p>{{ expense.description }}</p>
    <time :datetime="expense.date">{{ expense.date }}</time>
    <p class="text-caption text-muted-foreground">Fonte: {{ expense.source }}</p></Card
  >
</template>
