export interface TCategory {
  name: "solar_energy" | "infrastructure" | "ship_handling" | "berth_operating" | "logistics_supply_chain" | "consulting_strategy";
  slug: string;
  image: string;
}


export interface TIndustry {
  slug: string
  tag: {
    label: string
    icon: any
  }

  hero: {
    title: string
    image: string
    highlight: string
    description: string
    primaryCta: {
      label: string
      href: string
    }
    secondaryCta: {
      label: string
      href: string
    }
  }

  highlights: { label: string; value: string }[]

  overview: {
    title: string
    subtitle: string
    description1: string
    description2: string
    benefits: string[]
  }

  capabilities: {
    icon: any
    title: string
    desc: string
  }[]

  process: {
    step: string
    title: string
    desc: string
  }[]

  cta: {
    title: string
    description: string
    button: {
      label: string
      href: string
    }
  }
}
