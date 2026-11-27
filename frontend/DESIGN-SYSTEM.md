# Design system — Pauta Pública

## Camadas

- styles/tokens: primitivos, semânticos, componentes.
- styles: base, tipografia, utilitários, movimento e ponte Tailwind.
- components/ui: primitivos sem dependência de domínio.
- components/layout, feedback, data-display, brand: composições compartilhadas.
- features/<domínio>/components: composições específicas.
- pages: composição de páginas.
- app: providers e router existentes, ainda não implementados.

Dependências apontam das páginas para features e componentes compartilhados, nunca no sentido contrário. Não criar wrappers sem responsabilidade recorrente. Usar slots para composição e props tipadas para variantes. Dados políticos não usam cores de sucesso/erro como juízo de valor.

## Executar

Na raiz: pnpm install --frozen-lockfile
Depois: pnpm --dir frontend dev
A página inicial é temporariamente o laboratório. Build: pnpm --dir frontend build.

## Infraestrutura ativa

Tailwind v4, plugin Vite, shadcn-vue CLI (components.json), Reka UI, CVA, clsx, tailwind-merge, @lucide/vue, Fontsource, Typography e Storybook. Os tokens continuam em styles/tokens e theme.css. O utilitario cn() fica em src/lib/utils.ts. Alias @/ aponta para src. As fontes sao servidas localmente.

Comandos na raiz do monorepo:

- pnpm --dir frontend dev
- pnpm --dir frontend storybook
- pnpm --dir frontend build:storybook
- pnpm --dir frontend test
- pnpm --dir frontend exec shadcn-vue info

A migracao de primitivos para shadcn-vue/CVA ocorre na fase 04; revisar imports Lucide gerados pelo CLI e usar @lucide/vue. Nao sobrescrever tokens com um novo init.

## Backlog

Navigation, formulários complexos, overlays acessíveis, tabelas, gráficos, mapas, demais features, documentação de variantes, testes automatizados e auditoria WCAG. Adicionar conforme os casos reais, aproveitando shadcn-vue para interações complexas. Não há integração com APIs ou dados reais nesta etapa.
