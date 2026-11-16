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

/** Editorial image block with dimensions matched to its source photograph. */
export function EditorialPhoto({
  photo,
  className,
  frameClassName = "aspect-[4/5]",
  caption,
  captionClassName,
  delay = 0,
  objectPosition = "center",
  priority = false,
}: EditorialPhotoProps) {
  return (
    <Reveal delay={delay} className={cn("w-full", className)}>
      <figure className="w-full">
        <div
          className={cn("photo-placeholder w-full overflow-hidden", frameClassName)}
          data-photo-slot={photo.id}
        >
          <picture className="block h-full w-full">
            {photo.desktopSrc ? (
              <source media="(min-width: 1024px)" srcSet={photo.desktopSrc} />
            ) : null}
            <img
              src={photo.src}
              alt={photo.alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              style={{ objectPosition }}
              className="h-full w-full object-cover"
            />
          </picture>
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
