import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import { PHOTO_ATENDIMENTO, PHOTO_CORTE } from "./photos";

/** Apresentação do espaço real, mantendo a ampla margem editorial. */
export function SpaceBlock() {
  return (
    <section id="salao" className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <EditorialPhoto
          photo={PHOTO_CORTE}
          className="lg:col-span-6 lg:col-start-2"
          frameClassName="aspect-[9/16]"
        />
        <div className="grid grid-cols-1 gap-6 lg:col-span-4 lg:col-start-9">
          <Reveal className="label-xs text-muted-foreground" delay={80}>
            O salão
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.05] text-foreground">
              Um espaço para
              <br />
              cuidar de você.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Um espaço acolhedor para renovar o visual, cuidar dos fios e se sentir bem em cada
              atendimento.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Segundo registro do atendimento e do espaço, sem repetir a foto anterior. */
export function SalaoBlock() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="flex flex-col justify-end lg:col-span-4">
          <p className="label-xs mb-6 text-muted-foreground">Beleza em cada detalhe</p>
          <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.05] text-foreground">
            Atenção ao
            <br />
            seu estilo,
            <br />
            ao seu tempo.
          </h2>
        </Reveal>
        <EditorialPhoto
          photo={PHOTO_ATENDIMENTO}
          className="lg:col-span-7 lg:col-start-6"
          frameClassName="aspect-[4/5]"
          objectPosition="50% 45%"
          caption="Cuidado e atenção em cada atendimento"
          delay={120}
        />
      </div>
    </section>
  );
}
