export type Project = {
  title: string;
  slug: string;
  /** YouTube video ID (from youtube.com/watch?v=ID). Leave empty until ready. */
  youtubeId: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
  /**
   * Open YouTube in a new tab instead of embedding.
   * Use when Content ID / copyright blocks embeds.
   */
  linkOut?: boolean;
};

/**
 * Portfolio entries. Set youtubeId to an unlisted or public YouTube ID.
 * Order here is display order on /portfolio and featured work (when featured).
 */
export const projects: Project[] = [
  {
    title: 'Rancho de la Roca: Promo',
    slug: 'rancho-de-la-roca-promo',
    youtubeId: 't8GaJwbt5vw',
    blurb: 'A 60-second look at a North Texas event ranch: grounds, buildings, and the overall setting.',
    tags: ['Events', 'Promo', 'Ranch'],
    featured: true,
  },
  {
    title: 'Rancho de la Roca: Christmas',
    slug: 'rancho-christmas',
    youtubeId: 'SKuTcF6Mw7E',
    blurb: 'Night flight over holiday lights across the ranch for seasonal guest and marketing use.',
    tags: ['Events', 'Night', 'Seasonal'],
    featured: true,
  },
  {
    title: 'Rancho de la Roca: Freedom Fest',
    slug: 'rancho-freedom-fest',
    youtubeId: 'AhWsNQCJQtQ',
    blurb: 'Fourth of July coverage at Freedom Fest: people, grounds, and a fireworks finale.',
    tags: ['Events', 'Festival'],
    featured: true,
  },
  {
    title: 'Rancho de la Roca: Roundup 2026',
    slug: 'rancho-roundup-2026',
    youtubeId: 'xYkzSgi-0dE',
    blurb: 'Charity car show coverage at Rancho Roundup: classic cars, crowd energy, and the ranch grounds.',
    tags: ['Events', 'Charity', 'Car show'],
    featured: true,
  },
  {
    title: 'Toyota Tundra: Motion Cut',
    slug: 'toyota-tundra-motion-cut',
    youtubeId: 'Dv0yPbxbrBw',
    blurb:
      'A high-energy ground cut on a Toyota Tundra, shot as motion practice ahead of car-show coverage.',
    tags: ['Automotive', 'Ground', 'Motion'],
    featured: true,
  },
  {
    title: 'Babcock House Museum',
    slug: 'babcock-house-museum',
    youtubeId: 'yT6QeeBLuXE',
    blurb: 'Historic house museum and grounds for visitor and community outreach.',
    tags: ['Historic', 'Museum', 'Culture'],
    featured: true,
  },
  {
    title: 'The Ranches at Deer Crossing',
    slug: 'ranches-at-deer-crossing',
    youtubeId: 'kDfCOYVCcHE',
    blurb: 'Vacant land for sale in Dublin, Texas. Terrain, access, and property lines for marketing.',
    tags: ['Land', 'Real estate', 'Dublin TX'],
    featured: true,
  },
  {
    title: 'Eaglepointe Thanksgiving',
    slug: 'eaglepointe-thanksgiving',
    youtubeId: 'BJuu25Urm2E',
    blurb: 'Community Thanksgiving outreach at Eaglepointe Church in Denton, Texas.',
    tags: ['Events', 'Community Outreach', 'Denton TX'],
    featured: true,
    linkOut: true,
  },
  {
    title: 'Eaglepointe Church',
    slug: 'eaglepointe-church',
    youtubeId: 'WFvWkxldfN4',
    blurb: 'Commercial aerial footage of the Eaglepointe Church campus in Denton, Texas.',
    tags: ['Commercial Real Estate Denton TX'],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
