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

## Tailwind e shadcn-vue (próxima integração)
O repositório ainda não possui essas dependências. Para não quebrar os lockfiles, esta primeira implementação usa CSS nativo com tokens e componentes Vue, sem instalar dependências. A ponte theme.css já está preparada para Tailwind v4, mas não está importada.
No ambiente local, instalar Tailwind e seu plugin Vite (pnpm --dir frontend add -D tailwindcss @tailwindcss/vite), adicionar o plugin ao vite.config.ts, importar tailwindcss e theme.css no início de styles/index.css. Configurar aliases no Vite e TypeScript antes de inicializar shadcn-vue. Migrar os primitivos existentes incrementalmente, sem manter duas bibliotecas concorrentes. Regenerar os lockfiles conforme o fluxo do monorepo.
As fontes têm fallback de sistema; instalar os arquivos ou pacotes das fontes antes da validação visual.

## Backlog
Navigation, formulários complexos, overlays acessíveis, tabelas, gráficos, mapas, demais features, documentação de variantes, testes automatizados e auditoria WCAG. Adicionar conforme os casos reais, aproveitando shadcn-vue para interações complexas. Não há integração com APIs ou dados reais nesta etapa.
