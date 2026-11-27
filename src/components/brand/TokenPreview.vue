<script setup lang="ts">
const tones = [
  { label: "Sucesso", name: "success", classes: "bg-success-bg text-success-fg" },
  { label: "Atenção", name: "warning", classes: "bg-warning-bg text-warning-fg" },
  { label: "Erro", name: "error", classes: "bg-error-bg text-error-fg" },
  { label: "Informação", name: "info", classes: "bg-info-bg text-info-fg" },
];
const spacing = [1, 2, 3, 4, 6, 8, 12, 16];
</script>

<template>
  <div class="grid gap-6">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="tone in tones" :key="tone.name" class="rounded-ui-md p-4" :class="tone.classes">
        <div
          class="mb-2 h-8 rounded-ui-sm"
          :style="{ backgroundColor: 'var(--' + tone.name + ')' }"
        ></div>
        <p class="font-bold">{{ tone.label }}</p>
        <p class="text-caption">--{{ tone.name }}-bg / -fg</p>
      </div>
    </div>
    <div class="grid gap-2">
      <div v-for="size in spacing" :key="size" class="flex items-center gap-4">
        <span class="w-20 text-caption">space-{{ size }}</span>
        <span
          class="h-3 rounded-ui-sm bg-primary"
          :style="{ width: 'var(--space-' + size + ')' }"
        ></span>
      </div>
    </div>
    <div class="grid gap-2">
      <p class="font-heading text-display leading-tight font-bold">Brasil plural</p>
      <p class="font-heading text-h2 leading-tight font-bold">Informação pública</p>
      <p class="text-lead">Texto introdutório</p>
      <p class="text-body">Texto de leitura</p>
      <p class="text-caption text-muted-foreground">Legenda e metadados</p>
    </div>
    <div class="flex flex-wrap gap-4">
      <div class="rounded-ui-sm border border-border bg-card p-4">Raio pequeno</div>
      <div class="rounded-ui-md border border-border bg-card p-4 shadow-ui-low">Raio médio</div>
      <div class="rounded-ui-lg border border-border bg-card p-4 shadow-ui-overlay">
        Raio grande
      </div>
    </div>
  </div>
</template>
