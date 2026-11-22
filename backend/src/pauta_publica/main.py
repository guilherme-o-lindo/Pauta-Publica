"""Aplicação FastAPI mínima para desenvolvimento local."""

from fastapi import FastAPI

app = FastAPI(title="Pauta Pública API", version="0.1.0")


@app.get("/health", tags=["health"])
def health() -> dict[str, str]:
    return {"status": "ok"}
