# Sincroniza a branch isolada backend com backend/ na develop.
# Execute depois de COMMITAR as alteracoes de backend e dos scripts.
# Uso: .\scripts\sync-backend.ps1

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$component = 'backend'
$targetRef = 'refs/heads/backend'
$baseRef = 'refs/heads/base/backend'
$patchPath = $null

function Invoke-Git([string[]] $Arguments) {
    $output = & git @Arguments 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "git $($Arguments -join ' ') falhou: $($output -join [Environment]::NewLine)"
    }
    return $output
}

try {
    $repoRoot = (Invoke-Git -Arguments @('rev-parse', '--show-toplevel') | Select-Object -First 1).Trim()
    $branch = (Invoke-Git -Arguments @('-C', $repoRoot, 'branch', '--show-current') | Select-Object -First 1).Trim()
    if ($branch -ne 'develop') {
        throw "Execute a partir da worktree 'develop' (branch atual: '$branch')."
    }

    # Verifica inclusive arquivos novos nao rastreados para nao misturar mudancas.
    $mainStatus = @(Invoke-Git -Arguments @('-C', $repoRoot, 'status', '--porcelain', '--untracked-files=normal') | Where-Object { $_ })
    if ($mainStatus.Count -gt 0) {
        throw "A worktree develop nao esta limpa. Faça commit/stash antes de sincronizar: $($mainStatus -join '; ')"
    }

    $sourceRoot = Join-Path (Split-Path $repoRoot -Parent) $component
    if (-not (Test-Path -LiteralPath $sourceRoot -PathType Container)) {
        throw "Worktree de $component nao encontrada em: $sourceRoot"
    }
    $sourceBranch = (Invoke-Git -Arguments @('-C', $sourceRoot, 'branch', '--show-current') | Select-Object -First 1).Trim()
    if ($sourceBranch -ne $component) {
        throw "A worktree $sourceRoot deve estar na branch '$component' (atual: '$sourceBranch')."
    }
    $sourceStatus = @(Invoke-Git -Arguments @('-C', $sourceRoot, 'status', '--porcelain', '--untracked-files=normal') | Where-Object { $_ })
    if ($sourceStatus.Count -gt 0) {
        throw "A worktree $component tem alteracoes nao commitadas. Faça commit antes: $($sourceStatus -join '; ')"
    }

    $oldBase = (Invoke-Git -Arguments @('-C', $repoRoot, 'rev-parse', '--verify', $baseRef) | Select-Object -First 1).Trim()
    $target = (Invoke-Git -Arguments @('-C', $repoRoot, 'rev-parse', '--verify', $targetRef) | Select-Object -First 1).Trim()

    & git -C $repoRoot merge-base --is-ancestor $oldBase $target
    if ($LASTEXITCODE -ne 0) {
        throw "A branch '$component' foi reescrita ou divergiu de 'base/$component'. Revisao manual necessaria."
    }

    # Impede aplicar um patch sobre uma copia modificada diretamente na develop.
    $baseTree = (Invoke-Git -Arguments @('-C', $repoRoot, 'rev-parse', "$baseRef^{tree}") | Select-Object -First 1).Trim()
    $integratedTree = (Invoke-Git -Arguments @('-C', $repoRoot, 'rev-parse', "HEAD:$component") | Select-Object -First 1).Trim()
    if ($integratedTree -ne $baseTree) {
        throw "A pasta '$component/' na develop divergiu da ultima sincronizacao. Integre/reconcilie essas mudancas manualmente antes de continuar."
    }

    if ($oldBase -eq $target) {
        Write-Host "Nada a sincronizar: base/$component ja aponta para $component." -ForegroundColor Green
        exit 0
    }

    $patchPath = Join-Path ([IO.Path]::GetTempPath()) ("sync-$component-" + [guid]::NewGuid().ToString('N') + '.patch')
    & git -C $repoRoot diff --binary --full-index --no-ext-diff "--output=$patchPath" $oldBase $target --
    if ($LASTEXITCODE -ne 0) { throw 'Falha ao gerar patch Git.' }

    if ((Get-Item -LiteralPath $patchPath).Length -eq 0) {
        # Apenas commits sem mudanca de conteudo: seguro avancar a base.
        Invoke-Git -Arguments @('-C', $repoRoot, 'update-ref', $baseRef, $target, $oldBase) | Out-Null
        Write-Host "Sem diferencas de arquivos; base/$component atualizada." -ForegroundColor Green
        exit 0
    }

    & git -C $repoRoot apply --check --index "--directory=$component" -- $patchPath
    if ($LASTEXITCODE -ne 0) {
        throw "O patch nao pode ser aplicado com seguranca em '$component/'. Nenhum commit foi criado."
    }

    & git -C $repoRoot apply --index "--directory=$component" -- $patchPath
    if ($LASTEXITCODE -ne 0) {
        throw 'Falha ao aplicar patch. Confira git status; a base nao foi alterada.'
    }

    & git -C $repoRoot diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        # Arquivos identicos depois da aplicacao (caso incomum).
        Invoke-Git -Arguments @('-C', $repoRoot, 'update-ref', $baseRef, $target, $oldBase) | Out-Null
        Write-Host 'Nenhuma mudanca restante para commitar.' -ForegroundColor Green
        exit 0
    }
    if ($LASTEXITCODE -ne 1) { throw 'Nao foi possivel conferir o staging.' }

    & git -C $repoRoot commit -m "chore(sync): integrate $component changes"
    if ($LASTEXITCODE -ne 0) {
        throw 'Falha no commit (possivelmente hooks). Confira git status; a base NAO foi atualizada.'
    }

    # So avancamos a referencia apos o commit de integracao ter sido concluido.
    Invoke-Git -Arguments @('-C', $repoRoot, 'update-ref', $baseRef, $target, $oldBase) | Out-Null
    Write-Host "Sincronizacao de $component concluida. base/$component -> $target" -ForegroundColor Green
}
catch {
    Write-Error $_.Exception.Message
    exit 1
}
finally {
    if ($null -ne $patchPath -and (Test-Path -LiteralPath $patchPath)) {
        Remove-Item -LiteralPath $patchPath -Force
    }
}
