<script setup lang="ts">
defineOptions({ name: "AppHeading" });
import { computed } from "vue";
type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Appearance = "display" | "h1" | "h2" | "h3" | "h4";
const props = withDefaults(defineProps<{ level?: Level; appearance?: Appearance }>(), {
  level: 2,
  appearance: undefined,
});
const styles = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};
const appearanceClass = computed(
  () =>
    styles[
      props.appearance ??
        (props.level === 1 ? "h1" : props.level === 2 ? "h2" : props.level === 3 ? "h3" : "h4")
    ],
);
</script>
<template>
  <component
    :is="'h' + level"
    class="font-heading font-bold leading-tight wrap-anywhere"
    :class="appearanceClass"
    ><slot
  /></component>
</template>
