export type Project = {
  title: string;
  slug: string;
  /** YouTube video ID (from youtube.com/watch?v=ID). Leave empty until ready. */
  youtubeId: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
};

/**
 * Add unlisted (or public) YouTube videos here.
 * Example: youtubeId: 'dQw4w9WgXcQ'
 */
export const projects: Project[] = [
  {
    title: 'Construction progress series',
    slug: 'construction-progress',
    youtubeId: '',
    blurb:
      'Milestone aerial documentation for active builds—consistent framing for stakeholders and marketing.',
    tags: ['Construction', 'Progress'],
    featured: true,
  },
  {
    title: 'Commercial property showcase',
    slug: 'commercial-property',
    youtubeId: '',
    blurb:
      'Site and building perspectives tailored for listings, leasing packages, and investor decks.',
    tags: ['CRE', 'Marketing'],
    featured: true,
  },
  {
    title: 'Brand aerial story',
    slug: 'brand-aerial',
    youtubeId: '',
    blurb:
      'Promotional aerial sequences that give local brands a cinematic sense of place.',
    tags: ['Brand', 'Promo'],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
