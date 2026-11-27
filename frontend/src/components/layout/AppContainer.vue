<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  width: min(100%, var(--container-max));
  margin-inline: auto;
  padding-inline: var(--gutter);
}
</style>
