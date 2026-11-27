<script setup lang="ts">
import Input from "./Input.vue";
const model = defineModel<string>({ required: true });
withDefaults(defineProps<{ type?: "text" | "search" | "email"; invalid?: boolean }>(), {
  type: "text",
  invalid: false,
});
</script>
<template>
  <Input
    :model-value="model"
    :type="type"
    :aria-invalid="invalid || undefined"
    @update:model-value="model = String($event)"
  />
</template>
