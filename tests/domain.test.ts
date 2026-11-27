// @vitest-environment jsdom
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ParliamentarianCard from "../src/features/parliamentarians/components/ParliamentarianCard.vue";
import BillCard from "../src/features/bills/components/BillCard.vue";
import LegislativeTimeline from "../src/features/bills/components/LegislativeTimeline.vue";
import VotingCard from "../src/features/votes/components/VotingCard.vue";
import ExpenseCard from "../src/features/expenses/components/ExpenseCard.vue";
import ExpenseTable from "../src/features/expenses/components/ExpenseTable.vue";
import IndicatorCard from "../src/features/indicators/components/IndicatorCard.vue";
import GlossaryCard from "../src/features/glossary/components/GlossaryCard.vue";
import FavoriteButton from "../src/features/favorites/components/FavoriteButton.vue";
import FavoriteList from "../src/features/favorites/components/FavoriteList.vue";
describe("domain components", () => {
  it("identifies the parliamentarian and party", () => {
    const w = mount(ParliamentarianCard, {
      props: {
        person: {
          id: "1",
          name: "Exemplo",
          party: "Sigla fictícia",
          state: "CE",
          office: "Mandato",
          href: "#person",
        },
      },
    });
    expect(w.get("a").attributes("href")).toBe("#person");
    expect(w.text()).toContain("Sigla fictícia");
  });
  it("preserves bill status and source", () => {
    const w = mount(BillCard, {
      props: { code: "Exemplo", summary: "Descrição", status: "Em análise", source: "Fictício" },
    });
    expect(w.text()).toContain("Em análise");
    expect(w.text()).toContain("Fictício");
  });
  it("handles missing legislative history", () => {
    expect(mount(LegislativeTimeline, { props: { events: [] } }).text()).toContain(
      "Histórico não disponível",
    );
  });
  it("exposes the voting result", () => {
    expect(
      mount(VotingCard, {
        props: {
          voting: {
            id: "1",
            title: "Exemplo",
            date: "2026-01-01",
            result: "Resultado ilustrativo",
            counts: [],
            source: "Fictício",
          },
        },
      }).text(),
    ).toContain("Resultado ilustrativo");
  });
  it("distinguishes absent expenses from zero", () => {
    const expense = {
      id: "1",
      category: "Exemplo",
      date: "2026-01-01",
      description: "Teste",
      source: "Fictício",
    };
    expect(
      mount(ExpenseCard, { props: { expense: { ...expense, amount: null } } }).text(),
    ).toContain("Não disponível");
    expect(
      mount(ExpenseTable, { props: { expenses: [{ ...expense, amount: 0 }] } })
        .get("tbody")
        .text(),
    ).toContain("0,00");
  });
  it("shows indicator period and source", () => {
    expect(
      mount(IndicatorCard, {
        props: {
          indicator: { id: "1", label: "Teste", value: 0, period: "Janeiro", source: "Fictício" },
        },
      }).text(),
    ).toContain("Janeiro");
  });
  it("renders semantic glossary entries", () => {
    const w = mount(GlossaryCard, {
      props: { entry: { id: "1", term: "Termo", definition: "Definição" } },
    });
    expect(w.get("dt").text()).toBe("Termo");
    expect(w.get("dd").text()).toBe("Definição");
  });
  it("emits favorite toggle", async () => {
    const w = mount(FavoriteButton, { props: { modelValue: false, label: "Exemplo" } });
    expect(w.get("button").attributes("aria-pressed")).toBe("false");
    await w.get("button").trigger("click");
    expect(w.emitted("update:modelValue")).toEqual([[true]]);
  });
  it("emits removal and handles empty favorites", async () => {
    const w = mount(FavoriteList, {
      props: { items: [{ id: "1", label: "Exemplo", href: "#example" }] },
    });
    await w.get("button").trigger("click");
    expect(w.emitted("remove")).toEqual([["1"]]);
    await w.setProps({ items: [] });
    expect(w.text()).toContain("Nenhum favorito");
  });
});
