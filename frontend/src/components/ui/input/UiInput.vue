<script setup lang="ts">
const model = defineModel<string>({ required: true });
withDefaults(defineProps<{ type?: "text" | "search" | "email"; invalid?: boolean }>(), {
  type: "text",
  invalid: false,
});
</script>
<template>
  <input v-model="model" :type="type" :aria-invalid="invalid || undefined" class="field" />
</template>
<style scoped>
.field {
  width: 100%;
  min-height: var(--field-height);
  border: var(--border-thin) solid var(--input);
  border-radius: var(--field-radius);
  background: var(--card);
  color: var(--foreground);
  padding: var(--field-padding-y) var(--field-padding-x);
}
.field[aria-invalid="true"] {
  border-color: var(--error-fg);
}
</style>
