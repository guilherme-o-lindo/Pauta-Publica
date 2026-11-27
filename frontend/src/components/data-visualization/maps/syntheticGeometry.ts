// Synthetic fixture only: these polygons do not represent any real territory.
export const syntheticGeometry = {
  type: "FeatureCollection" as const,
  features: ["A", "B", "C"].map((name, i) => ({
    type: "Feature" as const,
    properties: { name },
    geometry: {
      type: "Polygon" as const,
      coordinates: [
        [
          [i * 2, 0],
          [i * 2, 1],
          [i * 2 + 1, 1],
          [i * 2 + 1, 0],
          [i * 2, 0],
        ],
      ],
    },
  })),
};
