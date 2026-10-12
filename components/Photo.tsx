import Image from 'next/image';
import { unsplash } from '@/lib/content';

/** Fills its (position: relative) parent with a cropped photo. Pass `wide` for full-bleed heroes. */
export default function Photo({
  id,
  alt = '',
  sizes = '100vw',
  priority = false,
  wide = false,
  position,
  className,
}: {
  id: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  wide?: boolean;
  /** CSS object-position, e.g. '50% 20%' to keep a face in frame. */
  position?: string;
  className?: string;
}) {
  return (
    <Image
      src={unsplash(id, wide ? 2400 : 1600)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: 'cover', objectPosition: position }}
    />
  );
}
