import { Instagram, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { INSTAGRAM_URL, WHATSAPP_GERAL } from "./contact";

export interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
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
        <MessageCircle aria-hidden="true" className={icon} />
      </a>
    </div>
  );
}
