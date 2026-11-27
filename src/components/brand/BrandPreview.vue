<script setup lang="ts">
import BrandLogo from "./BrandLogo.vue";
import RegionBadge from "./RegionBadge.vue";
import GeometricMosaic from "./GeometricMosaic.vue";
import ColorStrip from "./ColorStrip.vue";
import { regions } from "./regions";
import EditorialHero from "../editorial/EditorialHero.vue";
import EditorialCard from "../editorial/EditorialCard.vue";
import FeatureSection from "../editorial/FeatureSection.vue";
import EditorialCallout from "../editorial/EditorialCallout.vue";
import EditorialQuote from "../editorial/EditorialQuote.vue";
import CallToAction from "../editorial/CallToAction.vue";
import { Button } from "../ui/button";
</script>
<template>
  <div class="grid gap-8">
    <p class="text-caption text-muted-foreground">
      Identidade visual demonstrativa. Assinatura de marca provisória; sem dados oficiais.
    </p>
    <BrandLogo /><ColorStrip />
    <div class="flex flex-wrap gap-3">
      <RegionBadge v-for="region in regions" :key="region.id" :region="region.id" />
    </div>
    <EditorialHero
      :level="2"
      eyebrow="Brasil plural"
      title="Política simples."
      description="Informação para todos."
      ><template #actions
        ><Button as="a" href="#brand-example">Explorar exemplo</Button></template
      ></EditorialHero
    ><FeatureSection
      id="brand-example"
      title="O Brasil em diferentes formas"
      description="Cinco regiões, uma identidade plural."
      ><GeometricMosaic
    /></FeatureSection>
    <div class="grid gap-4 md:grid-cols-2">
      <EditorialCard
        title="Entenda os dados públicos"
        description="Exemplo de conteúdo editorial."
        href="#brand-example"
        category="Transparência"
      /><EditorialCallout
        title="Contexto importa"
        description="Consulte as fontes originais ao interpretar informações públicas."
      />
    </div>
    <EditorialQuote attribution="Pauta Pública"
      >Política simples. Informação para todos.</EditorialQuote
    ><CallToAction
      title="Informação ao seu alcance"
      description="Conheça os fundamentos visuais do projeto."
      href="#brand-example"
      action-label="Ver identidade visual"
    />
  </div>
</template>
