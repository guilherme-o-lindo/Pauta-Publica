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

## Layout e tipografia (fase 03)

Use AppContainer para largura e margens, AppSection para se??es, Stack e Cluster para espa?amento recorrente, AppGrid para grid de 4/8/12 colunas ou cards adapt?veis. PageHeader define o h1 da p?gina; SectionHeader permite n?veis 2 a 4. Heading separa n?vel sem?ntico e apar?ncia. AppText oferece body, lead, caption e overline sem wrappers redundantes. AppLink ? um link HTML; AppProse ? destinado a conte?do editorial; AppBlockquote identifica cita??es. AspectRatio, ScrollArea e Separator usam CSS e HTML nativos. ScrollArea exige r?tulo e, no eixo vertical, altura limitada pelo consumidor. Use utilit?rios Tailwind diretamente para layouts pontuais.

## Componentes compostos (fase 05)

SearchInput usa v-model; FormField fornece id, describedBy, invalid e required por slot; DateRangePicker usa datas ISO e controles nativos. FilterBar, FilterPanel, ActiveFilters e SortControl comp?em filtros controlados pelo consumidor. DataTable ordena e pagina registros locais sem alterar os dados recebidos. Para grandes conjuntos, use pagina??o no servidor em uma fase posterior. CopyButton e ShareButton dependem das APIs do navegador e informam falhas. LoadingState, ErrorState, EmptyState, StatCard, DescriptionList, Timeline e ImageWithCaption comp?em os estados e conte?dos. Exemplos em Shared/Components no Storybook.

## Marca e editorial (fase 06)

Brasil plural: as cinco geometrias e cores regionais s?o preservadas. RegionalShape ? decorativo; RegionalSymbol e RegionBadge fornecem identifica??o textual. BrandLogo ? uma assinatura provis?ria, n?o uma aprova??o de logotipo. GeometricMosaic, BrandPattern e ColorStrip s?o elementos decorativos. EditorialHero permite selecionar o n?vel do t?tulo conforme a hierarquia da p?gina; EditorialCard, FeatureSection, EditorialCallout, EditorialQuote, GeometricImage e CallToAction comp?em conte?dos editoriais. Imagens devem ter texto alternativo apropriado e cr?ditos quando aplic?veis. Nenhuma cor regional representa posicionamento pol?tico. Cat?logo: Brand and Editorial/Overview.

## Navega??o e layouts (fase 07)

PublicLayout oferece SkipLink, AppHeader, uma regi?o main e AppFooter. DesktopNavigation e MobileNavigation recebem NavigationItem[]; current indica a p?gina ativa. GlobalSearch filtra itens locais sem acentos, sem API. EditorialLayout limita a largura de leitura; DashboardLayout inclui Sidebar; DetailLayout fornece slots breadcrumb, header e aside opcional. As p?ginas s?o respons?veis por seus t?tulos e destinos reais. Os exemplos usam ?ncoras do laborat?rio, sem rotas de dom?nio ou autentica??o. Storybook: Navigation and Layouts/Page structures.

## Visualiza??o de dados (fase 08)

ECharts e Vue ECharts com SVG, importa??es modulares e carregamento ass?ncrono do cat?logo. ChartData preserva valores nulos; ChartContainer exige descri??o e fonte, oferecendo tabela de dados. Gr?ficos de rosca representam valores n?o negativos da primeira s?rie. Mapas recebem geometria e identifica??o da fonte fornecidas pelo consumidor; sem geometria, mostram alternativa tabular, sem contornos inventados. Dados do cat?logo s?o fict?cios. A inclus?o de malhas oficiais e a auditoria de acessibilidade visual permanecem pendentes.

## Componentes de dom?nio (fase 09)

Os sete dom?nios possuem contratos TypeScript pr?prios. A apresenta??o recebe dados por props e emite a??es; n?o realiza consultas ? API. Partidos e resultados usam estilos neutros. Valores monet?rios s?o formatados em BRL, com aus?ncia distinta de zero. Favoritos s?o controlados pelo consumidor, sem persist?ncia nesta etapa. O cat?logo Domain/Overview usa apenas dados fict?cios e demonstra intera??es locais.

## Consolidação (fase 10)

Documentação em [docs/design-system](docs/design-system/). Testes unitários: pnpm test. Testes de navegador: pnpm build e pnpm test:e2e. Regressão visual local: pnpm test:visual. O CI executa os testes funcionais Chromium; snapshots Windows exigem revisão humana e baselines Linux independentes. Os gráficos possuem dimensões explícitas e redimensionamento responsivo; ECharts e ZRender são separados em chunks. Mapas demonstram geometria sintética, sem dados territoriais reais. APIs, backend e persistência remota estão fora do escopo. A auditoria automatizada não certifica WCAG.
