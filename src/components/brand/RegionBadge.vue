<script setup lang="ts">
import { Badge } from "../ui/badge";
import RegionalSymbol from "./RegionalSymbol.vue";
import type { Region } from "./regions";
defineProps<{ region: Region }>();
</script>
<template>
  <Badge variant="outline" class="whitespace-normal"><RegionalSymbol :region="region" /></Badge>
</template>
