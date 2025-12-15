// Data for project details pages
export const projetsData = {
  "pickleball-rn": {
    slug: "pickleball-rn",
    titre: "Pickleball RN",
    hero_image_mobile: "/images/projets/hero_projets_pickleball-rn.jpg",
    hero_image_tablet: "/images/projets/hero_projets_pickleball-rn.jpg",
    hero_image_desktop: "/images/projets/hero_projets_pickleball-rn.jpg",
    alt_image: "Application Pickleball RN",
    description:
      "Site vitrine pour le club de pickleball de Rouyn-Noranda, présentant les services, horaires et informations de contact.",
    technologies: ["WordPress", "ACF", "PicoStrap"],
    lien_github: "https://github.com/charleseuzo/pickleball-rn",
    lien_demo: null,
    date: "2024",
    contenu: [
      {
        type: "section",
        titre: "Présentation du projet",
        texte: `Une application mobile développée avec React Native et Expo permettant aux joueurs 
        de pickleball de gérer leurs tournois, suivre leurs scores et organiser des matchs.`,
      },
      {
        type: "section",
        titre: "Fonctionnalités principales",
        liste: [
          "Gestion des tournois",
          "Suivi des scores en temps réel",
          "Organisation des matchs",
          "Classement des joueurs",
          "Interface intuitive et responsive",
        ],
      },
      {
        type: "section",
        titre: "Technologies utilisées",
        texte: `Le projet utilise React Native pour le développement cross-platform, 
        Expo pour simplifier le workflow de développement, et Firebase pour la gestion 
        des données en temps réel.`,
      },
    ],
  },
};
