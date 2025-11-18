export interface ContactsPageAcf {
  contacts__title: string;
  contacts__phone: string;
  contacts__email: string;
  contacts__address: string;
  form__title: string;
  form__button: string;
  seo_title: string;
  seo_description: string;
};

export interface ResumePageAcf {
  title: string;
  description: string;
  image: string;
  download_button: string;
};

export interface WPContactsPage {
  id: number;
  title: { rendered: string };
  acf: ContactsPageAcf & ResumePageAcf;
};

export interface WPPostAcfPage {
  seo_title: string;
  seo_description: string;
};

export interface WPPostPage {
  title: { rendered: string };
  content: { rendered: string };
  acf: WPPostAcfPage;
};