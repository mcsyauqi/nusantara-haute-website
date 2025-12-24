"use client";

import { useState } from "react";
import Image from "next/image";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

// Generate a deterministic placeholder based on the image path
function generatePlaceholder(path: string): string {
  // Use a hash of the path to generate consistent placeholder colors
  let hash = 0;
  for (let i = 0; i < path.length; i++) {
    const char = path.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  const placeholderId = Math.abs(hash % 1000);

  // Return a beautiful Unsplash food/restaurant placeholder
  const categories = [
    "food,fine-dining",
    "restaurant,luxury",
    "food,gourmet",
    "cuisine,elegant",
    "chef,kitchen",
    "dining,luxury",
  ];

  const category = categories[Math.abs(hash) % categories.length];

  return `https://source.unsplash.com/800x600/?${category}&sig=${placeholderId}`;
}

export default function PlaceholderImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
}: PlaceholderImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Use a CSS gradient placeholder as fallback
      setImgSrc("");
    }
  };

  if (hasError || !imgSrc) {
    // Return a beautiful gradient placeholder
    return (
      <div
        className={`bg-gradient-to-br from-burgundy-dark via-charcoal to-brown-dark ${className}`}
        style={fill ? { position: "absolute", inset: 0 } : { width, height }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gold-accent/20 text-6xl font-serif">N</div>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={handleError}
    />
  );
}
