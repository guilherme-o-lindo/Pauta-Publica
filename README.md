# Pauta Pública

**Política simples. Informação para todos.**

O **Pauta Pública** é um projeto open source de uma plataforma web voltada à democratização do acesso à informação política brasileira. Seu objetivo é reunir, organizar e apresentar dados públicos governamentais de maneira clara, acessível e compreensível.

A proposta é facilitar o acompanhamento de representantes políticos, projetos de lei, votações, despesas públicas e indicadores nacionais, reduzindo as barreiras técnicas e informacionais que dificultam o acesso dos cidadãos a esses dados.

Além de sua finalidade social, o Pauta Pública é desenvolvido como um **projeto de estudo e portfólio Full Stack**, destinado à aplicação prática de conceitos de engenharia de software, arquitetura de aplicações, integração de APIs, segurança, bancos de dados, testes automatizados e DevOps.

> **Status:** Em desenvolvimento — fase inicial de estruturação técnica e arquitetural.
>
> As funcionalidades, integrações e etapas descritas neste documento representam o escopo planejado. Sua implementação ocorrerá progressivamente.

---

## 1. Objetivos do projeto

### 1.1. Objetivo principal

Tornar informações políticas e governamentais brasileiras mais acessíveis, organizadas e fáceis de compreender, promovendo o acesso à informação, a transparência pública e a participação cidadã.

### 1.2. Objetivos específicos

- Centralizar informações provenientes de diferentes fontes governamentais.
- Disponibilizar mecanismos de pesquisa, filtragem e exploração de dados públicos.
- Apresentar informações legislativas e governamentais em linguagem acessível.
- Facilitar o acompanhamento de parlamentares, proposições e votações.
- Disponibilizar visualizações interativas de dados políticos e estatísticos.
- Permitir que usuários acompanhem representantes e propostas de seu interesse.
- Preservar a rastreabilidade das informações até suas fontes oficiais.
- Oferecer uma experiência responsiva, acessível e independente de filiação partidária.

### 1.3. Princípios do produto

**Acessibilidade:** informações públicas devem ser compreensíveis para pessoas com diferentes níveis de conhecimento político e tecnológico.

**Clareza:** termos técnicos, procedimentos legislativos e indicadores devem ser apresentados com explicações contextualizadas.

**Transparência:** informações devem permitir a identificação de sua origem, período de referência e data de atualização.

**Neutralidade político-partidária:** a plataforma não deve favorecer candidatos, partidos ou posicionamentos ideológicos.

**Confiabilidade:** os dados apresentados devem preservar a integridade e as limitações das fontes utilizadas.

**Privacidade:** o acesso às informações públicas não deve depender da criação de uma conta.

---

## 2. Objetivos de aprendizado

O Pauta Pública também funciona como um ambiente de aprendizado prático, buscando consolidar conhecimentos por meio do desenvolvimento de uma aplicação real.

O projeto pretende demonstrar habilidades em diferentes áreas do desenvolvimento de software.

### 2.1. Desenvolvimento frontend

- Desenvolver interfaces reativas utilizando Vue 3 e Composition API.
- Aplicar TypeScript para aumentar a segurança e a previsibilidade do código.
- Implementar navegação e rotas com Vue Router.
- Criar componentes reutilizáveis e layouts responsivos.
- Organizar aplicações utilizando uma arquitetura orientada a funcionalidades.
- Trabalhar com gerenciamento de estado local e compartilhado.
- Consumir APIs REST e gerenciar estados assíncronos.
- Implementar formulários e validações.
- Desenvolver gráficos, filtros e visualizações interativas.
- Aplicar princípios de acessibilidade digital, usabilidade e experiência do usuário.

### 2.2. Desenvolvimento backend

- Projetar e desenvolver APIs REST com FastAPI.
- Utilizar Python com tipagem estática e validação de dados.
- Estruturar um monólito modular com responsabilidades bem definidas.
- Implementar regras de negócio separadas da camada HTTP.
- Integrar sistemas externos utilizando clientes HTTP assíncronos.
- Trabalhar com tratamento de erros, paginação e limites de requisição.
- Implementar autenticação e autorização.
- Desenvolver processos de sincronização de dados.
- Aplicar injeção de dependências e práticas de manutenção de código.
- Documentar contratos de API utilizando OpenAPI.

### 2.3. Bancos de dados

