<script setup lang="ts">
import { Badge } from "../../../components/ui/badge";
defineProps<{ party: string }>();
</script>
<template>
  <Badge variant="outline">{{ party }}</Badge>
</template>
