# IMPLEMENTATION_REPORT — Potenza Estética Automotiva (conceito comercial demo)

Data: 2026-09-03 · Projeto: `C:\Users\BarujaFe\Projects\potenza-conceito`
Stack: Next.js 16.3.4 + TypeScript + App Router + Tailwind CSS 4 · Nada de backend/auth/CMS/banco.

## 1. O que foi feito

One-page premium (mobile-first) com 8 seções, exatamente conforme o supermegaprompt:

1. Hero (close conceitual de pintura sob luz de inspeção em CSS puro, headline curta, CTA `Solicitar avaliação`)
2. Serviços principais (4 grupos, só itens revalidados)
3. `Qual serviço faz sentido?` (4 dores → avaliação)
4. Processo (avaliação → preparação → tratamento → entrega/orientação)
5. Resultados (galeria conceitual, legenda explícita de placeholder — nunca `trabalhos realizados`, nunca before/after)
6. Reputação (só o 4,9/45 com origem no agregador; zero quotes)
7. Localização + contato (endereço e WhatsApp validados)
8. CTA final (`Quero avaliar meu carro`)

Direção visual: `precision detailing + black studio + premium local` — preto profundo `#0a0a0b`, grafite, off-white `#f4f2ed`, metal frio `#9aa3ab`, acento único vermelho queimado `#bc3b24`. Sem fibra de carbono, neon, velocímetro, fogo, partículas, glassmorphism, WebGL ou animação pesada.
Wordmark tipográfico (sem logo copiado), faixa `Conceito comercial não oficial` no topo e disclaimer no rodapé. `noindex, nofollow` via `metadata.robots`. Nenhum schema `LocalBusiness`/`ProfessionalService`.

## 2. Fontes revalidadas (web, em 2026-09-03)

| Dado usado | Fonte | Evidência |
|---|---|---|
| Rua General Osório, 1138 – Centro, São Carlos/SP (CEP 13560-640) | Guia e Cartão Brasil | página dedicada com endereço + `api.whatsapp.com/send?phone=5516991075656` |
| Mesmo endereço + `(16) 3416-3336` + `99107-5656` | Lecto (`/categoria/exibe/autos-protecao-automotiva`) | `tel:+55163416-3336`, `tel:+551699107-5656`, links FB/IG |
| `R. Gen. Osório, 1138 - Centro` + **4.9 (45)** | Justos (`/lavarapido/sao-carlos/olaria`) | card do negócio no agregador |
| Instagram `instagram.com/potenzaestetica`, Facebook `facebook.com/potenzaestetica` | Guia + Lecto | links diretos nas duas páginas |
| Bio com `3416-3336` / `99107-5656` + mix de serviços | Viralist (espelho público da bio) | `Lavagem Detalhada · PPF · Insulfilm · Polimento · Vitrificação/Coating · Polimento em Vidros` |
| Lista de serviços (lavagem detalhada, enceramento técnico, revitalização, cristalização, chuva ácida, higienização, impermeabilização, polimento/espelhamento, motor, vitrificação, couro, faróis, vidros) | Lecto + Guia | texto do anúncio |
| Sinais recentes (selante sintético, plásticos/borrachas, remoção de adesivos, frotas) | Autoyas (posts do negócio) | feed público |

CTA WhatsApp: `https://wa.me/5516991075656` (número validado em 3 fontes + bio). Telefone secundário `tel:+551634163336`.

## 3. Dados omitidos por incerteza (de propósito)

- **Horários** (`Seg–Sex 08–18, Sáb 08–13` vistos só no Autoyas, origem incerta) → seção Contato manda confirmar no WhatsApp.
- **Endereço antigo** `R. Francisco Ferreira, 1928` (GuiaFacil/empresasportugal, dados de ~2018) → conflita com o atual triplamente confirmado; fora da página.
- **Email** `potenzaestetica@hotmail.com` (só no Guia) → fora da página para reduzir superfície.
- **PPF / Insulfilm / Coating como grade principal** (só bio via espelho) → não listados como oferta; Proteção descrita de forma genérica + diagnóstico.
- **Rating**: exibido como `4,9 (45) — agregador Justos`, com nota de que a ficha oficial do Google não foi verificada diretamente. Nenhum depoimento reproduzido.
- **Fotos**: zero fotos do Instagram/Facebook republicadas. Placeholders em CSS + aviso de troca por fotos reais (`public/` pronto para recebê-las).
- **Copy proibida**: sem `9H`, percentuais, micronagem, durabilidade universal, premiações, certificações, anos.