- Modelar entidades, relacionamentos e restrições.
- Trabalhar com PostgreSQL.
- Utilizar SQLAlchemy 2.0 para persistência.
- Gerenciar alterações de esquema com Alembic.
- Criar consultas eficientes, índices e estratégias de paginação.
- Implementar transações e garantir a consistência dos dados.
- Evitar duplicações durante processos de sincronização.
- Trabalhar com dados provenientes de fontes heterogêneas.
- Compreender normalização, integridade referencial e otimização de consultas.

### 2.4. Autenticação e segurança

- Compreender e implementar OAuth 2.0 e OpenID Connect.
- Aplicar Authorization Code Flow com PKCE.
- Integrar provedores externos de identidade.
- Gerenciar sessões autenticadas de maneira segura.
- Implementar permissões e proteção de endpoints.
- Proteger informações sensíveis e credenciais.
- Trabalhar com cookies seguros, CORS e proteção CSRF.
- Aplicar boas práticas de validação, tratamento de erros e segurança de aplicações web.

### 2.5. Testes e qualidade de software

- Desenvolver testes unitários e de integração.
- Testar endpoints, serviços e operações de banco de dados.
- Simular dependências externas e respostas de APIs governamentais.
- Verificar contratos de integração.
- Testar componentes e funcionalidades do frontend.
- Aplicar análise estática de tipos.
- Automatizar lint e formatação.
- Avaliar cobertura de testes.
- Utilizar testes end-to-end de maneira seletiva.
- Integrar verificações de qualidade ao processo de desenvolvimento.

### 2.6. DevOps e engenharia de software

- Utilizar Docker e Docker Compose para padronizar ambientes.
- Organizar um monorepo contendo aplicações Python e TypeScript.
- Gerenciar dependências com uv e pnpm.
- Trabalhar com Git e GitHub.
- Aplicar Conventional Commits.
- Automatizar hooks de Git com Husky.
- Utilizar Commitlint e lint-staged.
- Implementar pipelines de integração contínua.
- Automatizar versionamento e releases com semantic-release.
- Configurar processos de build e deploy.
- Produzir documentação técnica e registrar decisões arquiteturais.

**Objetivo educacional final:** demonstrar capacidade de projetar, implementar, testar, documentar, automatizar e publicar uma aplicação Full Stack, compreendendo as responsabilidades e os fundamentos de cada tecnologia utilizada.

---

## 3. Funcionalidades planejadas

### 3.1. Consulta de parlamentares

- Pesquisa de deputados federais e senadores.
- Filtros por nome, partido, unidade federativa e outros critérios disponíveis.
- Perfis com informações institucionais.
- Histórico de atuação legislativa.
- Participação em votações.
- Relação com proposições legislativas.
- Acesso às fontes oficiais.

### 3.2. Acompanhamento legislativo

- Pesquisa de projetos de lei e outras proposições.
- Identificação de autores e assuntos.
- Consulta de tramitação e situação legislativa.
- Histórico de movimentações.
- Informações sobre votações relacionadas.
- Explicações de termos e etapas do processo legislativo.

### 3.3. Votações

- Consulta de votações legislativas.
- Identificação de matérias votadas.
- Visualização dos resultados.
- Consulta de votos individuais, quando disponibilizados.
- Filtros por data, matéria e parlamentar.
- Apresentação contextualizada dos resultados.

### 3.4. Transparência e despesas

- Consulta de informações sobre despesas públicas.
- Filtros por período, categoria e entidade.
- Visualizações comparativas.
- Histórico de gastos disponíveis.
- Referências às fontes oficiais.
- Explicações sobre a natureza dos valores apresentados.

Comparações deverão considerar diferenças de período, critérios e cobertura das fontes, evitando interpretações enganosas.

### 3.5. Indicadores públicos

- Consulta de indicadores econômicos e sociais.
- Visualização de séries históricas.
- Comparação entre localidades quando os dados forem compatíveis.
- Gráficos interativos.
- Explicações sobre indicadores e metodologias.
- Identificação das fontes e períodos de referência.

### 3.6. Contas e acompanhamentos

O acesso aos dados públicos será livre, sem necessidade de autenticação.

Usuários autenticados poderão:

- Salvar parlamentares de interesse.
- Acompanhar proposições legislativas.
- Consultar uma lista personalizada de acompanhamentos.
- Gerenciar seus favoritos.
- Configurar preferências de utilização.

