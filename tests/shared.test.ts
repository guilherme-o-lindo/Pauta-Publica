// @vitest-environment jsdom
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SearchInput from "../src/components/forms/SearchInput.vue";
import FormField from "../src/components/forms/FormField.vue";
import DateRangePicker from "../src/components/forms/DateRangePicker.vue";
import ActiveFilters from "../src/components/filters/ActiveFilters.vue";
import DataTable from "../src/components/data-display/DataTable.vue";
import ErrorState from "../src/components/feedback/ErrorState.vue";
import LoadingState from "../src/components/feedback/LoadingState.vue";
describe("shared components", () => {
  it("clears search and emits the new value", async () => {
    const w = mount(SearchInput, { props: { modelValue: "teste" } });
    await w.get('button[aria-label="Limpar pesquisa"]').trigger("click");
    expect(w.emitted("update:modelValue")).toEqual([[""]]);
  });
  it("associates field errors and descriptions", () => {
    const w = mount(FormField, {
      props: {
        id: "example",
        label: "Nome",
        description: "Ajuda",
        error: "Obrigatório",
        required: true,
      },
      slots: {
        default:
          '<template #default="field"><input :id="field.id" :aria-describedby="field.describedBy" :aria-invalid="field.invalid" :required="field.required" /></template>',
      },
    });
    expect(w.get("label").attributes("for")).toBe("example");
    expect(w.get("[role=alert]").attributes("id")).toBe("example-error");
    expect(w.get("input").attributes("aria-describedby")).toBe("example-description example-error");
  });
  it("rejects reversed dates", () => {
    const w = mount(DateRangePicker, {
      props: { modelValue: { start: "2026-11-20", end: "2026-11-01" } },
    });
    expect(w.get("[role=alert]").text()).toContain("data final");
  });
  it("emits remove and clear filter actions", async () => {
    const w = mount(ActiveFilters, { props: { filters: [{ id: "north", label: "Norte" }] } });
    await w.get('button[aria-label="Remover filtro: Norte"]').trigger("click");
    await w.findAll("button")[1]!.trigger("click");
    expect(w.emitted("remove")).toEqual([["north"]]);
    expect(w.emitted("clear")).toHaveLength(1);
  });
  it("sorts and paginates rows", async () => {
    const w = mount(DataTable, {
      props: {
        caption: "Exemplo",
        columns: [{ key: "value", label: "Valor", sortable: true }],
        rows: [
          { id: "a", cells: { value: 20 } },
          { id: "b", cells: { value: 10 } },
        ],
        pageSize: 1,
      },
    });
    expect(w.get("tbody").text()).toBe("20");
    await w.get("th button").trigger("click");
    expect(w.get("th").attributes("aria-sort")).toBe("ascending");
    expect(w.get("tbody").text()).toBe("10");
    await w
      .findAll("button")
      .find((b) => b.text() === "Próxima")!
      .trigger("click");
    expect(w.get("tbody").text()).toBe("20");
  });
  it("exposes accessible loading and retry states", async () => {
    expect(mount(LoadingState).get('[role="status"]').text()).toContain("Carregando");
    const w = mount(ErrorState, { props: { description: "Falha", retry: true } });
    await w.get("button").trigger("click");
    expect(w.emitted("retry")).toHaveLength(1);
  });
});
