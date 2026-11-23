# PLAN — Arquitetura de Releases e Desenvolvimento

> **Projeto:** Pauta Pública  
> **Estado da arquitetura:** worktrees e branches isoladas configuradas; sincronização inicial executada; CI aprovada e stack Docker iniciada localmente. Release v0.1.0 publicada com semantic-release (registro pós-publicação; usar somente após confirmar a tag e o GitHub Release).  
> **Roadmap:** proposta inicial sujeita à definição do backlog, escopos e critérios de aceite.

## 1. Objetivo

Permitir desenvolvimento independente de frontend e backend, com arquivos diretamente na raiz de cada workspace, preservando um **monorepo integrador** para testes conjuntos, infraestrutura e releases unificados.

Princípios:

- Uma única origem Git e três áreas locais de trabalho.
- Branches `frontend` e `backend` possuem árvores de arquivos próprias, extraídas com `git subtree split`.
- `develop` contém `frontend/` e `backend/` e é a **fonte de integração**.
- Integrações entre as árvores isoladas e o monorepo são **explícitas**, não merges convencionais.
- A versão do produto é publicada a partir do monorepo, nunca diretamente das branches isoladas.

## 2. Estrutura local verificada

```text
C:/Users/User/Desktop/
├── pauta-publica/              # develop: monorepo integrador
│   ├── frontend/
│   ├── backend/
│   ├── scripts/
│   │   ├── sync-frontend.ps1
│   │   └── sync-backend.ps1
│   ├── PLAN.md
│   └── configurações compartilhadas
├── frontend/                   # branch frontend: raiz do app
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
└── backend/                    # branch backend: raiz da API
    ├── src/
    ├── pyproject.toml
    ├── uv.lock
    └── ...
```

Worktrees confirmadas em 22/11/2026:

- `pauta-publica` — `develop` (`dc6870e` no momento da conferência).
- `frontend` — `frontend` (`9cd73f7`).
- `backend` — `backend` (`582a9e9`).

Os commits acima são **referências históricas**, não hashes que devam continuar fixos. `git worktree list` confirma o estado atual.

Não usar `git sparse-checkout` nesta arquitetura: as árvores já foram reorganizadas para que `src/` e os arquivos de configuração estejam na raiz de cada aplicação.

## 3. Modelo de branches

| Branch                       | Papel                                        | Observação                                                                  |
| ---------------------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| `develop`                    | Monorepo de integração                       | Contém `frontend/`, `backend/` e ferramentas compartilhadas                 |
| `frontend`                   | Linha de desenvolvimento da interface        | Arquivos da aplicação diretamente na raiz                                   |
| `backend`                    | Linha de desenvolvimento da API              | Arquivos da aplicação diretamente na raiz                                   |
| `base/frontend`              | Último commit do frontend sincronizado       | Referência de controle; atualizar **após** integração bem-sucedida          |
| `base/backend`               | Último commit do backend sincronizado        | Mesma regra do frontend                                                     |
| `feature/frontend/<assunto>` | Feature curta baseada em `frontend`          | PR/merge para `frontend`, não diretamente para `develop`                    |
| `feature/backend/<assunto>`  | Feature curta baseada em `backend`           | PR/merge para `backend`, não diretamente para `develop`                     |
| `release/vX.Y.Z`             | Preparação da versão, baseada em `develop`   | Congelamento de escopo e correções de estabilização                         |
| `main`                       | Histórico de versões estáveis                | **Verificar/criar**: não aparecia nas branches locais na última conferência |
| `hotfix/<assunto>`           | Correção urgente baseada na versão publicada | Integrar em `main` e reconciliar em `develop` e na branch do app afetado    |

As antigas `feature/frontend/setup` e `feature/backend/setup` são branches temporárias de preparação. Podem ser removidas **somente** depois de verificar que não contêm trabalho exclusivo.

**Importante:** não executar `git merge frontend` ou `git merge backend` diretamente em `develop`. Essas branches possuem raízes diferentes do monorepo. Os fluxos de PR também devem respeitar essa diferença.

## 4. Sincronização: das aplicações para o monorepo

Os scripts ficam em `pauta-publica/scripts/`:

