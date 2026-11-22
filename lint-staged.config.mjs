export default {
  // Frontend: ESLint + Prettier
  "frontend/**/*.{js,jsx,ts,tsx,vue}": [
    "pnpm --dir frontend exec eslint --fix",
    "pnpm --dir frontend exec prettier --write",
  ],

  // Frontend: arquivos estáticos
  "frontend/**/*.{json,css,scss,md,html}": [
    "pnpm --dir frontend exec prettier --write",
  ],

  // Backend: Ruff + Pyright
  "backend/**/*.py": [
    "uv run --project backend ruff check --fix",
    "uv run --project backend ruff format",
    () => "uv run --project backend pyright",
  ],

  // Configurações da raiz
  "*.{json,js,cjs,mjs,md,yaml,yml}": ["pnpm exec prettier --write"],
};
