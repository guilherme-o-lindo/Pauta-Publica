import type { Meta, StoryObj } from "@storybook/vue3-vite";
import LayoutPreview from "./LayoutPreview.vue";
const meta = {
  title: "Foundations/Layout and Typography",
  component: LayoutPreview,
  parameters: { layout: "padded" },
} satisfies Meta<typeof LayoutPreview>;
export default meta;
export const Foundations: StoryObj<typeof meta> = {};
