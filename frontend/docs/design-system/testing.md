# Testes do design system

- `pnpm test`: testes unitários e de componentes.
- `pnpm build`: tipos e produção.
- `pnpm build:storybook`: catálogo.
- `pnpm exec playwright install chromium`: navegador de testes.
- `pnpm test:e2e`: exige build de produção prévio; verifica renderização, dimensões, responsividade, alternativas tabulares, teclado e axe.
- Relatórios e capturas de falhas ficam em test-results e playwright-report, não versionados.

Não atualizar snapshots sem revisar diferenças. Auditoria automatizada não substitui avaliação manual com teclado, leitor de tela, zoom e contraste. A geometria real do Brasil ainda precisa ser incorporada e validada; o fallback não comprova renderização geográfica real.
