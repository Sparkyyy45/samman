import { cn } from "../utils/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  id?: string;
  priority?: boolean;
};

/** All photography is temporary. Replace via `id` when Samman assets are ready. */
export function ReplaceableImage({ src, alt, className, imgClassName, id, priority }: Props) {
  return (
    <div className={cn("img-zoom bg-cream-dark", className)} data-image-slot={id}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", imgClassName)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
    </div>
  );
}
