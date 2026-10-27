export type LinkItem = {
  label: string;
  href: string;
};

export type SectionHeadingContent = {
  label: string;
  title: string;
  description?: string;
};

export type Company = {
  name: string;
  nameEn: string;
  ceo: string;
  businessNumber: string;
  address: string;
  addressEn: string;
  email: string;
  copyrightYear: number;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  cta: LinkItem;
  backgroundImage: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type SolutionItem = {
  id: string;
  code: string;
  name: string;
  description: string;
  tags: string[];
};

export type SolutionsContent = SectionContent<SolutionItem> & {
  video: {
    src: string;
    label: string;
  };
  modulesLabel: string;
};

export type LeaderItem = {
  name: string;
  role: string;
  affiliation: string;
  career: string[];
  image: string;
};

export type SectionContent<T> = {
  heading: SectionHeadingContent;
  items: T[];
};

export type ContactGroup = {
  title: string;
  items: {
    label?: string;
    value: string;
  }[];
};

export type ContactContent = {
  heading: SectionHeadingContent;
  groups: ContactGroup[];
};
