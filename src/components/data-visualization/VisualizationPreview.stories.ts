import type { Meta, StoryObj } from "@storybook/vue3-vite";
import VisualizationPreview from "./VisualizationPreview.vue";
const meta = {
  title: "Data Visualization/Overview",
  component: VisualizationPreview,
} satisfies Meta<typeof VisualizationPreview>;
export default meta;
export const Overview: StoryObj<typeof meta> = {};