| Script              | Origem            | Destino                       |
| ------------------- | ----------------- | ----------------------------- |
| `sync-frontend.ps1` | Branch `frontend` | Diretório `develop:frontend/` |
| `sync-backend.ps1`  | Branch `backend`  | Diretório `develop:backend/`  |

### Pré-requisitos

1. Estar no PowerShell, dentro de `C:\Users\User\Desktop\pauta-publica`, na branch `develop`.
2. Ter os dois scripts versionados no monorepo.
3. Ter **commits concluídos** na aplicação a sincronizar.
4. Manter limpas a worktree `develop` e a worktree da aplicação.
5. Manter existentes as referências `base/frontend` e `base/backend`.
6. Não alterar diretamente `develop/frontend/` ou `develop/backend/` sem plano de reconciliação.

### Comandos

```powershell
# Verificações
git worktree list
git status --short
git -C ../frontend status --short
git -C ../backend status --short

# Integrações independentes, executadas a partir da develop
.\scripts\sync-frontend.ps1
.\scripts\sync-backend.ps1

# Revisão antes de enviar
git log -3 --oneline
git status
git push origin develop
```

### Como os scripts funcionam

1. Verificam a branch atual, a presença das worktrees e os estados limpos.
2. Conferem que `base/<app>` é ancestral da respectiva branch isolada.
3. Impedem sincronização se a pasta integrada em `develop` divergiu da árvore da referência-base.
4. Produzem um patch da diferença `base/<app> → <app>`.
5. Validam e aplicam o patch dentro de `<app>/` na `develop`.
6. Criam um commit `chore(sync): integrate <app> changes`.
7. **Somente após o commit**, atualizam `base/<app>` para o commit sincronizado.

Não há `git push` automático. Em caso de erro de aplicação ou de hooks, **conferir `git status` antes de repetir**. Nunca avançar manualmente `base/*` sem confirmar a integração.

**Estado de validação:** scripts executados com sucesso na integração inicial das estruturas de diretórios. Depois foram feitas edições equivalentes manualmente em `develop` e nas branches independentes; as referências `base/*` requerem reconciliação antes da próxima sincronização.

### Limites do fluxo

- Não há sincronização inversa automática (`develop` → `frontend`/`backend`).
- Mudanças diretamente nas pastas de aplicações em `develop`, inclusive ajustes realizados durante uma release ou hotfix, exigem **reconciliação manual** com a branch isolada correspondente antes da próxima sincronização.
- Se duas alterações concorrentes modificarem os mesmos arquivos, parar e revisar o conflito; não utilizar `push --force`, `reset --hard` ou atualizar `base/*` como atalho.
- As referências `base/*` são locais até serem compartilhadas explicitamente. Para ambientes de CI ou novos desenvolvedores, será necessário definir como publicar, recuperar e proteger essas referências.
- Os scripts partem da localização de worktrees irmãs (`../frontend`, `../backend`). Adaptar os caminhos se o workspace mudar.

## 5. Fluxo de uma feature

1. Abrir issue com objetivo, arquivos afetados, critérios de aceite e dependências de API/UI.
2. Criar a branch curta **a partir da árvore correta**, por exemplo:
   ```powershell
   git -C ../frontend switch -c feature/frontend/tela-login frontend
   ```
3. Implementar, testar, commitar e abrir PR para a branch `frontend` (ou `backend`).
4. Depois do merge para a branch da aplicação, garantir que a worktree fixa volte à branch `frontend`/`backend` e esteja limpa.
5. Executar o script de sincronização correspondente a partir da `develop`.
6. Executar testes conjuntos do monorepo e verificar eventual impacto na outra aplicação.
7. Submeter `develop` para revisão conforme política do repositório; não publicar release sem validar a integração.

Para voltar à branch fixa, depois de concluir a feature, usar `git -C ../frontend switch frontend` (ou `backend`). Uma branch só pode estar ativa em uma worktree por vez, salvo operações específicas do Git.

## 6. Roadmap de releases (proposto)

### v0.1.0 — Fundação e fluxo de desenvolvimento (publicada)

