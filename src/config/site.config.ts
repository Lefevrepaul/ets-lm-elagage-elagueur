export const siteConfig = {
  company: {
    name: "Ets LM élagage élagueur",
    tagline: "Votre expert dans les Hauts-de-France",
    description: "Entreprise spécialisée dans l'élagage professionnel, l'abattage sécurisé et l'entretien d'espaces verts. Nous intervenons avec expertise et passion pour préserver et embellir vos arbres et jardins dans la Somme et ses environs."
  },
  contact: {
    phoneDisplay: "06 41 22 43 91",
    phoneE164: "+33641224391",
    email: "Nous contacter via notre formulaire"
  },
  location: {
    city: "Mareuil-Caubert",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 50.0862584,
      lng: 1.8162356
    },
    villes: [
      "Mareuil-Caubert",
      "Abbeville",
      "Rue",
      "Le Crotoy",
      "Saint-Riquier",
      "Crécy-en-Ponthieu",
      "Forest-Montiers",
      "Noyelles-sur-Mer",
      "Nouvion",
      "Ponthoile",
      "Bernay-en-Ponthieu",
      "Vron"
    ],
    realisationsVilles: [
      "Mareuil-Caubert",
      "Abbeville",
      "Rue",
      "Le Crotoy",
      "Saint-Riquier",
      "Crécy-en-Ponthieu"
    ],
    temoignagesVilles: [
      "Mareuil-Caubert",
      "Abbeville",
      "Rue"
    ]
  },
  stats: {
    projectsCount: "150+",
    yearsExperience: "8 ans"
  },
  googleReviews: {
    rating: "4.9",
    count: 38,
    searchQuery: "Ets+LM+élagage+élagueur+Mareuil-Caubert+avis"
  },
  seo: {
    titleTemplate: "%s | Ets LM élagage - Expert élagueur Mareuil-Caubert",
    defaultTitle: "Ets LM élagage - Élagueur professionnel à Mareuil-Caubert (80)",
    metaDescription: "Élagueur expert à Mareuil-Caubert et dans la Somme. 8 ans d'expérience, plus de 150 interventions réalisées. Élagage, abattage et entretien d'espaces verts. Devis gratuit.",
    url: "https://ets-lm-elagage-mareuil-caubert.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;