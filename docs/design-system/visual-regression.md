# Regressão visual

Os testes em e2e/visual-regression.spec.ts comparam seis figuras em desktop (1280 × 900) e mobile (390 × 844), utilizando Chromium, movimento reduzido, fontes locais e animações desabilitadas.

As referências são específicas da plataforma e do navegador. Gere a referência local com pnpm test:visual --update-snapshots somente após revisão visual. Execute novamente sem atualização para detectar regressões. Não trate a primeira captura como aprovação humana. Os testes funcionais permanecem independentes dos snapshots. A CI Linux precisa de referências próprias revisadas; não reutilize automaticamente referências do Windows.
