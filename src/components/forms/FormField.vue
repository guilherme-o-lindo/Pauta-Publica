<script setup lang="ts">
import { computed, useId } from "vue";
import { Label } from "../ui/label";
const props = withDefaults(
  defineProps<{
    label: string;
    id?: string;
    description?: string;
    error?: string;
    required?: boolean;
  }>(),
  { id: undefined, description: "", error: "", required: false },
);
const uid = useId();
const fieldId = computed(() => props.id ?? uid);
const describedBy = computed(
  () =>
    [props.description && fieldId.value + "-description", props.error && fieldId.value + "-error"]
      .filter(Boolean)
      .join(" ") || undefined,
);
</script>
<template>
  <div class="grid gap-2">
    <Label :for="fieldId">{{ label }}<span v-if="required" aria-hidden="true"> *</span></Label>
    <slot
      :id="fieldId"
      :described-by="describedBy"
      :invalid="Boolean(error)"
      :required="required"
    />
    <p v-if="description" :id="fieldId + '-description'" class="text-caption text-muted-foreground">
      {{ description }}
    </p>
    <p v-if="error" :id="fieldId + '-error'" role="alert" class="text-caption text-error-fg">
      {{ error }}
    </p>
  </div>
</template>
