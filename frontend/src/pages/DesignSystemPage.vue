<script setup lang="ts">
import { computed, ref } from "vue";
import { defineAsyncComponent } from "vue";
import BrandPreview from "../components/brand/BrandPreview.vue";
import SharedPreview from "../components/data-display/SharedPreview.vue";
import LayoutPreview from "../components/layout/LayoutPreview.vue";
import PageHeader from "../components/layout/PageHeader.vue";
import PublicLayout from "../layouts/PublicLayout.vue";
import type { NavigationItem } from "../components/navigation";
import AppSection from "../components/layout/AppSection.vue";
import UiButton from "../components/ui/button/UiButton.vue";
import UiCard from "../components/ui/card/UiCard.vue";
import UiInput from "../components/ui/input/UiInput.vue";
import AppAlert from "../components/feedback/AppAlert.vue";
import EmptyState from "../components/feedback/EmptyState.vue";
import StatCard from "../components/data-display/StatCard.vue";
import RegionalShape from "../components/brand/RegionalShape.vue";
import TokenPreview from "../components/brand/TokenPreview.vue";
import BillCard from "../features/bills/components/BillCard.vue";

const VisualizationPreview = defineAsyncComponent(
  () => import("../components/data-visualization/VisualizationPreview.vue"),
);
const navigation: NavigationItem[] = [
  { label: "Fundamentos", href: "#foundations" },
  { label: "Componentes", href: "#shared" },
  { label: "Marca", href: "#brand" },
  { label: "Tokens", href: "#tokens" },
  { label: "Visualiza??o", href: "#visualization" },
  { label: "Exemplos", href: "#examples" },
];
const regions = [
  { id: "north", name: "Norte" },
  { id: "northeast", name: "Nordeste" },
  { id: "center-west", name: "Centro-Oeste" },
  { id: "southeast", name: "Sudeste" },
  { id: "south", name: "Sul" },
] as const;
const variants = ["primary", "secondary", "outline", "ghost", "destructive"] as const;
const query = ref("");
const count = ref(0);
const bills = [
  {
    code: "Exemplo 01",
    summary: "Proposta fictícia para demonstração de componentes.",
    status: "Em tramitação",
  },
];
const results = computed(() =>
  bills.filter((bill) =>
    (bill.code + " " + bill.summary)
      .toLocaleLowerCase("pt-BR")
      .includes(query.value.toLocaleLowerCase("pt-BR").trim()),
  ),
);
</script>
<template>
  <PublicLayout :items="navigation" home-href="#main">
    <PageHeader
      title="Design system"
      eyebrow="Pauta P?blica / Laborat?rio"
      description="Pol?tica simples. Informa??o para todos."
    />
    <AppSection id="foundations">
      <h2>Layout e tipografia</h2>
      <LayoutPreview />
    </AppSection>
    <AppSection id="shared">
      <h2>Componentes compostos</h2>
      <SharedPreview />
    </AppSection>
    <AppSection id="brand">
      <h2>Marca e editorial</h2>
      <BrandPreview />
    </AppSection>
    <AppSection id="visualization"
      ><h2>Visualiza??o de dados</h2>
      <VisualizationPreview
    /></AppSection>
    <AppSection id="tokens">
      <h2>Tokens</h2>
      <TokenPreview />
    </AppSection>
    <AppSection>
      <h2>Brasil plural</h2>
      <div class="regions">
        <div v-for="region in regions" :key="region.id">
          <RegionalShape :region="region.id" />
          <p>{{ region.name }}</p>
        </div>
      </div>
    </AppSection>
    <AppSection>
      <h2>Ações</h2>
      <div class="pp-cluster">
        <UiButton v-for="variant in variants" :key="variant" :variant="variant" @click="count++">{{
          variant
        }}</UiButton>
        <UiButton disabled>Desabilitado</UiButton>
      </div>
      <p aria-live="polite">Interações de demonstração: {{ count }}</p>
    </AppSection>
    <AppSection>
      <h2>Feedback</h2>
      <div class="pp-grid">
        <AppAlert tone="success" title="Sucesso">Alterações salvas.</AppAlert>
        <AppAlert tone="warning" title="Atenção">Dados em atualização.</AppAlert>
        <AppAlert tone="error" title="Erro">Não foi possível carregar.</AppAlert>
        <AppAlert title="Informação">Consulte a fonte oficial.</AppAlert>
      </div>
    </AppSection>
    <AppSection id="examples">
      <h2>Cards e pesquisa</h2>
      <UiCard>
        <label for="bill-search">Buscar exemplos</label>
        <UiInput id="bill-search" v-model="query" type="search" placeholder="Digite um termo" />
        <p aria-live="polite">{{ results.length }} resultado(s)</p>
        <BillCard v-for="bill in results" :key="bill.code" v-bind="bill" />
        <EmptyState
          v-if="!results.length"
          title="Nenhum resultado"
          description="Experimente outro termo."
        >
          <UiButton variant="outline" @click="query = ''">Limpar pesquisa</UiButton>
        </EmptyState>
      </UiCard>
      <StatCard
        label="Indicador demonstrativo"
        value="42"
        source="Valor fictício, sem fonte oficial."
      />
    </AppSection>
    <template #footer>Laborat?rio visual ? Dados exclusivamente ilustrativos.</template>
  </PublicLayout>
</template>
<style scoped>
.regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: var(--space-4);
}
.regions > div {
  display: grid;
  gap: var(--space-2);
  max-width: 8rem;
}
</style>
