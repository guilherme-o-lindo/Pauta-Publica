<script setup lang="ts">
import { Badge } from "../../../components/ui/badge";
defineProps<{ status: string }>();
</script>
<template>
  <Badge variant="outline">{{ status }}</Badge>
</template>