Notificações automáticas poderão ser consideradas em uma etapa posterior.

### 3.7. Conteúdo explicativo

Um diferencial importante será transformar dados em informações compreensíveis.

A plataforma pretende incluir:

- Glossário de termos políticos.
- Explicações sobre procedimentos legislativos.
- Contextualização de informações e indicadores.
- Descrições acessíveis para gráficos.
- Referências às fontes consultadas.
- Indicação de limitações ou ausência de informações.

---

## 4. Stack tecnológica

A stack foi escolhida considerando produtividade, aprendizado, manutenção, modularidade e relevância profissional.

### Frontend

| Tecnologia     | Responsabilidade                      |
| -------------- | ------------------------------------- |
| Vue 3          | Framework de interface                |
| TypeScript     | Tipagem estática                      |
| Vite           | Ambiente de desenvolvimento e build   |
| Vue Router     | Roteamento                            |
| Tailwind CSS   | Estilização                           |
| shadcn-vue     | Componentes de interface              |
| Lucide Vue     | Ícones                                |
| Pinia          | Estado compartilhado do cliente       |
| TanStack Query | Gerenciamento de dados assíncronos    |
| Zod            | Validação de dados e formulários      |
| Apache ECharts | Visualização de dados                 |
| Leaflet        | Mapas interativos, quando necessários |

### Backend

| Tecnologia     | Responsabilidade                             |
| -------------- | -------------------------------------------- |
| Python         | Linguagem principal                          |
| FastAPI        | Desenvolvimento da API REST                  |
| Uvicorn        | Servidor ASGI                                |
| Pydantic       | Validação e serialização                     |
| SQLAlchemy 2.0 | Persistência e ORM                           |
| Alembic        | Migrações de banco                           |
| HTTPX          | Comunicação com APIs externas                |
| Authlib        | Integração OAuth 2.0 / OIDC                  |
| psycopg 3      | Driver PostgreSQL                            |
| uv             | Gerenciamento do ambiente e das dependências |

### Banco de dados

- PostgreSQL como banco de dados relacional principal.
- SQLAlchemy para consultas e persistência.
- Alembic para migrações versionadas.

### Qualidade e testes

| Área                | Ferramentas                                   |
| ------------------- | --------------------------------------------- |
| Lint Python         | Ruff                                          |
| Formatação Python   | Ruff Format                                   |
| Tipagem Python      | Pyright                                       |
| Testes Python       | pytest e pytest-asyncio                       |
| Integração HTTP     | HTTPX                                         |
| Cobertura Python    | pytest-cov                                    |
| Lint frontend       | ESLint, eslint-plugin-vue e typescript-eslint |
| Formatação frontend | Prettier                                      |
| Tipagem Vue         | vue-tsc                                       |
| Testes frontend     | Vitest e Vue Test Utils                       |
| Testes E2E          | Playwright                                    |
| Git hooks           | Husky                                         |
| Arquivos preparados | lint-staged                                   |
| Mensagens de commit | Commitlint                                    |

### Infraestrutura e automação

- Git e GitHub.
- pnpm Workspaces.
- Docker e Docker Compose.
- GitHub Actions.
- Conventional Commits.
- semantic-release.
- Vercel para frontend, como destino planejado.
- Render para backend e PostgreSQL, como destino planejado.

A inclusão de uma tecnologia na stack planejada não significa que ela já esteja implementada.

---

## 5. Arquitetura de software

O projeto adota uma arquitetura Full Stack organizada em um monorepo, separando frontend e backend sem introduzir complexidade distribuída desnecessária.

### 5.1. Visão geral

```text
                  USUÁRIO
                     |
                     v
          FRONTEND — VUE 3 + VITE
                     |
                HTTPS / REST
                     |
                     v
              API — FASTAPI
                     |
          +----------+----------+
          |                     |
          v                     v
  MÓDULOS DE DOMÍNIO       AUTENTICAÇÃO
          |
     +----+----------------+
     |                     |
     v                     v
POSTGRESQL           INTEGRAÇÕES HTTP
                           |
            +--------------+--------------+
            |              |              |
            v              v              v
          CÂMARA         SENADO       OUTRAS FONTES
                                      OFICIAIS
```

Processos de sincronização independentes reutilizarão os módulos e adaptadores do backend para atualizar os dados persistidos.

### 5.2. Backend — Monólito modular

O backend será organizado por domínio funcional, mantendo uma separação pragmática entre responsabilidades.