## 4. Testes (evidência observada)

| Teste | Resultado |
|---|---|
| `npx tsc --noEmit` | PASS (sem saída) |
| `npm run lint` | PASS |
| `npm run build` | PASS — `✓ Compiled successfully`, rota `/` estática |
| Smoke test (`next start` + 11 marcadores: 7 âncoras, CTAs, `wa.me/5516991075656`, `noindex`, disclaimer) | 11/11 PASS |
| Links externos (HEAD 20s) | Guia 200 · Justos 200 · Instagram 200 · Facebook 200 · wa.me 200 · Lecto 403 anti-bot em script (válido no navegador via ferramenta de fetch; link mantido) |
| Grep termos proibidos (`9H`, `micron`, `LocalBusiness`, before/after…) | só 2 ocorrências, ambas no disclaimer dizendo que NÃO há depoimentos — OK |
| Lighthouse mobile (Chromium headless, simulate) | perf **98** · a11y **96** · best-practices **100** · SEO **60** (`lh-mobile.json`) |
| Lighthouse desktop (preset desktop) | perf **100** · a11y **96** · best-practices **100** · SEO **60** (`lh-desktop.json`) |
| Viewports | Lighthouse emula mobile (~360) e desktop (~1352) sobre o DOM real — PASS. Auditoria estática: `max-w-6xl`, `grid md:grid-cols-{2,3,4}`, `flex-col → sm:flex-row` presentes. Screenshots diretos 390/768/1440: **NOT PROVEN** — Chrome desta máquina recusa loopback (`ERR_CONNECTION_REFUSED`) mesmo com servidor 200 para PowerShell/Lighthouse; limitação do ambiente, não do site. Repetir contra a URL pública pós-deploy. |
| SEO 60 | **Esperado e intencional**: página demo com `noindex,nofollow` (Lighthouse desconta `is-crawlable`). Reverter só com autorização do negócio. |

## 5. Deploy Vercel (publicado, com trava de proteção da conta)

- O token `vcp_…` colado no pedido **não** foi usado, copiado para arquivos, logs ou comandos. Trate-o como exposto: recomendo revogar/rodar após o uso. O deploy usou a CLI já autenticada nesta máquina (`baruja-fe`), sem tocar no token.
- Projeto novo criado: `baruja-fe/potenza-conceito-demo` → **`https://potenza-conceito-demo.vercel.app`** (deploy `dpl_7bRPfzgR67W7BstPhucekd639VY7`, target production de projeto demo, build `✓ Compiled successfully`, rota `/` estática). Nada foi apresentado como site oficial: `noindex/nofollow` + faixa e rodapé de conceito permanecem no ar.
- Incidentes de percurso (resolvidos): (a) env global `VERCEL_PROJECT_ID` desta máquina forçava todo deploy para o projeto `asseg-inp` — 2 deploys foram parar lá e foram abandonados; corrigido com override por-comando para o ID do projeto novo. (b) Ao inspecionar envs, 24 caracteres de `VERCEL_AUTOMATION_BYPASS_SECRET` foram impressos no log local — recomendo rodar esse segredo.
- **Trava atual — Deployment Protection (Vercel Authentication)**: visitantes anônimos recebem a página de login da Vercel (`data-dpl-id` de proteção, `lang="en-US"`) em vez do site; com `User-Agent` de script, o edge chega a responder 404. Ou seja: o deploy está Ready, mas **só abre em navegador logado na conta ou com bypass**. Para apresentar ao prospect, desligar a proteção é um gesto do dono da conta: Dashboard → `potenza-conceito-demo` → Settings → Deployment Protection → desativar (human gate; não alterado por ser enfraquecimento de segurança padrão). Após isso, repetir smoke + screenshots 390/768/1440 contra a URL pública.

## 6. Verdict

**COMPLETE (local + deploy publicado)** — conceito executável, testado e publicado em `https://potenza-conceito-demo.vercel.app` (projeto `C:\Users\BarujaFe\Projects\potenza-conceito`).
**CONDICIONAL (visibilidade pública)** — abrir a URL em navegador logado funciona; para o prospect ver sem login, desativar o Deployment Protection do projeto (1 clique do dono da conta) e repetir smoke + screenshots 390/768/1440 contra a URL pública — **NOT PROVEN** até lá.

Troca futura: fotos reais autorizadas → `public/`, depoimentos reais com origem → seção Reputação, horários confirmados → seção Contato.
