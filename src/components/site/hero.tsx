import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import { PHOTO_DAI } from "./photos";
import { WHATSAPP_GERAL } from "./contact";

const FACTS = ["4,7 no Google", "38 avaliações", "Protocolo Fênix", "Camboriú, SC"] as const;

export function Hero() {
  return (
    <section id="topo" className="px-6 pb-14 pt-20 md:px-10 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs flex flex-wrap gap-x-6 gap-y-1 text-muted-foreground md:gap-y-4">
          <span>Dai Angioletti Beauty</span>
          <span>Camboriú, SC</span>
          <span>Terapeuta capilar</span>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-10 md:mt-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-9" delay={80}>
            <h1 className="font-display text-[clamp(3.5rem,10.5vw,10rem)] leading-[0.85] tracking-tight text-foreground md:leading-[0.88] md:tracking-normal">
              <span className="block">Beleza com</span>
              <span className="block">
                <em className="not-italic text-primary">cuidado.</em>
              </span>
              <span className="block pl-[6%] md:pl-[14%]">Um espaço</span>
              <span className="block pl-[6%] md:pl-[14%]">só seu.</span>
            </h1>
          </Reveal>

          <Reveal className="flex flex-col justify-end lg:col-span-3" delay={220}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Saúde capilar, transformação e beleza em um espaço acolhedor em Camboriú. Agende seu
              próximo momento de cuidado com a Dai.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <a
                href={WHATSAPP_GERAL}
                target="_blank"
                rel="noreferrer"
                className="label-xs rounded-full bg-primary px-6 py-3.5 text-center text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="label-xs rounded-full border border-foreground/25 px-6 py-3.5 text-center text-foreground transition-colors hover:border-foreground"
              >
                Conhecer serviços
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="rule" className="mt-16 h-px w-full bg-foreground/20 md:mt-24" />

        <div className="grid grid-cols-2 gap-y-6 pt-6 md:grid-cols-4">
          {FACTS.map((fact, index) => (
            <Reveal key={fact} delay={index * 90} className="label-xs text-muted-foreground">
              {fact}
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:mt-32 lg:grid-cols-12">
          <EditorialPhoto
            photo={PHOTO_DAI}
            priority
            className="lg:col-span-5 lg:col-start-2"
            frameClassName="aspect-[4/5] md:aspect-[3/4]"
            objectPosition="50% 45%"
            caption="Dai Angioletti — Saúde & regeneração capilar"
          />
          <Reveal className="flex items-end lg:col-span-4 lg:col-start-9" delay={160}>
            <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-foreground">
              Cuidado capilar pensado para acolher você e respeitar a história dos seus fios.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
