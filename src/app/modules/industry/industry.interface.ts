
export interface TCTA {
  label: string;
  href: string;
}

export interface TTag {
  label: string;
  icon: string;
}

export interface TIndustry {
  title: string;
  slug: string;
  tag: TTag;

  hero: {
    title: string;
    highlight: string;
    description: string;
    image: string;
    primaryCta: TCTA;
    secondaryCta?: TCTA;
  };

  highlights: Array<{
    label: string;
    value: string;
  }>;

  overview: {
    title: string;
    subtitle: string;
    description: string[];
    benefits: string[];
  };

  capabilities: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;

  cta: {
    title: string;
    description: string;
    button: TCTA;
  };
}
