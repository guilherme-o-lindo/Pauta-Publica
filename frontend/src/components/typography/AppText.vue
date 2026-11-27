<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: "p" | "span" | "div" | "small";
    variant?: "body" | "lead" | "caption" | "overline";
    tone?: "default" | "muted";
    weight?: "normal" | "bold";
  }>(),
  { as: "p", variant: "body", tone: "default", weight: "normal" },
);
const variants = {
  body: "text-body leading-normal",
  lead: "text-lead leading-relaxed",
  caption: "text-caption leading-normal",
  overline: "text-caption font-bold tracking-wide uppercase",
};
</script>
<template>
  <component
    :is="as"
    class="font-sans wrap-anywhere"
    :class="[
      variants[variant],
      tone === 'muted' ? 'text-muted-foreground' : 'text-foreground',
      weight === 'bold' ? 'font-bold' : variant !== 'overline' ? 'font-normal' : '',
    ]"
    ><slot
  /></component>
</template>