Principais módulos planejados:

- `parlamentares`
- `proposicoes`
- `votacoes`
- `despesas`
- `indicadores`
- `usuarios`
- `autenticacao`
- `acompanhamentos`

Cada módulo poderá conter:

| Arquivo         | Responsabilidade           |
| --------------- | -------------------------- |
| `router.py`     | Endpoints e interface HTTP |
| `schemas.py`    | Contratos Pydantic         |
| `models.py`     | Modelos SQLAlchemy         |
| `service.py`    | Regras de negócio          |
| `repository.py` | Acesso aos dados           |
| `test_*.py`     | Testes unitários           |

A estrutura interna será adaptada à complexidade de cada módulo, evitando a criação antecipada de abstrações desnecessárias.

Os clientes das APIs externas ficarão isolados em `integrations/`, permitindo reutilização entre módulos e substituição ou atualização dos mecanismos de coleta.

### 5.3. Frontend — Arquitetura híbrida

O frontend utilizará uma organização que combina páginas, funcionalidades e recursos compartilhados.

| Diretório      | Responsabilidade                          |
| -------------- | ----------------------------------------- |
| `app/`         | Inicialização, roteamento e providers     |
| `pages/`       | Páginas associadas às rotas               |
| `features/`    | Funcionalidades organizadas por domínio   |
| `components/`  | Componentes compartilhados                |
| `composables/` | Composables genéricos                     |
| `stores/`      | Estado compartilhado do cliente           |
| `lib/`         | Cliente HTTP, utilitários e configurações |
| `types/`       | Contratos e tipos compartilhados          |
| `assets/`      | Recursos utilizados pela aplicação        |

Cada funcionalidade poderá reunir seus próprios componentes, consultas, composables, tipos e testes.

**TanStack Query** será responsável pelo estado dos dados provenientes da API.

**Pinia** será utilizado para estados compartilhados específicos do cliente, evitando duplicação de informações já gerenciadas pelo TanStack Query.

Filtros que precisem ser compartilhados por URL poderão ser gerenciados pelo Vue Router.

### 5.4. Contratos da API

A comunicação será realizada por uma API REST versionada, utilizando inicialmente o prefixo:

`/api/v1`

O FastAPI fornecerá a especificação OpenAPI.

Está prevista a geração de tipos TypeScript a partir dessa especificação, reduzindo divergências entre os contratos do backend e do frontend.

---

## 6. Integrações com fontes públicas

O Pauta Pública pretende integrar informações provenientes de diferentes plataformas oficiais.

### Fontes inicialmente previstas

| Fonte                   | Dados de interesse                                       |
| ----------------------- | -------------------------------------------------------- |
| Câmara dos Deputados    | Deputados, proposições, eventos e votações               |
| Senado Federal          | Senadores, matérias legislativas e atividade parlamentar |
| Portal da Transparência | Despesas e outros dados de transparência disponíveis     |
| IBGE / SIDRA            | Indicadores estatísticos e territoriais                  |

A cobertura e os recursos efetivamente utilizados dependerão da disponibilidade, das condições de acesso e dos formatos oferecidos por cada fonte.

### Estratégia de integração

Será adotado um modelo híbrido de consulta e sincronização.

**Dados persistidos:** informações frequentemente consultadas poderão ser armazenadas no PostgreSQL para melhorar desempenho e permitir filtros e pesquisas próprios.

**Consultas sob demanda:** dados específicos poderão ser solicitados diretamente às fontes quando necessário.

**Sincronização periódica:** processos separados serão responsáveis por atualizar conjuntos de dados e registrar o resultado das operações.

As integrações deverão considerar:

- Paginação e processamento em lotes.
- Timeouts e tratamento de falhas.
- Limites de requisições.
- Tentativas controladas e backoff.
- Idempotência.
- Normalização dos formatos recebidos.
- Identificadores oficiais.
- Registro de origem e atualização.
- Tratamento de informações ausentes ou inconsistentes.

As informações não deverão ser apresentadas como atualizadas em tempo real quando dependerem de sincronização periódica.

---

## 7. Autenticação e autorização

A plataforma terá acesso público como comportamento padrão.

A autenticação será utilizada exclusivamente para funcionalidades pessoais, como favoritos e acompanhamentos.

### Tecnologias e protocolos

- OAuth 2.0.
- OpenID Connect.
- Authorization Code Flow com PKCE.
- Authlib.
- Sessões controladas pelo backend.