- [x] Separar árvores de frontend e backend em worktrees sem diretórios duplicados.
- [x] Criar branches `frontend`, `backend`, `base/frontend` e `base/backend`.
- [x] Preparar scripts PowerShell de sincronização por aplicação.
- [x] Versionar `PLAN.md` e scripts em `develop`.
- [x] Testar os scripts com integração inicial de 11 arquivos `.gitkeep` no frontend e 17 no backend.
- [ ] Configurar proteção de branches e política de revisão de PRs (convenção de commits já utilizada).
- [x] Preparar e iniciar a stack Docker Compose (Vue/Vite, FastAPI e PostgreSQL), arquivos de ambiente e documentação.
- [x] Executar CI de frontend, backend e `develop`; todos aprovados conforme validação relatada.

**Evidências:** branches e worktrees configuradas; scripts de sincronização executados; GitHub Actions de frontend, backend e `develop` aprovados; Docker `hello-world` executado; PostgreSQL e backend saudáveis no Compose; frontend voltou a funcionar após reinstalação manual de dependências no volume.

**Marco de release:** `v0.1.0`, criado pelo `semantic-release` a partir de `main`, com tag Git, changelog e GitHub Release gerados automaticamente. Confirmar os links e o commit SHA antes de registrar evidências definitivas.

**Escopo entregue:** organização do monorepo e worktrees isoladas; scripts de sincronização inicial; CI de frontend/backend/develop; Docker Compose com PostgreSQL, FastAPI e Vue/Vite; health check básico.

**Limitações conhecidas:** funcionalidades de negócio, OAuth, migrações de banco, testes de comportamento e deploy de produção permanecem fora desta versão. A correção durável de dependências do frontend e a reconciliação das referências `base/*` devem ser verificadas e documentadas; se não tiverem sido concluídas antes da tag, registrá-las como dívida técnica da versão.

**Pós-publicação:** verificar `git tag -l v0.1.0`, o GitHub Release e o `CHANGELOG.md`; registrar o SHA exato da `main` e manter `develop` alinhada para próximas mudanças.

### v0.2.0 — Contrato e integração da API

- [ ] Definir convenções de endpoints, erros e respostas.
- [ ] Documentar contrato OpenAPI e sua evolução.
- [ ] Configurar a comunicação frontend ↔ backend por ambiente.
- [ ] Adicionar testes de integração e contrato.

**Aceite:** frontend consome a API com tratamento consistente de falhas, contratos documentados e testes passando.

### v0.3.0 — Autenticação e autorização

- [ ] Definir provedor e fluxo OAuth.
- [ ] Implementar sessão, expiração, logout e rotas protegidas.
- [ ] Aplicar validações e permissões no backend.
- [ ] Cobrir cenários de sucesso, falhas e segurança.

**Aceite:** autenticação ponta a ponta validada e controles de acesso testados.

### v0.4.0 — Primeira funcionalidade vertical

- [ ] Selecionar funcionalidade real do backlog.
- [ ] Implementar interface, API e persistência quando necessária.
- [ ] Tratar carregamento, vazio e erro.
- [ ] Adicionar testes do fluxo principal.

**Aceite:** funcionalidade utilizável em homologação de ponta a ponta.

### v1.0.0 — Primeiro release estável

- [ ] Concluir o escopo de MVP aprovado.
- [ ] Revisar segurança, logs, observabilidade, backup e recuperação conforme infraestrutura adotada.
- [ ] Validar testes de regressão e procedimentos de implantação/rollback.
- [ ] Publicar changelog e tag versionada.

**Aceite:** MVP aprovado, deploy reprodutível e sem defeitos bloqueantes conhecidos.

## 7. Processo de release com semantic-release

**Status em 22/11/2026:** `v0.1.0` **ainda não publicada**; não há branch `main` na listagem remota consultada. Não confundir branch preparatória com tag e GitHub Release. As dependências do frontend foram reparadas manualmente no volume Docker; automatizar essa recuperação antes de marcar a versão estável.

1. Confirmar escopo, dependências e critérios de aceite no backlog.
2. Sincronizar `frontend` e `backend` com `develop`.
3. Rodar checks de integração do monorepo e congelar alterações de escopo.
4. Quando necessário, criar `release/vX.Y.Z` a partir de `develop` para estabilização; no marco inicial pode-se promover o commit aprovado diretamente para `main`.
5. Corrigir apenas problemas de estabilização e registrar as mudanças.
6. Validar regressão, segurança, migrações e rollback.
7. Integrar o commit aprovado em `main` e executar `semantic-release` nessa branch. O semantic-release calcula a versão a partir de Conventional Commits e publica tag, changelog e GitHub Release; não criar manualmente tags de versão finais.
8. Retornar correções da release para `develop` **e reconciliá-las com as branches isoladas** afetadas antes de novas sincronizações.

