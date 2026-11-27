// @vitest-environment jsdom
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import {
  AppContainer,
  AppGrid,
  PageHeader,
  SectionHeader,
  ScrollArea,
  Separator,
  Stack,
} from "../src/components/layout";
import { Heading, AppText, AppLink } from "../src/components/typography";

describe("layout and typography", () => {
  it("separates heading semantics and visual appearance", () => {
    const w = mount(Heading, {
      props: { level: 3, appearance: "display" },
      slots: { default: "Title" },
    });
    expect(w.element.tagName).toBe("H3");
    expect(w.classes()).toContain("text-display");
  });
  it("uses the correct page and section heading levels", () => {
    expect(
      mount(PageHeader, { props: { title: "Page" } })
        .get("h1")
        .text(),
    ).toBe("Page");
    expect(
      mount(SectionHeader, { props: { title: "Section", level: 3, headingId: "section" } })
        .get("h3")
        .attributes("id"),
    ).toBe("section");
  });
  it("supports readable container width and semantic stack", () => {
    expect(mount(AppContainer, { props: { width: "reading" } }).classes()).toContain(
      "max-w-reading",
    );
    expect(mount(Stack, { props: { as: "ul", gap: "lg" } }).element.tagName).toBe("UL");
  });
  it("exposes responsive grid classes", () => {
    const w = mount(AppGrid);
    expect(w.classes()).toContain("grid-cols-4");
    expect(w.classes()).toContain("md:grid-cols-8");
    expect(w.classes()).toContain("lg:grid-cols-12");
  });
  it("labels keyboard-accessible scroll regions", () => {
    const w = mount(ScrollArea, { props: { label: "Results" } });
    expect(w.attributes("aria-label")).toBe("Results");
    expect(w.attributes("tabindex")).toBe("0");
    expect(w.attributes("role")).toBe("region");
  });
  it("supports decorative separators and native links", () => {
    expect(mount(Separator, { props: { decorative: true } }).attributes("aria-hidden")).toBe(
      "true",
    );
    expect(mount(AppLink, { props: { href: "#main" } }).attributes("href")).toBe("#main");
  });
  it("uses the caption variant without changing text semantics", () => {
    const w = mount(AppText, { props: { as: "small", variant: "caption" } });
    expect(w.element.tagName).toBe("SMALL");
    expect(w.classes()).toContain("text-caption");
  });
});
