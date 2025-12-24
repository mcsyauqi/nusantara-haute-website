"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

export default function OptimizedImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  ...props
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-deep-burgundy/30 via-charcoal to-rich-brown/20 flex items-center justify-center ${fallbackClassName || className}`}
        style={props.fill ? { position: "absolute", inset: 0 } : { width: props.width, height: props.height }}
      >
        <div className="text-center p-4">
          <span
            className="text-gold-accent/30 text-4xl block mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            N
          </span>
          <span
            className="text-gold-accent/20 text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
