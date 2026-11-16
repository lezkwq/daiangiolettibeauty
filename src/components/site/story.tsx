import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import {
  PHOTO_FITOTERAPIA,
  PHOTO_CABELO_LISO,
  PHOTO_TRANCAS,
  PHOTO_DAI,
} from "./photos";
import { WHATSAPP_AVALIACAO, WHATSAPP_GERAL } from "./contact";

/** Editorial introduction to the salon's individualized approach. */
export function Story() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.84] text-primary">
            O cuidado
            <br />
            pela raiz.
          </p>
        </Reveal>

        <div className="lg:col-span-4 lg:col-start-7">
          <Reveal delay={120}>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-foreground">
              Primeiro, escutar. Depois, cuidar.
            </h2>
          </Reveal>
          <Reveal variant="rule" className="mt-8 h-px w-full bg-foreground/20" />
          <Reveal delay={180}>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Cada cabelo tem sua história. A Dai combina cuidado individual, conhecimento capilar e
              atenção aos detalhes para ajudar você a escolher o que faz sentido para seus fios.
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3" delay={260}>
          <p className="text-sm leading-relaxed text-muted-foreground lg:pt-24">
            Um atendimento acolhedor, com espaço para conversar sobre seus objetivos e sua rotina.
          </p>
        </Reveal>

        <EditorialPhoto
          photo={PHOTO_CABELO_LISO}
          className="mt-14 lg:col-span-6 lg:col-start-7 lg:mt-24"
          frameClassName="aspect-[9/16] lg:aspect-[16/10]"
          caption="Cabelos castanhos lisos e com brilho"
          delay={120}
        />
      </div>
    </section>
  );
}

/** Capillary care and the Fênix protocol, described without outcome guarantees. */
export function Therapy() {
  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground md:px-10 md:py-44 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-primary-foreground/70">Saúde & regeneração capilar</Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-10 max-w-5xl text-[clamp(2.25rem,7vw,6rem)] leading-[0.95] lg:mt-6 lg:text-[clamp(2.25rem,4.5vw,4.5rem)]">
            Seu cabelo merece
            <br />
            cuidado com
            <br />
            intenção.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 lg:mt-16 lg:grid-cols-12">
          <EditorialPhoto
            photo={PHOTO_FITOTERAPIA}
            className="lg:col-span-6"
            frameClassName="aspect-[9/16] lg:aspect-[3/4]"
            caption="Preparo fitoterápico para o cuidado capilar"
            captionClassName="text-primary-foreground/70"
            delay={80}
          />
          <Reveal className="flex flex-col justify-end lg:col-span-4 lg:col-start-8" delay={160}>
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              Protocolo Fênix, fitoterapia e orientação capilar: conheça as possibilidades de
              cuidado e converse com a Dai sobre o que combina com você.
            </p>
          </Reveal>
          <Reveal className="flex items-end lg:col-span-3 lg:col-start-8" delay={240}>
            <a
              href={WHATSAPP_AVALIACAO}
              target="_blank"
              rel="noreferrer"
              className="label-xs inline-block border-b border-primary-foreground/50 pb-2 transition-colors hover:border-primary-foreground"
            >
              Conversar sobre cuidado capilar
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** About Dai and her work with each client. */
export function Dai() {
  return (
    <section id="dai" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-muted-foreground">Dai Angioletti</Reveal>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={80}>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.94] text-foreground">
              Beleza que
              <br />
              começa no
              <br />
              <span className="text-primary">cuidado.</span>
            </h2>
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal variant="rule" className="h-px w-full bg-foreground/20" />
            <Reveal delay={140}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Especialista em saúde e regeneração capilar, Dai Angioletti trabalha com o Protocolo
                Fênix e fitoterapia. Seu espaço recebe cada pessoa com atenção e acolhimento.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href={WHATSAPP_GERAL}
                target="_blank"
                rel="noreferrer"
                className="label-xs mt-10 inline-block border-b border-foreground/40 pb-2 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Conversar com a Dai
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <EditorialPhoto
            photo={PHOTO_DAI}
            className="lg:col-span-6 lg:col-start-2"
            frameClassName="aspect-square lg:aspect-[4/5]"
            caption="Dai Angioletti — saúde & regeneração capilar"
            delay={80}
          />
          <EditorialPhoto
            photo={PHOTO_TRANCAS}
            className="lg:col-span-3 lg:col-start-10 lg:pt-40"
            frameClassName="aspect-[9/16] lg:aspect-[3/4]"
            caption="Tranças e penteados"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}
