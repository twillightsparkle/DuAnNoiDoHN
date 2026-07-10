export type Estate = {
  slug: string;
  name: string;
  badge: string;
  summary: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  location: string;
  overview: string;
  stats: Array<{ label: string; value: string }>;
  highlights: string[];
  gallery: Array<{ src: string; alt: string }>;
  featureCards?: Array<{ title: string; text: string; image: string; alt: string }>;
  video?: { src: string; poster: string };
  cta: string;
};