**Cuidado:** merges de `release/*` e `main` são feitos no histórico do **monorepo**. O retorno das correções às branches isoladas não é um merge comum: é necessário adaptar os caminhos ou usar um procedimento de sincronização inversa ainda a definir.

## 8. Qualidade, versionamento e rastreabilidade

Usar SemVer (`MAJOR.MINOR.PATCH`), registrando incompatibilidades mesmo durante `0.x`.

Checklist de aceite de PR/release:

- [ ] Lint e formatação passam (`ESLint` e `Prettier` no frontend; `Ruff` no backend).
- [ ] Tipagem passa (TypeScript e `Pyright`, conforme configuração do projeto).
- [ ] Testes unitários, de integração e E2E relevantes passam.
- [ ] Contratos de API e mudanças de banco estão documentados.
- [ ] Nenhum segredo foi incluído no Git.
- [ ] Mudanças têm issue, descrição e evidências de validação.
- [ ] O procedimento de rollback está definido quando necessário.

## 9. Modelo de escopo por release

Para cada versão, registrar:

- **Objetivo:** valor entregue.
- **Incluído:** issues/PRs de frontend, backend, integração e infraestrutura.
- **Fora do escopo:** o que não será entregue.
- **Dependências:** APIs, provedor OAuth, banco, migrações e decisões.
- **Critérios de aceite:** checks técnicos e comportamento esperado.
- **Riscos e rollback:** condições de falha, reversão e responsáveis.
- **Status:** planejada / em desenvolvimento / em estabilização / publicada.

## 10. Release v0.1.0 — registro pós-publicação

> **Este documento é o registro pós-release. Somente o adote no repositório quando a execução do semantic-release tiver sido bem-sucedida e o GitHub Release `v0.1.0` estiver visível.**

| Campo                 | Registro                                                                             |
| --------------------- | ------------------------------------------------------------------------------------ |
| Versão                | `v0.1.0`                                                                             |
| Status                | Publicada após confirmação do GitHub Release                                         |
| Branch de publicação  | `main`                                                                               |
| Ferramenta de release | `semantic-release`                                                                   |
| Tag                   | `v0.1.0`                                                                             |
| Link da release       | `https://github.com/guilherme-o-lindo/Pauta-Publica/releases/tag/v0.1.0` (verificar) |
| Commit publicado      | Conferir `git rev-list -n 1 v0.1.0`                                                  |
| Data de publicação    | Consultar a data exibida no GitHub Release                                           |
| Tipo                  | Marco inicial de infraestrutura; sem deploy público                                  |

### Notas do release

- Monorepo central (`develop`) e áreas de trabalho frontend/backend independentes.
- Scripts de sincronização e convenção de branches.
- GitHub Actions para validação do código.
- Dockerfiles e Compose para PostgreSQL 17, FastAPI e Vue/Vite.
- Endpoint `/health` para a API.

### Após a v0.1.0

- [ ] Reconciliar referências `base/frontend` e `base/backend` sem descartes nem avanço indevido.
- [ ] Confirmar que o frontend instala dependências automaticamente em volume Docker novo.
- [ ] Definir uma estratégia de sincronização inversa da `develop` para as branches isoladas.
- [ ] Proteger `main` e definir política de merge e liberação de token do CI.
- [ ] Adicionar testes reais e critérios de cobertura para v0.2.0.
- [ ] Planejar conexão real FastAPI–PostgreSQL, migrações Alembic e contrato de API.
- [ ] Atualizar README com instalação limpa e procedimentos de recuperação.

## 11. Próximas versões

A `v0.2.0` prioriza contratos de API, integração entre frontend/backend e testes de integração. A `v0.3.0` aborda autenticação OAuth. A `v0.4.0` entrega a primeira funcionalidade vertical. A `v1.0.0` será o MVP estável, condicionado a escopo e critérios de aceite aprovados.
