import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import { PHOTO_SEMI_DEFINITIVA, PHOTO_UNHAS_CORAL, PHOTO_UNHAS_NUDE } from "./photos";
import { serviceWhatsApp } from "./contact";

interface Service {
  number: string;
  name: string;
  description: string;
  featured?: boolean;
}

const SERVICES: readonly Service[] = [
  {
    number: "01",
    name: "Saúde & regeneração capilar",
    description: "Cuidado capilar personalizado e atenção às necessidades dos fios.",
    featured: true,
  },
  {
    number: "02",
    name: "Protocolo Fênix",
    description: "Um protocolo de cuidado capilar apresentado pela Dai.",
  },
  {
    number: "03",
    name: "Fitoterapia & cronograma",
    description: "Fitoterapia capilar e orientação para a rotina de cuidados.",
  },
  { number: "04", name: "Cortes & finalização", description: "Cortes e finalização com atenção ao seu estilo." },
  { number: "05", name: "Tranças & penteados", description: "Tranças e penteados para diferentes ocasiões." },
  { number: "06", name: "Unhas & beleza", description: "Serviços de beleza com horário agendado." },
];

export function Services() {
  return (
    <section id="servicos" className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="label-xs text-muted-foreground lg:col-span-4">
            O que você encontra aqui
          </Reveal>
          <Reveal className="lg:col-span-8" delay={100}>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.94] text-foreground">
              Beleza com
              <br />
              cuidado desde
              <br />
              <span className="text-primary">a raiz.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 md:mt-24">
          {SERVICES.map((service, index) => (
            <li key={service.number}>
              <Reveal variant="rule" className="h-px w-full bg-foreground/20" />
              <Reveal delay={index * 50}>
                <a
                  href={serviceWhatsApp(service.name.toLowerCase())}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar ${service.name} pelo WhatsApp`}
                  className="group grid grid-cols-1 items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6 md:py-9"
                >
                  <span className="label-xs text-muted-foreground md:col-span-1">{service.number}</span>
                  <h3
                    className={cn(
                      "font-display text-[clamp(2rem,5vw,4rem)] leading-none transition-transform duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-7",
                      service.featured ? "text-primary" : "text-foreground",
                    )}
                  >
                    {service.name}
                  </h3>
                  <span className="max-w-sm text-sm leading-relaxed text-muted-foreground md:col-span-4">
                    {service.description}
                    <span className="label-xs mt-3 block text-foreground/60 transition-colors group-hover:text-primary">
                      Consultar no WhatsApp
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal variant="rule" className="h-px w-full bg-foreground/20" />

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <EditorialPhoto
            photo={PHOTO_SEMI_DEFINITIVA}
            className="lg:col-span-3 lg:col-start-2"
            frameClassName="aspect-[9/16]"
            caption="Cabelos alinhados após a semi-definitiva"
          />
          <EditorialPhoto
            photo={PHOTO_UNHAS_CORAL}
            className="lg:col-span-3 lg:col-start-6 lg:pt-20"
            frameClassName="aspect-[9/16]"
            caption="Esmaltação coral"
            delay={140}
          />
          <EditorialPhoto
            photo={PHOTO_UNHAS_NUDE}
            className="lg:col-span-3 lg:col-start-10 lg:pt-40"
            frameClassName="aspect-[9/16]"
            caption="Esmaltação em tom nude"
            delay={220}
          />
        </div>
      </div>
    </section>
  );
}