O fluxo previsto utilizará um provedor compatível com OpenID Connect, inicialmente considerando o Google.

A API será responsável por validar a identidade, gerenciar sessões e proteger endpoints autenticados.

A implementação deverá considerar cookies `HttpOnly`, `Secure` e `SameSite`, proteção CSRF, validação de tokens e configuração adequada de origens permitidas.

Dados públicos permanecerão acessíveis sem login.

---

## 8. Banco de dados e persistência

O PostgreSQL será responsável por armazenar tanto informações sincronizadas quanto dados específicos da aplicação.

### Grupos de dados planejados

**Dados políticos:** parlamentares, partidos, proposições, votações e registros de votos.

**Transparência:** despesas e categorias de gastos.

**Indicadores:** localidades, indicadores e séries históricas.

**Usuários:** contas, identidades externas e acompanhamentos.

**Integrações:** histórico de sincronizações e referências às fontes oficiais.

### Diretrizes de persistência

- Garantir integridade referencial.
- Utilizar restrições de unicidade quando apropriadas.
- Preservar identificadores de origem.
- Controlar transações e alterações de dados.
- Versionar mudanças de esquema com Alembic.
- Implementar índices conforme os padrões de consulta.
- Evitar duplicação durante sincronizações.
- Distinguir ausência de informação de valores efetivamente iguais a zero.

A modelagem será refinada durante a implementação dos módulos.

---

## 9. Estrutura planejada do repositório

