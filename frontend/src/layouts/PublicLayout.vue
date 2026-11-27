<script setup lang="ts">
import { AppHeader, AppFooter, SkipLink, type NavigationItem } from "../components/navigation";
import AppContainer from "../components/layout/AppContainer.vue";
withDefaults(defineProps<{ items: readonly NavigationItem[]; homeHref?: string }>(), {
  homeHref: "/",
});
</script>
<template>
  <div class="flex min-h-screen flex-col">
    <SkipLink /><AppHeader :items="items" :home-href="homeHref" />
    <main id="main" tabindex="-1" class="flex-1">
      <AppContainer><slot /></AppContainer>
    </main>
    <AppFooter :items="items"><slot name="footer" /></AppFooter>
  </div>
</template>
