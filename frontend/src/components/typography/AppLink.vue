<script setup lang="ts">
defineProps<{ href: string }>();
</script>
<template>
  <a
    :href="href"
    class="font-sans font-bold text-primary underline decoration-1 underline-offset-4 hover:decoration-2 wrap-anywhere"
    ><slot
  /></a>
</template>
