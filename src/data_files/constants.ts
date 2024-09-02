import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Oddo",
  tagline: "Elevate Your Online Presence with Stunning, User-Friendly Websites",
  description: "Tailored web design and development services for your business, combining creativity with functionality to help your brand stand out.",
  description_short: "Creative Website for Your Taste",
  url: "https://oddo.no",
  author: "Hamza Mu",
};

export const SEO = {
  title: SITE.title +" "+ SITE.description_short,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Tailored web design and development services for your business`,
  description: "Equip your vision with Oddo's Best Practice for Website Design and Development",
  image: ogImageSrc,
};
