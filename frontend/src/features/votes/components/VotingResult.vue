<script setup lang="ts">
import { Badge } from "../../../components/ui/badge";
defineProps<{ result: string }>();
</script>
<template>
  <Badge variant="outline">Resultado: {{ result }}</Badge>
</template>
