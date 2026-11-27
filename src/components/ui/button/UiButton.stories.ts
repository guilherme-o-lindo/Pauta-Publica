import type { Meta, StoryObj } from "@storybook/vue3-vite";
import UiButton from "./UiButton.vue";
const meta = {
  title: "UI/Button",
  component: UiButton,
  tags: ["autodocs"],
  args: { variant: "primary", size: "md", disabled: false },
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: '<UiButton v-bind="args">Explorar dados</UiButton>',
  }),
} satisfies Meta<typeof UiButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Disabled: Story = { args: { disabled: true } };
