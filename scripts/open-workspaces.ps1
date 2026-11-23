$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$desktop = Split-Path $root -Parent

Write-Host ""
Write-Host "=== PAUTA PUBLICA ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "1 - Monorepo principal (develop)"
Write-Host "2 - Frontend (frontend)"
Write-Host "3 - Backend (backend)"
Write-Host "4 - Abrir todos"
Write-Host "0 - Sair"
Write-Host ""

$option = Read-Host "Escolha uma opcao"

switch ($option) {
    "1" { code -n $root }
    "2" { code -n (Join-Path $desktop "frontend") }
    "3" { code -n (Join-Path $desktop "backend") }
    "4" {
        code -n $root
        code -n (Join-Path $desktop "frontend")
        code -n (Join-Path $desktop "backend")
    }
    "0" { exit }
    default {
        Write-Host "Opcao invalida." -ForegroundColor Red
        exit 1
    }
}