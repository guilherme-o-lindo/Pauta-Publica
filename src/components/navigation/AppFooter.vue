<script setup lang="ts">
import AppContainer from "../layout/AppContainer.vue";
import BrandLogo from "../brand/BrandLogo.vue";
import type { NavigationItem } from "./navigation";
defineProps<{ items: readonly NavigationItem[] }>();
</script>
<template>
  <footer class="mt-auto border-t border-border bg-muted py-8">
    <AppContainer
      ><div class="grid gap-6 md:grid-cols-2">
        <div class="grid gap-3">
          <BrandLogo compact />
          <p>Política simples. Informação para todos.</p>
          <p class="text-caption text-muted-foreground">
            Projeto de informação pública e transparência.
          </p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <ul class="grid gap-2 sm:grid-cols-2">
            <li v-for="item in items" :key="item.href">
              <a
                :href="item.href"
                class="inline-flex min-h-11 items-center underline underline-offset-4"
                >{{ item.label }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div v-if="$slots.default" class="mt-4 text-caption text-muted-foreground"><slot /></div
    ></AppContainer>
  </footer>
</template>
