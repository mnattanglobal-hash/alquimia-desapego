# Protecao do tracking — Desapego de Uma Vez

> Os dois workflows do GitHub Actions citados aqui (camadas 2 e 3) ainda **nao foram**
> instalados: o token usado no deploy de 24/09/2026 nao tinha o escopo `workflow`.
> Os arquivos estao prontos em `Desapego de Uma Vez/audit-clarity/technical/workflows/`
> no workspace. Ver a secao "Como instalar as camadas 2 e 3" no fim deste arquivo.

## O incidente que originou isto

Em **19/09/2026 12:27 BRT** a pagina v3 virou a home (commit `b859164`). O deploy foi uma
**copia de arquivo**: `v3/index.html` virou `index.html`. O snippet do Microsoft Clarity
morava dentro do arquivo da v2, nao num parcial compartilhado — entao a home nova nasceu
sem Clarity.

A home ficou **46 horas sem gravar nada**, de 19/09 12:27 ate 21/09 10:29. Perdeu-se
20/09 inteiro, o dia de maior volume do lancamento (495 visualizacoes de pagina pagas).
Ninguem percebeu na hora porque o Clarity continuava funcionando em `/v2/` e o painel
continuava mostrando sessoes.

**A causa raiz e a arquitetura:** site estatico, sem build, sem partial. Cada versao e um
`index.html` inteiro e independente, e o tracking vive duplicado dentro de cada um. Enquanto
for assim, toda copia de arquivo e uma chance de perder o tracking de novo.

## As camadas

| Camada | O que e | Onde vive | Pega o que |
|---|---|---|---|
| 1 | Tag do Clarity como **primeira coisa do `<head>`** de toda pagina obrigatoria | `index.html`, `v2/index.html`, `v3/index.html` | garante que a sessao e gravada mesmo se algo abaixo quebrar |
| 2 | **Guarda no push** — `guarda-tracking.yml` | branch `gh-pages` | tag removido, project id trocado, ordem errada no `<head>`, versao nova sem classificar |
| 3 | **Smoke test agendado** — `smoke-tracking.yml`, 2x por dia | branch `main` (obrigatorio: `schedule` so roda na branch padrao) | tracking que some por fora do repo — cache da Cloudflare, mudanca de branch do Pages, DNS, arquivo trocado na mao |
| 4 | **Script manual** — `tools/verificar_tracking.py --publicado` | qualquer maquina | conferencia antes/depois de deploy manual |

## Como usar

```bash
# antes de publicar, nos arquivos do repo
python3 tools/verificar_tracking.py

# depois de publicar, no que esta realmente no ar
python3 tools/verificar_tracking.py --publicado
```

Sai com codigo **1** se algo estiver errado, e diz qual pagina e qual problema.

## Quando criar uma versao nova da pagina (v4, v5...)

O script **falha de proposito** ao encontrar um `index.html` que nao esteja classificado.
Isso e o comportamento desejado: obriga a decidir. Edite `tools/verificar_tracking.py`:

- se a pagina vai receber trafego → adicione em `OBRIGATORIAS` **e** instale o tag:
  `ferramentas/instalar_clarity.sh ykg64oqhg1 v4/index.html`
- se nao vai (stub, redirect, arquivo morto) → adicione em `ISENTAS` **com o motivo escrito**.

## O que o script NAO garante

Ele confere o **HTML**. Nao confere se o Clarity esta de fato enviando dados
(`POST l.clarity.ms/collect → 204`), nem se o projeto certo esta recebendo. Isso continua
sendo verificacao de navegador. Ver `Desapego de Uma Vez/audit-clarity/COMO_REPETIR.md`.

## Marcador de versao

Toda mudanca de tracking deve bumpar a tag customizada:

```js
clarity("set","tracking_rev","AAAA-MM-DD_descricao-curta");
```

E o que permite separar coortes antes/depois nas analises. O script falha se ela sumir.
Valor atual: `2026-09-22_ic_so_na_hotmart`.

---

## Como instalar as camadas 2 e 3 (pendente)

O push de 24/09/2026 entregou as camadas **1** (tag no `<head>`) e **4** (script manual).
As camadas 2 e 3 sao workflows do GitHub Actions e o token do `gh` em uso nao tinha o
escopo `workflow`, entao o push delas foi recusado pelo proprio GitHub.

Para instalar, uma vez:

```bash
gh auth refresh -h github.com -s workflow
```

Depois, copiar os dois arquivos que estao em
`Desapego de Uma Vez/audit-clarity/technical/workflows/` do workspace:

- `guarda-tracking.yml` → para `.github/workflows/` na branch **gh-pages**
- `smoke-tracking.yml`  → para `.github/workflows/` na branch **main**

⚠️ **`smoke-tracking.yml` tem que ir para a `main`, nao para a `gh-pages`.** O GitHub so
executa workflows `on: schedule` a partir da **branch padrao** do repositorio. Um cron
commitado na gh-pages nunca dispara — e o erro silencioso mais comum nesse setup.
