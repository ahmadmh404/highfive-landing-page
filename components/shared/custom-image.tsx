import { ReactNode, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type RenderFallback = (imgLoaded: boolean, imgError: boolean) => ReactNode;

interface CustomImageProps {
  fallback: RenderFallback;
  url: string;
  alt: string;
  className: RenderFallback;
}

export function CustomImage({
  fallback,
  url,
  alt,
  className,
}: CustomImageProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {fallback(imgLoaded, imgError)}

      <Image
        src={url}
        alt={alt}
        fill
        loading="lazy"
        onLoadingComplete={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
        className={cn(className(imgLoaded, imgError))}
      />
    </>
  );
}
