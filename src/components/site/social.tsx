import { Instagram } from "lucide-react";

import whatsappIcon from "@/assets/icon-whatsapp.png";
import { cn } from "@/lib/utils";
import { INSTAGRAM_URL, WHATSAPP_GERAL } from "./contact";

export interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

function WhatsAppGlyph({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block bg-current", className)}
      style={{
        WebkitMaskImage: `url(${whatsappIcon})`,
        maskImage: `url(${whatsappIcon})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const icon = cn("h-5 w-5", iconClassName);

  return (
    <div className={cn("flex items-center gap-8", className)}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram da Dai Angioletti Beauty"
        className="inline-flex transition-opacity hover:opacity-60"
      >
        <Instagram aria-hidden="true" className={icon} />
      </a>
      <a
        href={WHATSAPP_GERAL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp da Dai Angioletti Beauty"
        className="inline-flex transition-opacity hover:opacity-60"
      >
        <WhatsAppGlyph className={icon} />
      </a>
    </div>
  );
}
