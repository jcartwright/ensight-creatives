import fs from 'node:fs';
import path from 'node:path';

/**
 * Hero media.
 * - Slides are every image in public/stills/, sorted by filename.
 * - Prefix files with 01-, 02-, … to set cycle order.
 * - If videoPath is set, a silent looping MP4 is used instead.
 */
const stillsDir = path.join(process.cwd(), 'public/stills');
const imageExt = /\.(jpe?g|png|webp)$/i;

const slidesFromDisk = fs.existsSync(stillsDir)
  ? fs
      .readdirSync(stillsDir)
      .filter((name) => imageExt.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map((name) => `/stills/${name}`)
  : [];

export const hero = {
  /** First still. Used as video poster when videoPath is set. */
  posterPath: slidesFromDisk[0] ?? '/hero-poster.jpg',
  /** Silent MP4 loop; leave empty to use the stills cycle */
  videoPath: '',
  posterWidth: 1280,
  posterHeight: 720,
  /** Seconds each still is fully visible before crossfade */
  slideHoldSeconds: 6,
  /** Crossfade duration in seconds */
  slideFadeSeconds: 1.4,
  slides: slidesFromDisk,
} as const;
