<script setup lang="ts">
defineOptions({ name: "LayoutSeparator" });
withDefaults(defineProps<{ decorative?: boolean }>(), { decorative: false });
</script>
<template>
  <hr
    class="w-full border-0 border-t border-border"
    :role="decorative ? 'presentation' : undefined"
    :aria-hidden="decorative || undefined"
  />
</template>
