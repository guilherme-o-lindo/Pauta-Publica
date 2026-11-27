<template>
  <div role="group" aria-label="Filtros" class="flex flex-wrap items-end gap-3">
    <slot />
    <div v-if="$slots.actions" class="ms-auto flex flex-wrap gap-2"><slot name="actions" /></div>
  </div>
</template>
