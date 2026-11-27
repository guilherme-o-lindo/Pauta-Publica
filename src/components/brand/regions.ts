export const regions = [
  { id: "north", name: "Norte" },
  { id: "northeast", name: "Nordeste" },
  { id: "center-west", name: "Centro-Oeste" },
  { id: "southeast", name: "Sudeste" },
  { id: "south", name: "Sul" },
] as const;
export type Region = (typeof regions)[number]["id"];
export function regionName(id: Region) {
  return regions.find((region) => region.id === id)?.name ?? id;
}
