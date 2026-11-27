<script setup lang="ts">
import { computed, useId } from "vue";
import FormField from "./FormField.vue";
import { Input } from "../ui/input";
const model = defineModel<{ start: string; end: string }>({ required: true });
const uid = useId();
const invalid = computed(() =>
  Boolean(model.value.start && model.value.end && model.value.start > model.value.end),
);
</script>
<template>
  <fieldset class="grid gap-3">
    <legend class="mb-2 font-bold">Período</legend>
    <div class="grid gap-3 sm:grid-cols-2">
      <FormField :id="uid + '-start'" v-slot="field" label="Data inicial">
        <Input
          :id="field.id"
          type="date"
          :model-value="model.start"
          :max="model.end || undefined"
          @update:model-value="model = { ...model, start: String($event) }"
        />
      </FormField>
      <FormField
        :id="uid + '-end'"
        v-slot="field"
        label="Data final"
        :error="invalid ? 'A data final deve ser igual ou posterior à inicial.' : ''"
      >
        <Input
          :id="field.id"
          type="date"
          :model-value="model.end"
          :min="model.start || undefined"
          :aria-invalid="field.invalid || undefined"
          :aria-describedby="field.describedBy"
          @update:model-value="model = { ...model, end: String($event) }"
        />
      </FormField>
    </div>
  </fieldset>
</template>
