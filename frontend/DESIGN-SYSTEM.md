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

## Tokens (fase 02)

Primitives define valores brutos; semantic define pap?is; components define dimens?es e espa?amentos de controles. theme.css exp?e os pap?is ao Tailwind v4. Use bg-background, text-foreground, bg-success-bg, text-success-fg, rounded-ui-md, shadow-ui-overlay e font-heading. A escala de espa?amento ? de 0.25rem; raios expl?citos ui-sm/md/lg s?o 6/12/20px. Breakpoints em theme.css s?o constantes de compila??o (40/48/64/80/96rem). N?o duplicar esses valores em runtime. Use tokens de cor de texto sobre fundos suaves; cores vivas s?o decorativas e n?o significam avalia??o pol?tica. Os testes verificam contraste de pares selecionados, n?o conformidade WCAG integral. Modo claro apenas nesta fase.
