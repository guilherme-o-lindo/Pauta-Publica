<script setup lang="ts">
const model = defineModel<string>({ required: true })
withDefaults(defineProps<{ type?: 'text' | 'search' | 'email'; invalid?: boolean }>(), { type: 'text', invalid: false })
</script>
<template>
  <input v-model="model" :type="type" :aria-invalid="invalid || undefined" class="field" />
</template>
<style scoped>
.field { width: 100%; min-height: var(--field-height); border: 1px solid var(--input); border-radius: var(--field-radius); background: var(--card); color: var(--foreground); padding: var(--space-2) var(--space-3); }
.field[aria-invalid='true'] { border-color: var(--error-fg); }
</style>
