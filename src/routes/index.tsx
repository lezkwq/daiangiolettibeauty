import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Manifesto, Statement } from "@/components/site/statement";
import { Services } from "@/components/site/services";
import { Dai, Story, Therapy } from "@/components/site/story";
import { Conversion, Reviews } from "@/components/site/reviews";
import { SalaoBlock, SpaceBlock } from "@/components/site/photo-blocks";
import { Location, SiteFooter } from "@/components/site/location";
import { FloatingCta } from "@/components/site/floating-cta";

const TITLE = "Dai Angioletti Beauty | Saúde Capilar em Camboriú";
const DESCRIPTION =
  "Conheça a Dai Angioletti Beauty em Camboriú. Saúde e regeneração capilar, Protocolo Fênix, fitoterapia e beleza com atendimento acolhedor.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dai Angioletti Beauty" },
      { property: "og:image", content: "/dai-angioletti-og.svg" },
      { name: "twitter:image", content: "/dai-angioletti-og.svg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Statement />
        <Manifesto />
        <Services />
        <SpaceBlock />
        <Story />
        <Therapy />
        <Dai />
        <Reviews />
        <SalaoBlock />
        <Conversion />
        <Location />
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  );
}
