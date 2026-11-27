<script setup lang="ts">
import { useId } from "vue";
const model = defineModel<string>({ required: true });
defineProps<{ options: { value: string; label: string }[] }>();
const uid = useId();
</script>
<template>
  <div class="grid gap-2">
    <label :for="uid" class="text-caption font-bold">Ordenar por</label
    ><select
      :id="uid"
      v-model="model"
      class="min-h-11 rounded-ui-sm border border-input bg-card px-3 text-body"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
