interface WPFeaturedMedia {
  source_url: string;
};

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: { 'wp:featuredmedia'?: WPFeaturedMedia[] };
};

export interface Post {
  id: number;
  dateOnly?: string | undefined;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImageUrl?: string | null;
};