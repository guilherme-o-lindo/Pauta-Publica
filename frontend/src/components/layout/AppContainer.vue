<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  width: min(100%, var(--container-max));
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
}
</style>
