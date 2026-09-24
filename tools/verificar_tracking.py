#!/usr/bin/env python3
"""
Guarda do tracking do Desapego de Uma Vez.

Por que isto existe
-------------------
Este site e HTML estatico servido direto pela branch `gh-pages`. Nao ha build, nao ha
partial compartilhado: cada versao da pagina e um `index.html` inteiro e independente.
Em 19/09/2026 a v3 virou a home por uma copia de arquivo; o arquivo novo nao levava o
snippet do Microsoft Clarity e a home ficou 46h sem gravar nada -- justamente no dia de
maior volume do lancamento. Este script existe pra isso nao acontecer de novo.

Modos
-----
  python3 tools/verificar_tracking.py               # confere os arquivos do repositorio
  python3 tools/verificar_tracking.py --publicado   # confere o HTML servido em producao

Sai com codigo 1 se qualquer pagina obrigatoria estiver sem tracking.
"""
import argparse, glob, os, re, sys, urllib.request

CLARITY_PROJECT = "ykg64oqhg1"
GA4_ID          = "G-PS60JZBFM7"
META_PIXEL      = "1371442984885022"

# Paginas que precisam do conjunto completo de tracking.
OBRIGATORIAS = ["index.html", "v2/index.html", "v3/index.html"]

# Paginas conscientemente fora da regra, com o motivo.
ISENTAS = {
    "en/index.html":     "stub de redirect pro dominio em ingles; nao e pagina de conteudo",
    "antiga/index.html": "pagina React arquivada, fora do funil e sem trafego",
}

URLS_PUBLICADAS = {
    "index.html":    "https://desapego.alquimiaascensional.com/",
    "v2/index.html": "https://desapego.alquimiaascensional.com/v2/",
    "v3/index.html": "https://desapego.alquimiaascensional.com/v3/",
}

def checar(nome, html):
    """Devolve a lista de problemas encontrados nesse HTML."""
    problemas = []

    # O snippet do Clarity monta a URL concatenando em runtime, entao procurar por
    # "clarity.ms/tag/<id>" NAO funciona. Tem que procurar o loader e o project id.
    tem_loader = 'clarity.ms/tag/' in html or 'clarity.ms/tag/"+i' in html
    tem_id     = CLARITY_PROJECT in html
    if not (tem_loader and tem_id):
        problemas.append(f"Clarity ausente ou com project id errado (esperado {CLARITY_PROJECT})")
    else:
        # O tag precisa estar no inicio do <head>: se algo acima dele quebrar, a sessao
        # nao e gravada. Exigimos que ele venha antes do GA4 e do pixel.
        pos_clarity = html.find(CLARITY_PROJECT)
        pos_ga4     = html.find(GA4_ID)
        pos_pixel   = html.find(META_PIXEL)
        for rotulo, pos in (("GA4", pos_ga4), ("Meta Pixel", pos_pixel)):
            if pos != -1 and pos < pos_clarity:
                problemas.append(f"Clarity aparece DEPOIS do {rotulo}; ele tem que ser o primeiro do <head>")
        m = re.search(r"<head[^>]*>", html, re.I)
        if m and pos_clarity - m.end() > 400:
            problemas.append("Clarity nao esta logo no inicio do <head>")

    if GA4_ID not in html:
        problemas.append(f"GA4 ausente (esperado {GA4_ID})")
    if META_PIXEL not in html:
        problemas.append(f"Meta Pixel ausente (esperado {META_PIXEL})")

    # Marcador de versao de tracking: serve pra segmentar sessoes antes/depois de cada
    # mudanca. Sem ele, uma analise nao consegue separar as coortes.
    if 'tracking_rev' not in html:
        problemas.append('tag customizada tracking_rev ausente (clarity("set","tracking_rev",...))')

    return problemas

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--publicado", action="store_true",
                    help="baixa as URLs de producao em vez de ler os arquivos locais")
    args = ap.parse_args()

    falhou = False
    print("Conferindo tracking:", "producao" if args.publicado else "arquivos do repositorio")
    print()

    for nome in OBRIGATORIAS:
        if args.publicado:
            url = URLS_PUBLICADAS[nome]
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "guarda-tracking-alquimia"})
                html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
            except Exception as e:
                print(f"  FALHOU  {url}  -- nao consegui baixar: {e}")
                falhou = True
                continue
            origem = url
        else:
            if not os.path.exists(nome):
                print(f"  FALHOU  {nome}  -- arquivo obrigatorio nao existe")
                falhou = True
                continue
            html = open(nome, encoding="utf-8").read()
            origem = nome

        problemas = checar(nome, html)
        if problemas:
            falhou = True
            print(f"  FALHOU  {origem}")
            for p in problemas:
                print(f"            - {p}")
        else:
            print(f"  ok      {origem}")

    # Qualquer index.html novo que apareca no repo e que nao esteja nem na lista de
    # obrigatorias nem na de isentas e um ponto cego: falha e obriga a decidir.
    if not args.publicado:
        todos = sorted(p for p in glob.glob("**/index.html", recursive=True)
                       if not p.startswith(".github"))
        desconhecidos = [p for p in todos if p not in OBRIGATORIAS and p not in ISENTAS]
        if desconhecidos:
            falhou = True
            print()
            print("  FALHOU  pagina(s) nova(s) que ninguem classificou:")
            for p in desconhecidos:
                print(f"            - {p}")
            print("          Edite tools/verificar_tracking.py: ou entra em OBRIGATORIAS")
            print("          (e leva o tracking), ou entra em ISENTAS com o motivo escrito.")

    print()
    if falhou:
        print("RESULTADO: tracking quebrado. Nao publique assim.")
        print("Conserto: ../ferramentas/instalar_clarity.sh " + CLARITY_PROJECT + " <arquivo.html>")
        return 1
    print("RESULTADO: ok, todas as paginas obrigatorias tem Clarity + GA4 + Pixel.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
