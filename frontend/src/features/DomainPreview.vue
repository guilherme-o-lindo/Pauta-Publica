<script setup lang="ts">
import { computed, ref } from "vue";
import ParliamentarianProfile from "./parliamentarians/components/ParliamentarianProfile.vue";
import BillCard from "./bills/components/BillCard.vue";
import LegislativeTimeline from "./bills/components/LegislativeTimeline.vue";
import VotingCard from "./votes/components/VotingCard.vue";
import VoteDistribution from "./votes/components/VoteDistribution.vue";
import ExpenseCard from "./expenses/components/ExpenseCard.vue";
import ExpenseTable from "./expenses/components/ExpenseTable.vue";
import ExpenseBreakdown from "./expenses/components/ExpenseBreakdown.vue";
import IndicatorCard from "./indicators/components/IndicatorCard.vue";
import IndicatorComparison from "./indicators/components/IndicatorComparison.vue";
import GlossaryCard from "./glossary/components/GlossaryCard.vue";
import FavoriteButton from "./favorites/components/FavoriteButton.vue";
import FavoriteList from "./favorites/components/FavoriteList.vue";
import type { Parliamentarian } from "./parliamentarians/types";
import type { Voting } from "./votes/types";
import type { Expense } from "./expenses/types";
const source = "Dados fictícios — demonstração";
const person: Parliamentarian = {
  id: "demo-person",
  name: "Parlamentar fictício",
  party: "Sigla ilustrativa",
  state: "CE",
  office: "Mandato demonstrativo",
  source,
};
const voting: Voting = {
  id: "demo-vote",
  title: "Votação ilustrativa",
  date: "2026-01-01",
  result: "Exemplo de resultado",
  counts: [
    { label: "Sim", value: 30 },
    { label: "Não", value: 20 },
    { label: "Abstenção", value: 5 },
  ],
  source,
};
const expenses: Expense[] = [
  {
    id: "demo-expense",
    category: "Categoria ilustrativa",
    date: "2026-01-01",
    amount: 1200,
    description: "Despesa fictícia",
    source,
  },
];
const favorite = ref(false);
const favorites = computed(() =>
  favorite.value ? [{ id: "demo-bill", label: "Proposição fictícia", href: "#demo-bill" }] : [],
);
</script>
<template>
  <div class="grid min-w-0 gap-8">
    <p class="rounded-ui-md bg-muted p-4 font-bold">
      Todos os registros desta seção são fictícios. Não representam pessoas, partidos, votações ou
      despesas reais.
    </p>
    <section class="grid gap-4">
      <h3 class="font-heading text-h3 font-bold">Parlamentares</h3>
      <ParliamentarianProfile
        :person="person"
        :details="[{ label: 'Identificador', value: 'Demonstração' }]"
      />
    </section>
    <section id="demo-bill" class="grid gap-4">
      <h3 class="font-heading text-h3 font-bold">Proposições</h3>
      <BillCard
        code="Proposição fictícia"
        summary="Exemplo de apresentação legislativa."
        status="Em análise"
        :source="source"
        ><FavoriteButton v-model="favorite" label="Proposição fictícia" /></BillCard
      ><LegislativeTimeline
        :events="[{ id: 'demo-event', date: '2026-01-01', label: 'Evento demonstrativo' }]"
      />
    </section>
    <section class="grid min-w-0 gap-4">
      <h3 class="font-heading text-h3 font-bold">Votações</h3>
      <VotingCard :voting="voting" /><VoteDistribution :counts="voting.counts" :source="source" />
    </section>
    <section class="grid min-w-0 gap-4">
      <h3 class="font-heading text-h3 font-bold">Despesas</h3>
      <ExpenseCard :expense="expenses[0]!" /><ExpenseTable :expenses="expenses" /><ExpenseBreakdown
        :categories="[{ label: 'Categoria ilustrativa', amount: 1200 }]"
        :source="source"
      />
    </section>
    <section class="grid gap-4">
      <h3 class="font-heading text-h3 font-bold">Indicadores</h3>
      <IndicatorCard
        :indicator="{
          id: 'demo-indicator',
          label: 'Registros ilustrativos',
          value: 42,
          period: 'Janeiro de 2026',
          source,
        }"
      /><IndicatorComparison
        label="Comparação demonstrativa"
        :current="42"
        :previous="30"
        period="Janeiro de 2026"
        :source="source"
      />
    </section>
    <section class="grid gap-4">
      <h3 class="font-heading text-h3 font-bold">Glossário</h3>
      <GlossaryCard
        :entry="{
          id: 'demo-term',
          term: 'Termo ilustrativo',
          definition: 'Exemplo de definição para o catálogo.',
          source,
        }"
      />
    </section>
    <FavoriteList :items="favorites" @remove="favorite = false" />
  </div>
</template>
