// @vitest-environment jsdom
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { DesktopNavigation, Sidebar, SkipLink } from "../src/components/navigation";
import { searchNavigation } from "../src/components/navigation/navigation";
import { PublicLayout, EditorialLayout, DashboardLayout, DetailLayout } from "../src/layouts";
const items = [
  { label: "Início", href: "#home", current: true },
  { label: "Votações", href: "#votes" },
];
describe("navigation and layouts", () => {
  it("searches without accents and ignores surrounding spaces", () => {
    expect(searchNavigation(items, "  VOTACOES ")).toEqual([items[1]]);
    expect(searchNavigation(items, "unknown")).toEqual([]);
    expect(searchNavigation(items, "")).toEqual(items);
  });
  it("indicates the current page in navigation", () => {
    for (const component of [DesktopNavigation, Sidebar]) {
      const w = mount(component, { props: { items } });
      expect(w.get('[aria-current="page"]').attributes("href")).toBe("#home");
      expect(w.findAll('[aria-current="page"]')).toHaveLength(1);
    }
  });
  it("links the skip control to the main content", () => {
    expect(mount(SkipLink).get("a").attributes("href")).toBe("#main");
  });
  it("provides one main landmark and a focusable skip target", () => {
    const w = mount(PublicLayout, { props: { items }, slots: { default: "Main content" } });
    expect(w.findAll("main")).toHaveLength(1);
    expect(w.get("main").attributes("tabindex")).toBe("-1");
    expect(w.get("main").attributes("id")).toBe("main");
    expect(w.get("header").exists()).toBe(true);
    expect(w.get("footer").exists()).toBe(true);
  });
  it("renders editorial content in an article", () => {
    expect(
      mount(EditorialLayout, { props: { items }, slots: { default: "Article" } })
        .get("article")
        .text(),
    ).toBe("Article");
  });
  it("renders contextual dashboard navigation", () => {
    expect(
      mount(DashboardLayout, { props: { items, sidebarItems: items } })
        .get("aside nav")
        .attributes("aria-label"),
    ).toBe("Navegação da seção");
  });
  it("renders detail aside only when supplied", () => {
    expect(mount(DetailLayout, { props: { items } }).find("aside").exists()).toBe(false);
    expect(
      mount(DetailLayout, { props: { items }, slots: { aside: "Details" } })
        .get("aside")
        .text(),
    ).toBe("Details");
  });
});
