export interface CommonAcfFields {
  seo_title?: string;
  seo_description?: string;
};

export interface ResumeAcfFields extends CommonAcfFields {
  title?: string;
  description?: string;
  image ?: string;
  download_button?: string;
}

export interface PageAcf extends ResumeAcfFields {
  contacts__title?: string;
  contacts__phone?: string;
  contacts__email?: string;
  contacts__address?: string;
  form__title?: string;
  form__button?: string;
  short_description?: string;
};

interface WPFeaturedMedia {
  source_url: string;
};

interface WPRendered {
  rendered: string;
};

export interface WPPost<T = PageAcf> {
  id: number;
  date: string;
  slug: string;
  title: WPRendered;
  excerpt: WPRendered;
  content: WPRendered;
  acf?: T | null;
  _embedded?: { 
    'wp:featuredmedia'?: WPFeaturedMedia[] 
  };
};

export interface Post<T = PageAcf> {
  id: number;
  dateOnly?: string;
  slug: string;
  acf?: T | null;
  title: string;
  content: string;
  excerpt: string;
  featuredImageUrl?: string | null;
};
