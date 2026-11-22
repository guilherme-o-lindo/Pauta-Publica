# Docker de desenvolvimento — Pauta Pública

## Arquitetura

- `frontend`: Vue/Vite, `http://localhost:5173`.
- `backend`: FastAPI, `http://localhost:8000/docs` e `http://localhost:8000/health`.
- `db`: PostgreSQL, `127.0.0.1:5432`.

## Aplicação no repositório

Sua estrutura Git utiliza branches com raízes próprias:

1. Na worktree `Desktop/backend`, copie `backend/Dockerfile`, `backend/.dockerignore` e `backend/src/pauta_publica/main.py` deste pacote para `Dockerfile`, `.dockerignore` e `src/pauta_publica/main.py`. Commit e push na branch `backend`.
2. Na worktree `Desktop/frontend`, copie `frontend/Dockerfile` e `frontend/.dockerignore` para a raiz. Commit e push na branch `frontend`.
3. Na worktree integradora `Desktop/pauta-publica`, copie `compose.yaml`, `.env.example` e este README para a raiz.
4. Antes de sincronizar, deixe a develop limpa (commite os arquivos compartilhados); execute `scripts/sync-frontend.ps1` e `scripts/sync-backend.ps1`. Se houve alterações diretas às pastas `frontend/` ou `backend/` na develop, reconcilie primeiro.

**Atenção:** o Dockerfile do frontend utiliza o lockfile da **raiz do monorepo**. Não tente construí-lo isoladamente na worktree `frontend` sem adaptar o contexto. O Dockerfile do backend funciona a partir da raiz da worktree `backend`.

## Preparação e execução

No PowerShell, em `Desktop/pauta-publica`:

```powershell
Copy-Item .env.example .env
# Edite a senha no arquivo .env

docker compose config --quiet
docker compose up --build -d
docker compose ps
docker compose logs --tail=100 backend
```

Para encerrar: `docker compose down`. O volume do banco é preservado. `docker compose down -v` **apaga os dados do volume**: evite sem backup.

## Observações

- As imagens e dependências não foram testadas em uma execução real de Docker neste pacote; valide localmente.
- O frontend consultado tinha `src/main.ts` vazio: a aplicação Vue ainda precisa de uma entrada funcional.
- A API `main.py` neste pacote cria apenas um endpoint de saúde e docs automáticas; a conexão com PostgreSQL ainda não foi implementada.
- `VITE_API_URL` não configura CORS automaticamente. Quando o frontend começar a chamar a API no navegador, será necessário adicionar a política CORS no FastAPI.
- Não publique os serviços diretamente na internet com essa configuração de desenvolvimento.
- Uma mudança nas dependências do frontend requer rebuild (`docker compose build frontend`).
