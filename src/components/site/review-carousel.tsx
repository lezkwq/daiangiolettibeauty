const REVIEWS = [
  {
    name: "SAUDE TRAB",
    quote:
      "Os profissionais são todos muito atenciosos, com produtos de qualidade. Faço meu cabelo com eles há mais de 8 anos.",
  },
  {
    name: "Lais Da Silva Roberto",
    quote:
      "Atendimento maravilhoso, não é à toa que estou lá toda semana. Sempre muito bem recebida e bem tratada.",
  },
  {
    name: "elaine michele",
    quote: "Melhor cronograma capilar da minha vida, meu cabelo está totalmente recuperado.",
  },
  {
    name: "Susi Silva",
    quote: "Profissionais incríveis, local muito agradável. Super indico.",
  },
] as const;

function ReviewGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className={duplicate ? "reviews-duplicate flex shrink-0 gap-5 pr-5" : "flex shrink-0 gap-5 pr-5"}
      aria-hidden={duplicate ? "true" : undefined}
    >
      {REVIEWS.map((review) => (
        <figure
          key={review.name}
          className="flex min-h-[320px] w-[82vw] max-w-[420px] shrink-0 flex-col justify-between bg-secondary/40 p-6 md:min-h-[300px] md:w-[420px] md:p-8"
        >
          <blockquote className="font-display text-[clamp(1.35rem,2vw,1.8rem)] leading-[1.15] text-foreground">
            “{review.quote}”
          </blockquote>
          <figcaption className="label-xs mt-8 text-muted-foreground">
            {review.name} / Google
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Faixa contínua; o segundo grupo só sustenta o loop e não é lido por leitores de tela. */
export function ReviewCarousel() {
  return (
    <div
      className="reviews-viewport overflow-hidden"
      role="region"
      aria-label="Depoimentos de clientes"
      tabIndex={0}
    >
      <div className="reviews-track flex w-max">
        <ReviewGroup />
        <ReviewGroup duplicate />
      </div>
    </div>
  );
}
