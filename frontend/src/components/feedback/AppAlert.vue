<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'success' | 'warning' | 'error' | 'info'; title: string }>(), { tone: 'info' })
</script>
<template>
  <div class="alert" :data-tone="tone">
    <strong>{{ title }}</strong>
    <div><slot /></div>
  </div>
</template>
<style scoped>
.alert { padding: var(--space-4); border-radius: var(--radius-md); border-inline-start: 4px solid; display: grid; gap: var(--space-1); }
.alert[data-tone='success'] { background: var(--success-bg); color: var(--success-fg); }
.alert[data-tone='warning'] { background: var(--warning-bg); color: var(--warning-fg); }
.alert[data-tone='error'] { background: var(--error-bg); color: var(--error-fg); }
.alert[data-tone='info'] { background: var(--info-bg); color: var(--info-fg); }
</style>
