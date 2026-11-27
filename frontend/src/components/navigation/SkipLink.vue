<script setup lang="ts">
withDefaults(defineProps<{ target?: string }>(), { target: "main" });
</script>
<template><a class="pp-skip-link" :href="'#' + target">Ir para o conteúdo principal</a></template>
