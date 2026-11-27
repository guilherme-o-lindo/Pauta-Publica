import type { Meta, StoryObj } from "@storybook/vue3-vite";
import SharedPreview from "./SharedPreview.vue";
const meta = { title: "Shared/Components", component: SharedPreview } satisfies Meta<
  typeof SharedPreview
>;
export default meta;
export const Interactive: StoryObj<typeof meta> = {};
