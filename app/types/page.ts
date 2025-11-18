export interface PageAcf {
  title?: string;
  description?: string;
  image?: string;
  download_button?: string;
  contacts__title?: string;
  contacts__phone?: string;
  contacts__email?: string;
  contacts__address?: string;
  form__title?: string;
  form__button?: string;
  seo_title?: string;
  seo_description?: string;
};

interface WPFeaturedMedia {
  source_url: string;
};

interface WPRendered {
  rendered: string;
};

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: WPRendered;
  excerpt: WPRendered;
  content: WPRendered;
  acf: PageAcf;
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
