import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BrandPreview from "./BrandPreview.vue";
const meta = { title: "Brand and Editorial/Overview", component: BrandPreview } satisfies Meta<
  typeof BrandPreview
>;
export default meta;
export const Overview: StoryObj<typeof meta> = {};
