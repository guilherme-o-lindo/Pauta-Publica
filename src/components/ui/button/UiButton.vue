<script setup lang="ts">
import Button from "./Button.vue";
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  { variant: "primary", size: "md", type: "button", disabled: false },
);
</script>
<template>
  <Button
    :variant="variant === 'primary' ? 'default' : variant"
    :size="size === 'md' ? 'default' : size"
    :type="type"
    :disabled="disabled"
    ><slot
  /></Button>
</template>
