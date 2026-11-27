<script setup lang="ts">
import AppContainer from "../layout/AppContainer.vue";
import BrandLogo from "../brand/BrandLogo.vue";
import ColorStrip from "../brand/ColorStrip.vue";
import DesktopNavigation from "./DesktopNavigation.vue";
import MobileNavigation from "./MobileNavigation.vue";
import GlobalSearch from "./GlobalSearch.vue";
import type { NavigationItem } from "./navigation";
withDefaults(defineProps<{ items: readonly NavigationItem[]; homeHref?: string }>(), {
  homeHref: "/",
});
</script>
<template>
  <header class="border-b border-border bg-card">
    <AppContainer
      ><div class="flex flex-wrap items-center justify-between gap-3 py-4">
        <a :href="homeHref" aria-label="Pauta Pública — início"><BrandLogo compact /></a
        ><DesktopNavigation :items="items" />
        <div class="flex items-center gap-2">
          <GlobalSearch :items="items" /><MobileNavigation :items="items" />
        </div>
      </div>
      <ColorStrip class="rounded-none"
    /></AppContainer>
  </header>
</template>
