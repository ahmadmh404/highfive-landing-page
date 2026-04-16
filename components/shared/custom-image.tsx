import { getInitials } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface CustomImageProps {
  url: string;
  alt: string;
  className?: string;
}

export function CustomImage({ url, alt }: CustomImageProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const initials = getInitials(alt);

  return (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center transition-opacity duration-500 ${
          imgLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-4xl font-bold text-white/40 font-display">
          {initials}
        </span>
      </div>

      <Image
        src={url}
        alt={alt}
        fill
        loading="lazy"
        onLoadingComplete={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
        className={`object-cover transition-all duration-700 ease-in-out  ${imgLoaded || imgError ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
