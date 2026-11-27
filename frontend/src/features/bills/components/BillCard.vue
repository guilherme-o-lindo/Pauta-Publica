<script setup lang="ts">
import UiCard from '../../../components/ui/card/UiCard.vue'
import CardHeader from '../../../components/ui/card/CardHeader.vue'
import CardTitle from '../../../components/ui/card/CardTitle.vue'
import UiBadge from '../../../components/ui/badge/UiBadge.vue'
defineProps<{ code: string; summary: string; status: string }>()
</script>
<template>
  <UiCard>
    <CardHeader>
      <CardTitle>{{ code }}</CardTitle>
      <UiBadge>{{ status }}</UiBadge>
    </CardHeader>
    <p>{{ summary }}</p>
  </UiCard>
</template>
