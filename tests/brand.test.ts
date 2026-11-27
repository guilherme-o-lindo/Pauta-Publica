// @vitest-environment jsdom
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import RegionalShape from "../src/components/brand/RegionalShape.vue";
import RegionalSymbol from "../src/components/brand/RegionalSymbol.vue";
import BrandLogo from "../src/components/brand/BrandLogo.vue";
import GeometricMosaic from "../src/components/brand/GeometricMosaic.vue";
import { regions } from "../src/components/brand/regions";
import EditorialHero from "../src/components/editorial/EditorialHero.vue";
import EditorialCard from "../src/components/editorial/EditorialCard.vue";
import GeometricImage from "../src/components/editorial/GeometricImage.vue";
describe("brand and editorial", () => {
  it.each(regions)("preserves region identity: $id", ({ id, name }) => {
    const shape = mount(RegionalShape, { props: { region: id } });
    expect(shape.get("svg").attributes("aria-hidden")).toBe("true");
    expect(shape.get(id === "southeast" ? "circle" : "path").attributes("fill")).toBe(
      "var(--region-" + id + ")",
    );
    expect(mount(RegionalSymbol, { props: { region: id } }).text()).toContain(name);
  });
  it("keeps the brand name and decorative mosaic", () => {
    expect(mount(BrandLogo).text()).toContain("Pauta Pública");
    expect(mount(GeometricMosaic).findAll("svg")).toHaveLength(5);
    expect(mount(GeometricMosaic).attributes("aria-hidden")).toBe("true");
  });
  it("supports semantic hero heading levels and a real editorial link", () => {
    expect(
      mount(EditorialHero, { props: { title: "Hero", description: "Description", level: 2 } })
        .get("h2")
        .text(),
    ).toBe("Hero");
    expect(
      mount(EditorialCard, {
        props: { title: "Article", description: "Description", href: "#article" },
      })
        .get("a")
        .attributes("href"),
    ).toBe("#article");
  });
  it("preserves alternative text, caption and credit", () => {
    const w = mount(GeometricImage, {
      props: { src: "/example.png", alt: "Example image", caption: "Caption", credit: "Credit" },
    });
    expect(w.get("img").attributes("alt")).toBe("Example image");
    expect(w.get("figcaption").text()).toContain("Credit");
  });
});
