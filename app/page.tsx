const WHATSAPP_URL =
  "https://wa.me/5516991075656?text=Ol%C3%A1!%20Quero%20avaliar%20meu%20carro%20com%20a%20Potenza.";
const PHONE_HREF = "tel:+551634163336";
const INSTAGRAM_URL = "https://www.instagram.com/potenzaestetica/";
const FACEBOOK_URL = "https://www.facebook.com/potenzaestetica/";
const RATING_SOURCE_URL = "https://justos.com.br/lavarapido/sao-carlos/olaria";
const MAP_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+General+Os%C3%B3rio+1138+Centro+S%C3%A3o+Carlos+SP";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9aa3ab]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#0a0a0b] text-[#f4f2ed]">
      {/* Barra de conceito demo */}
      <div className="bg-[#bc3b24] px-4 py-2 text-center text-xs font-medium text-white">
        Conceito comercial não oficial — página de demonstração, não é o site
        oficial do negócio.
      </div>

      <header className="sticky top-0 z-10 border-b hairline bg-[#0a0a0b]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#topo" className="leading-none">
            <span className="block text-lg font-bold tracking-[0.18em]">
              POTENZA
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.28em] text-[#9aa3ab]">
              Estética Automotiva
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#c9cdd2] md:flex">
            <a className="hover:text-white" href="#servicos">Serviços</a>
            <a className="hover:text-white" href="#qual-servico">Diagnóstico</a>
            <a className="hover:text-white" href="#processo">Processo</a>
            <a className="hover:text-white" href="#resultados">Resultados</a>
            <a className="hover:text-white" href="#contato">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#bc3b24] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#a3321e]"
          >
            Solicitar avaliação
          </a>
        </div>
      </header>

      <main id="topo" className="flex-1">
        {/* 1. HERO */}
        <section className="inspection-light border-b hairline">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <SectionLabel>São Carlos · SP — Centro</SectionLabel>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                O cuidado certo para o estado do seu carro.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#c9cdd2]">
                Lavagem detalhada, polimento, proteção e higienização com
                diagnóstico antes de qualquer proposta. Você entende o que o
                carro precisa — e por que vale investir.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#f4f2ed] px-7 py-3.5 text-center text-sm font-semibold text-[#0a0a0b] hover:bg-white"
                >
                  Solicitar avaliação
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border hairline px-7 py-3.5 text-center text-sm font-semibold text-[#f4f2ed] hover:border-white/40"
                >
                  Ver serviços
                </a>
              </div>
              <p className="mt-6 text-sm text-[#9aa3ab]">
                Atendimento pelo WhatsApp comercial ·{" "}
                <a className="underline" href={PHONE_HREF}>
                  (16) 3416-3336
                </a>
              </p>
            </div>
            <div
              aria-hidden="true"
              className="relative min-h-64 overflow-hidden rounded-2xl border hairline bg-gradient-to-b from-[#232427] to-[#0c0d0e] p-6"
            >
              <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="absolute inset-x-16 top-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="mt-16">
                <p className="text-xs uppercase tracking-[0.24em] text-[#9aa3ab]">
                  Luz de inspeção · pintura
                </p>
                <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-[#2c2e31] via-[#141517] to-black shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" />
                <div className="mt-3 h-1.5 w-3/4 rounded-full bg-white/70 blur-[1px]" />
                <p className="mt-4 text-sm text-[#9aa3ab]">
                  Imagem conceitual. Espaço reservado para fotografia real
                  autorizada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVIÇOS */}
        <section id="servicos" className="border-b hairline">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Serviços principais</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
              Poucos serviços, bem explicados.
            </h2>
            <p className="mt-3 max-w-2xl text-[#c9cdd2]">
              Agrupados a partir das informações públicas do negócio. O
              diagnóstico define o que faz sentido para o estado do seu veículo.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">Lavagem com cuidado</h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Lavagem detalhada, lavagem completa e lavagem de motor. Base
                  para qualquer avaliação de pintura e interior.
                </p>
              </article>
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">
                  Pintura e acabamento
                </h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Polimento e espelhamento, revitalização de pintura,
                  cristalização e enceramento técnico. Foco em acabamento e
                  uniformidade.
                </p>
              </article>
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">Proteção</h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Vitrificação e proteção com selante, condicionamento de
                  plásticos e borrachas. A indicação depende do uso e do estado
                  do veículo.
                </p>
              </article>
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">Interior e vidros</h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Higienização interna, hidratação de couro, limpeza e
                  impermeabilização de bancos e carpetes, higienização de
                  ar-condicionado, polimento de vidros e faróis e remoção de
                  chuva ácida.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 3. QUAL SERVIÇO */}
        <section id="qual-servico" className="border-b hairline bg-[#0e0f11]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Qual serviço faz sentido?</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
              Comece pelo problema, não pelo nome do serviço.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                {
                  t: "A pintura parece sem vida",
                  d: "Carro opaco, com marcas de uso e reflexo irregular. Avaliação de pintura e acabamento.",
                },
                {
                  t: "Interior com cheiro ou manchas",
                  d: "Bancos, carpetes e ar-condicionado pedem higienização e cuidado com os materiais.",
                },
                {
                  t: "Vidros e faróis comprometidos",
                  d: "Chuva ácida, farol amarelado ou vidro áspero. Diagnóstico de vidros e iluminação.",
                },
                {
                  t: "Quero proteger depois de tratar",
                  d: "Após o tratamento, avaliamos a proteção mais coerente com a sua rotina de uso.",
                },
              ].map((c) => (
                <article
                  key={c.t}
                  className="rounded-2xl border hairline bg-[#121315] p-6"
                >
                  <h3 className="text-lg font-semibold">{c.t}</h3>
                  <p className="mt-2 text-[#c9cdd2]">{c.d}</p>
                </article>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#bc3b24] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#a3321e]"
            >
              Descrever meu caso no WhatsApp
            </a>
          </div>
        </section>

        {/* 4. PROCESSO */}
        <section id="processo" className="border-b hairline">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Processo</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Diagnóstico antes da proposta.
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                {
                  n: "01",
                  t: "Avaliação",
                  d: "Olhamos o carro com você e registramos o estado atual.",
                },
                {
                  n: "02",
                  t: "Preparação",
                  d: "Lavagem e descontaminação com cuidado para não criar novas marcas.",
                },
                {
                  n: "03",
                  t: "Tratamento",
                  d: "Execução do serviço indicado, com acabamento revisado sob luz.",
                },
                {
                  n: "04",
                  t: "Entrega e orientação",
                  d: "Você recebe o carro, entende o que foi feito e como manter.",
                },
              ].map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border hairline bg-[#121315] p-6"
                >
                  <p className="text-sm font-bold tracking-widest text-[#bc3b24]">
                    {s.n}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-[#c9cdd2]">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. RESULTADOS */}
        <section id="resultados" className="border-b hairline bg-[#0e0f11]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Resultados</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
              Galeria conceitual.
            </h2>
            <p className="mt-3 max-w-2xl text-[#c9cdd2]">
              Enquanto não houver fotos reais autorizadas, usamos referências
              visuais. Nada aqui é apresentado como trabalho realizado.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { t: "Reflexo sob luz", d: "Espaço para close de pintura" },
                { t: "Interior cuidado", d: "Espaço para detalhe interno" },
                { t: "Acabamento", d: "Espaço para detalhe de roda e friso" },
              ].map((g) => (
                <figure
                  key={g.t}
                  className="overflow-hidden rounded-2xl border hairline bg-[#121315]"
                >
                  <div className="h-44 bg-gradient-to-br from-[#2a2c2f] via-[#151619] to-black" />
                  <figcaption className="p-5">
                    <p className="font-semibold">{g.t}</p>
                    <p className="mt-1 text-sm text-[#9aa3ab]">{g.d}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 6. REPUTAÇÃO */}
        <section id="reputacao" className="border-b hairline">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Reputação</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              O que dizem os agregadores.
            </h2>
            <div className="mt-8 max-w-2xl rounded-2xl border hairline bg-[#121315] p-6">
              <p className="text-4xl font-bold">
                4,9 <span className="text-lg font-medium text-[#9aa3ab]">/ 5</span>
              </p>
              <p className="mt-2 text-[#c9cdd2]">
                45 avaliações exibidas no agregador Justos para este endereço.
              </p>
              <p className="mt-3 text-sm text-[#9aa3ab]">
                Origem:{" "}
                <a
                  className="underline"
                  href={RATING_SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Justos — Lava Rápido em Olaria/São Carlos
                </a>
                . Ficha oficial do Google não verificada diretamente nesta
                demonstração. Nenhum depoimento individual é reproduzido aqui.
              </p>
            </div>
          </div>
        </section>

        {/* 7. LOCALIZAÇÃO + CONTATO */}
        <section id="contato" className="border-b hairline bg-[#0e0f11]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
            <div>
              <SectionLabel>Localização + contato</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                No Centro de São Carlos.
              </h2>
              <address className="mt-6 text-lg not-italic leading-8 text-[#c9cdd2]">
                Rua General Osório, 1138 — Centro
                <br />
                São Carlos / SP
              </address>
              <div className="mt-6 space-y-2 text-[#c9cdd2]">
                <p>
                  WhatsApp:{" "}
                  <a
                    className="font-semibold text-white underline"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (16) 99107-5656
                  </a>
                </p>
                <p>
                  Telefone:{" "}
                  <a className="underline" href={PHONE_HREF}>
                    (16) 3416-3336
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a
                    className="underline"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @potenzaestetica
                  </a>
                </p>
                <p>
                  Facebook:{" "}
                  <a
                    className="underline"
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /potenzaestetica
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-2xl border hairline bg-[#121315] p-6">
              <h3 className="text-lg font-semibold">Como chegar</h3>
              <p className="mt-2 text-[#c9cdd2]">
                Use a busca de mapa pelo endereço público. Horários de
                funcionamento não publicados nesta demo por falta de fonte
                oficial revalidada.
              </p>
              <a
                href={MAP_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border hairline px-6 py-3 text-sm font-semibold hover:border-white/40"
              >
                Pesquisar endereço no mapa
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-[#f4f2ed] px-6 py-3 text-center text-sm font-semibold text-[#0a0a0b] hover:bg-white"
              >
                Confirmar horário no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section className="inspection-light">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
            <SectionLabel>Próximo passo</SectionLabel>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Quero avaliar meu carro.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#c9cdd2]">
              Envie o modelo, o ano e o que te incomoda hoje. Respondemos com a
              avaliação indicada.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#bc3b24] px-9 py-4 text-base font-semibold text-white hover:bg-[#a3321e]"
            >
              Quero avaliar meu carro
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-[#9aa3ab] sm:px-6">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#c9cdd2]">
            Potenza — Conceito
          </p>
          <p className="mt-2">
            Wordmark tipográfico para demonstração. Conceito comercial não
            oficial, sem uso de logo, fotos ou depoimentos do negócio. Página
            demo com noindex/nofollow.
          </p>
          <p className="mt-2">
            Fontes públicas: Lecto, Guia e Cartão Brasil, Justos e perfis
            públicos indicados. Detalhes e verificação em{" "}
            <span className="font-mono">IMPLEMENTATION_REPORT.md</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
