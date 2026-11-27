import type { Meta, StoryObj } from "@storybook/vue3-vite";
import DomainPreview from "./DomainPreview.vue";
const meta = { title: "Domain/Overview", component: DomainPreview } satisfies Meta<
  typeof DomainPreview
>;
export default meta;
export const Overview: StoryObj<typeof meta> = {};
