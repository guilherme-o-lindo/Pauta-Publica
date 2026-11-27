# Arquitetura

Fluxo de dependências: tokens → primitivos UI → componentes compostos → componentes de domínio → páginas. Vue 3 e TypeScript; componentes de apresentação recebem props e emitem eventos, sem acoplamento às APIs. Use `cn` para composição de classes e CVA para variantes. Preserve a estrutura feature-based e não introduza abstrações para simples flex/grid.
