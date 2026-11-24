param([ValidateSet('status','doctor','check','fix','update','sync','maintenance')][string]$Mode='status')
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
$root=(Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$parent=Split-Path $root -Parent
Set-Location $root
function Run($exe,[string[]]$arguments){
 & $exe @arguments
 if($LASTEXITCODE -ne 0){throw "$exe failed ($LASTEXITCODE): $arguments"}
}
function Status {
 foreach($c in @('develop','frontend','backend')){
  $p=if($c -eq 'develop'){$root}else{Join-Path $parent $c}
  Write-Host "=== $c ==="
  Run git @('-C',$p,'status','-sb')
 }
 Run git @('branch','-vv')
}
function Doctor {
 Status
 foreach($c in @('frontend','backend')){
  Run git @('rev-parse','--verify',"refs/heads/base/$c")
  Run git @('diff','--exit-code',"develop:$c","refs/heads/base/$c","--",'.',':(exclude).github/workflows/**')
  Run git @('merge-base','--is-ancestor',"refs/heads/base/$c","refs/heads/$c")
  Run git @('diff','--stat',"develop:$c","refs/heads/$c",'--','.',':(exclude).github/workflows/**')
 }
}
function Check {
 Run pnpm @('--dir','frontend','exec','eslint','.')
 Run pnpm @('--dir','frontend','exec','prettier','--check','src/**/*.{js,jsx,ts,tsx,vue}')
 Run pnpm @('--dir','frontend','build')
 Run pnpm @('--dir','frontend','exec','vitest','run','--passWithNoTests')
 Run uv @('run','--project','backend','ruff','check','backend')
 Run uv @('run','--project','backend','ruff','format','--check','backend')
 Push-Location backend
 try {
  Run uv @('run','pyright')
  if(Get-ChildItem tests -Recurse -Filter 'test_*.py' -File){Run uv @('run','pytest')}
 } finally {Pop-Location}
}
function Fix {
 foreach($c in @('frontend','backend')){
  Push-Location (Join-Path $parent $c)
  try {
   if($c -eq 'frontend'){Run pnpm @('exec','eslint','--fix','src');Run pnpm @('exec','prettier','--write','src')}
   else{Run uv @('run','ruff','check','--fix','.');Run uv @('run','ruff','format','.')}
  } finally {Pop-Location}
 }
}
function Update {
 Run git @('fetch','--all','--prune')
 foreach($c in @('develop','frontend','backend')){
  $p=if($c -eq 'develop'){$root}else{Join-Path $parent $c}
  if((git -C $p branch --show-current) -ne $c){throw "Wrong branch: $p"}
  if(git -C $p status --porcelain --untracked-files=no){throw "Uncommitted tracked files: $p"}
  Run git @('-C',$p,'merge','--ff-only',"origin/$c")
 }
}
function Sync {
 foreach($c in @('frontend','backend')){
  Run powershell @('-NoProfile','-ExecutionPolicy','Bypass','-File',(Join-Path $PSScriptRoot "sync-$c.ps1"))
 }
}
switch($Mode){
 'status'{Status}
 'doctor'{Doctor}
 'check'{Check}
 'fix'{Fix}
 'update'{Update}
 'sync'{Sync}
 'maintenance'{Doctor;Sync;Check}
}