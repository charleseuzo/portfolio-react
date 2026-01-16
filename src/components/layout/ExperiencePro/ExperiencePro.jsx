import styles from "./ExperiencePro.module.css";
import Container from "../Container/Container";
import Boxes from "../../ui/Boxes/Boxes";

// Import des textes JSX
import agencelb from "../../../content/textes/agencelb.jsx";
import constella from "../../../content/textes/constella.jsx";
import touchette from "../../../content/textes/touchette.jsx";

const dataBox = [
  {
    title: "Développeur Front-End chez L'agence LB",
    texte: agencelb,
    duration: "800",
    image: [{ src: "./images/logo-agencelb.png", alt: "L'agence LB" }],
    date: "Septembre 2023 - Septembre 2025",
    location: "Terrebonne (Télétravail)",
    description:
      "L'Agence LB est une agence marketing web passionnée de référencement naturel (SEO), de publicités PPC comme Facebook Ads / Google Ads, de création de sites web et plus.",
  },
  {
    title: "Programmeur/intégrateur de sites web chez Constella",
    texte: constella,
    duration: "1000",
    image: [{ src: "./images/logo-constella.jpg", alt: "Constella" }],
    date: "Juin 2021 - Mai 2023",
    location: "Mont-Laurier",
    description:
      "Constella Agence Web est une agence web spécialisée en création de sites web, marketing numérique et solutions d'hébergement pour les entreprises de toutes tailles.",
  },
  {
    title: "Commis Fichiers Maîtres chez Groupe Touchette",
    texte: touchette,
    duration: "1200",
    image: [{ src: "./images/logo-touchette.jpg", alt: "Groupe Touchette" }],
    date: "Février 2019 - Février 2021",
    location: "Montréal",
    description:
      "Groupe Touchette est le plus important distributeur de pneus à propriété canadienne et est reconnu pour son expertise et son niveau de service supérieur auprès des manufacturiers, des concessionnaires automobiles et des clients indépendants.",
  },
];

function ExperiencePro() {
  return (
    <section id="experiencepro" className={`${styles.experiencepro} pt-5`}>
      <Container className="py-16">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl relative w-fit">
          Mes expériences professionnelles
          {/* <span className="block h-1 w-full mt-2 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] rounded-full animate-pulse"></span> */}
        </h2>
      </Container>
      <Container className="pb-5">
        <Boxes boxesData={dataBox} />
      </Container>
    </section>
  );
}

export default ExperiencePro;