```text
pauta-publica/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── pages/
│   │   ├── features/
│   │   │   ├── parlamentares/
│   │   │   ├── proposicoes/
│   │   │   ├── votacoes/
│   │   │   ├── despesas/
│   │   │   ├── indicadores/
│   │   │   ├── autenticacao/
│   │   │   └── acompanhamentos/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── stores/
│   │   ├── lib/
│   │   ├── types/
│   │   └── assets/
│   ├── tests/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   └── pauta_publica/
│   │       ├── core/
│   │       ├── api/
│   │       ├── modules/
│   │       │   ├── parlamentares/
│   │       │   ├── proposicoes/
│   │       │   ├── votacoes/
│   │       │   ├── despesas/
│   │       │   ├── indicadores/
│   │       │   ├── usuarios/
│   │       │   ├── autenticacao/
│   │       │   └── acompanhamentos/
│   │       ├── integrations/
│   │       │   ├── camara/
│   │       │   ├── senado/
│   │       │   ├── transparencia/
│   │       │   └── ibge/
│   │       ├── jobs/
│   │       └── main.py
│   ├── migrations/
│   ├── tests/
│   ├── pyproject.toml
│   ├── uv.lock
│   └── .python-version
│
├── infra/
│   └── docker/
│
├── docs/
│   ├── architecture/
│   ├── api/
│   └── decisions/
│
├── .github/
│   └── workflows/
│
├── .husky/
│   ├── pre-commit
│   └── commit-msg
│
├── .gitignore
├── .env.example
├── commitlint.config.cjs
├── lint-staged.config.mjs
├── release.config.cjs
├── compose.yaml
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

Esta é a organização arquitetural pretendida. Os diretórios serão introduzidos conforme as necessidades de implementação.

---

## 10. Estratégia de testes

O projeto utilizará testes automatizados como parte do processo de desenvolvimento.

### Backend

- **pytest:** testes unitários e de integração.
- **pytest-asyncio:** testes de código assíncrono.
- **HTTPX:** testes da API FastAPI e de clientes HTTP.
- **pytest-cov:** análise de cobertura.

Os testes unitários poderão ficar próximos aos módulos. Testes de integração, contratos e fixtures compartilhadas ficarão em `backend/tests/`.

### Frontend

- **Vitest:** testes unitários.
- **Vue Test Utils:** testes de componentes.
- **vue-tsc:** verificação de tipos.
- **Playwright:** testes end-to-end de fluxos críticos.

Os testes unitários poderão ficar próximos às funcionalidades. Testes de integração e E2E serão centralizados em `frontend/tests/`.

### Diretrizes

- Evitar dependência de APIs públicas durante testes unitários.
- Utilizar mocks e fixtures para respostas externas.
- Testar regras de negócio independentemente da camada HTTP.
- Verificar cenários de erro e indisponibilidade.
- Executar testes de integração com banco isolado.
- Priorizar testes úteis, estáveis e reproduzíveis.
- Evitar executar testes E2E indiscriminadamente.

---

## 11. Qualidade de código e automação

O projeto utiliza ferramentas para padronizar o código e automatizar verificações de qualidade.

### Pre-commit

O Husky e o lint-staged serão responsáveis por executar verificações nos arquivos preparados para commit.

**Frontend:**

- ESLint.
- Prettier.

**Backend:**

- Ruff Check.
- Ruff Format.
- Pyright, quando configurado como verificação condicional.

Testes completos e verificações de maior custo ficarão preferencialmente no CI.

### Conventional Commits

As mensagens de commit seguirão o padrão Conventional Commits, com validação pelo Commitlint.

Exemplos:

```bash
feat: adiciona consulta de parlamentares
fix: corrige filtros de proposicoes
test: adiciona testes de integracao
refactor: reorganiza servicos legislativos
docs: atualiza documentacao da arquitetura
chore: configura ferramentas de qualidade
```

### Versionamento e releases

O semantic-release será utilizado para automatizar o versionamento semântico do projeto.

O processo previsto inclui:

- Análise do histórico de commits.
- Determinação automática da próxima versão.
- Criação de tags Git.
- Geração de notas de release.
- Publicação de releases no GitHub.

Inicialmente será utilizado um versionamento único para o monorepo.

A publicação automática ocorrerá somente após a configuração e validação do pipeline de integração contínua.

---

## 12. Desenvolvimento local

O repositório utiliza dois gerenciadores de dependências independentes:

- **pnpm:** frontend e ferramentas compartilhadas do monorepo.
- **uv:** backend Python.

### Pré-requisitos previstos

- Git.
- Node.js compatível com as dependências instaladas.
- pnpm.
- Python na versão definida em `backend/.python-version`.
- uv.
- Docker e Docker Compose, para o ambiente conteinerizado.

### Instalar dependências JavaScript

Na raiz do projeto:

```bash
pnpm install
```

### Instalar dependências Python

```bash
cd backend
uv sync
```

### Executar o frontend

```bash
pnpm --filter ./frontend dev
```

### Executar o backend

Após configurar o pacote Python e o ponto de entrada FastAPI:

```bash
cd backend
uv run uvicorn pauta_publica.main:app --reload
```

### Verificações de qualidade

Frontend:

```bash
pnpm --filter ./frontend lint
pnpm --filter ./frontend typecheck
pnpm --filter ./frontend test
```

Backend:

```bash
cd backend
uv run ruff check .
uv run ruff format --check .
uv run pyright
uv run pytest
```

Esses comandos dependem da conclusão das respectivas configurações e scripts.

### Docker Compose

Está prevista a execução integrada de frontend, backend e PostgreSQL:

```bash
docker compose up --build
```

O uso do Compose dependerá da implementação dos Dockerfiles, serviços e variáveis de ambiente.

---

## 13. Roadmap

O desenvolvimento será incremental, com entregas funcionais e aumento progressivo da complexidade.

- [ ] **Fase 1 — Fundação técnica**
  - [ ] Concluir configuração do monorepo.
  - [ ] Configurar aplicação FastAPI.
  - [ ] Configurar Vue Router e estrutura frontend.
  - [ ] Integrar PostgreSQL e Alembic.
  - [ ] Configurar Docker Compose.
  - [ ] Consolidar ferramentas de qualidade e CI.

- [ ] **Fase 2 — Câmara dos Deputados**
  - [ ] Implementar cliente da API da Câmara.
  - [ ] Modelar dados de parlamentares.
  - [ ] Implementar sincronização inicial.
  - [ ] Desenvolver endpoints de consulta.
  - [ ] Criar pesquisa e perfis no frontend.

- [ ] **Fase 3 — Atividade legislativa**
  - [ ] Implementar proposições.
  - [ ] Implementar tramitação e votações.
  - [ ] Integrar informações do Senado.
  - [ ] Desenvolver filtros e consultas.
  - [ ] Criar explicações sobre processos legislativos.

- [ ] **Fase 4 — Usuários e acompanhamentos**
  - [ ] Implementar autenticação OIDC.
  - [ ] Configurar sessões e autorização.
  - [ ] Implementar favoritos.
  - [ ] Permitir acompanhamento de proposições e parlamentares.

- [ ] **Fase 5 — Transparência e indicadores**
  - [ ] Integrar o Portal da Transparência.
  - [ ] Integrar IBGE/SIDRA.
  - [ ] Implementar gráficos interativos.
  - [ ] Desenvolver indicadores e séries históricas.
  - [ ] Melhorar a contextualização dos dados.

- [ ] **Fase 6 — Consolidação**
  - [ ] Ampliar os testes automatizados.
  - [ ] Validar acessibilidade.
  - [ ] Otimizar consultas e sincronizações.
  - [ ] Concluir documentação técnica.
  - [ ] Configurar deploy.
  - [ ] Automatizar releases.

Os itens serão marcados conforme forem efetivamente concluídos e validados.

---

## 14. Decisões arquiteturais

### Monólito modular em vez de microsserviços

A separação em domínios permite organizar e evoluir o sistema sem introduzir complexidade operacional desnecessária.

### Organização por funcionalidades

A proximidade entre os arquivos relacionados a uma funcionalidade facilita manutenção, testes e evolução do código.

### API própria como intermediária

O frontend não dependerá diretamente dos formatos e comportamentos das APIs governamentais.

O backend ficará responsável por normalização, persistência, tratamento de erros e exposição de contratos consistentes.

### Sincronização híbrida

Nem todos os dados precisam ser consultados em tempo real ou armazenados antecipadamente.

A combinação de consultas sob demanda com sincronização periódica busca equilibrar desempenho, atualidade e consumo de recursos.

### PostgreSQL como persistência principal

O uso de um único banco relacional é suficiente para as necessidades iniciais e simplifica o gerenciamento de dados.

### Autenticação opcional

A navegação pública não exigirá login. Contas serão reservadas a funcionalidades personalizadas.

### Dependências adicionais conforme necessidade

Redis, sistemas de filas, serviços distribuídos e outras tecnologias poderão ser avaliados futuramente, mas não serão introduzidos sem uma necessidade concreta.

### Qualidade automatizada sem sobrecarga

Verificações rápidas serão executadas antes dos commits. Testes completos e verificações mais custosas serão executados no CI.

---

## 15. Limitações e responsabilidades

O Pauta Pública é uma iniciativa independente, sem vínculo institucional ou endosso dos órgãos governamentais cujos dados poderão ser utilizados.

As informações serão provenientes de fontes públicas identificadas, respeitando suas condições de uso.

A disponibilidade e atualização dos dados dependerão das respectivas fontes.

A plataforma deverá diferenciar informações oficiais, interpretações explicativas e eventuais dados derivados.

O conteúdo apresentado terá finalidade informativa e educativa, não constituindo orientação jurídica ou recomendação político-partidária.

---

## 16. Documentação e evolução

A documentação técnica será desenvolvida progressivamente, acompanhando a implementação.

Materiais previstos:

- Descrição da arquitetura.
- Contratos da API.
- Modelo de dados.
- Fluxos de autenticação.
- Estratégias de sincronização.
- Decisões arquiteturais (ADRs).
- Instruções de desenvolvimento e deploy.
- Referências das fontes públicas utilizadas.

A evolução do projeto priorizará código compreensível, decisões justificadas, testes relevantes e funcionalidades que entreguem utilidade real.

---

## 17. Licença

A licença de distribuição do projeto ainda será definida.

Até que uma licença seja explicitamente adicionada ao repositório, a disponibilização pública do código não implica autorização geral para sua reutilização, modificação ou redistribuição.

---

**Pauta Pública — Política simples. Informação para todos.**

_Um projeto de tecnologia cívica, aprendizado Full Stack e democratização do acesso à informação política brasileira._

### Sincronizacao e versionamento

Execute os commits nas worktrees isoladas usando Conventional Commits e depois rode
pnpm sync (ou pnpm sync:frontend / pnpm sync:backend). A integracao usa o mesmo
commit-analyzer do semantic-release para classificar os commits desde base/frontend
ou base/backend. A mensagem registra os hashes e assuntos originais.

- feat: minor; fix e perf: patch; BREAKING CHANGE ou !: major.
- docs, refactor, style, test, build, ci e chore: sem release por padrao.
- Em um lote, prevalece o maior impacto; workflows exclusivos nao sao integrados.
- Sem diferenca de conteudo, nao e criado um commit de integracao.

A integracao nao publica releases. A publicacao continua restrita a main.
Para testar a classificacao, execute pnpm test:sync na raiz.
