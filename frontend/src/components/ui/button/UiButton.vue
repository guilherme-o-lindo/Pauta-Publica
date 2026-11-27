<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>(), { variant: 'primary', size: 'md', type: 'button', disabled: false })
</script>

<template>
  <button :type="type" :disabled="disabled" class="button" :class="[`button--${variant}`, `button--${size}`]">
    <slot />
  </button>
</template>

<style scoped>
.button { display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2); min-height: var(--button-height); padding: var(--space-2) var(--space-4); border: 1px solid transparent; border-radius: var(--button-radius); font-weight: 700; transition: background var(--duration-fast) var(--ease-standard); }
.button--primary { background: var(--primary); color: var(--primary-foreground); }
.button--primary:hover:not(:disabled) { background: var(--primary-hover); }
.button--secondary { background: var(--secondary); color: var(--secondary-foreground); }
.button--outline { background: transparent; color: var(--foreground); border-color: currentColor; }
.button--ghost { background: transparent; color: var(--foreground); }
.button--destructive { background: var(--error-bg); color: var(--error-fg); }
.button:not(.button--primary):hover:not(:disabled) { box-shadow: inset 0 0 0 1px currentColor; }
.button--sm { font-size: .875rem; }
.button--lg { padding-inline: var(--space-6); font-size: 1.125rem; }
.button:disabled { opacity: .5; }
</style>
