import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { PublicLayout, EditorialLayout, DashboardLayout, DetailLayout } from "./index";
import PageHeader from "../components/layout/PageHeader.vue";
import StatCard from "../components/data-display/StatCard.vue";
const items = [
  { label: "Visão geral", href: "#overview", current: true },
  { label: "Dados", href: "#data" },
];
const meta = {
  title: "Navigation and Layouts/Page structures",
  component: PublicLayout,
  parameters: { layout: "fullscreen" },
  args: { items },
} satisfies Meta<typeof PublicLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Public: Story = {
  render: (args) => ({
    components: { PublicLayout, PageHeader },
    setup: () => ({ args }),
    template:
      '<PublicLayout v-bind="args"><PageHeader id="overview" title="Visão geral" description="Laboratório de navegação"/><p id="data">Dados ilustrativos.</p></PublicLayout>',
  }),
};
export const Editorial: Story = {
  render: (args) => ({
    components: { EditorialLayout, PageHeader },
    setup: () => ({ args }),
    template:
      '<EditorialLayout :items="args.items"><template #hero><PageHeader id="overview" title="Informação pública"/></template><p id="data">Conteúdo editorial demonstrativo.</p></EditorialLayout>',
  }),
};
export const Dashboard: Story = {
  render: (args) => ({
    components: { DashboardLayout, PageHeader, StatCard },
    setup: () => ({ args }),
    template:
      '<DashboardLayout :items="args.items" :sidebar-items="args.items"><PageHeader id="overview" title="Painel"/><StatCard id="data" label="Indicador fictício" value="42"/></DashboardLayout>',
  }),
};
export const Detail: Story = {
  render: (args) => ({
    components: { DetailLayout, PageHeader },
    setup: () => ({ args }),
    template:
      '<DetailLayout :items="args.items"><template #header><PageHeader id="overview" title="Detalhes"/></template><p id="data">Informações demonstrativas.</p><template #aside>Informações complementares</template></DetailLayout>',
  }),
};
