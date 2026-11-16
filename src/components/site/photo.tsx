import { Camera } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import type { Photo } from "./photos";

interface EditorialPhotoProps {
  photo: Photo;
  className?: string;
  frameClassName?: string;
  objectPosition?: string;
  caption?: string;
  captionClassName?: string;
  delay?: number;
  priority?: boolean;
}

/** Sized, named photo slot; the supplied optimized asset can be added later. */
export function EditorialPhoto({
  photo,
  className,
  frameClassName = "aspect-[4/5]",
  caption,
  captionClassName,
  delay = 0,
}: EditorialPhotoProps) {
  return (
    <Reveal delay={delay} className={cn("w-full", className)}>
      <figure className="w-full">
        <div
          className={cn(
            "photo-placeholder relative flex w-full flex-col items-center justify-center overflow-hidden border border-foreground/10 px-6 text-center",
            frameClassName,
          )}
          data-photo-slot={photo.id}
          role="img"
          aria-label={photo.alt}
        >
          <span className="photo-placeholder__ring" aria-hidden="true" />
          <Camera aria-hidden="true" className="relative mb-4 h-7 w-7 text-primary/70" />
          <span className="label-xs relative text-foreground/75">{photo.label}</span>
          <span className="label-xs relative mt-2 text-[0.55rem] text-muted-foreground">
            Imagem será adicionada
          </span>
        </div>
        {caption ? (
          <figcaption className={cn("label-xs mt-4 text-muted-foreground", captionClassName)}>
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
