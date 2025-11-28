import styles from "./ExperiencePro.module.css";
import Container from "../Container/Container";
import Boxes from "../../ui/Boxes/Boxes";

const dataBox = [
  {
    title: "Développeur Front-End chez L'agence LB",
    textePath: "./content/textes/agencelb.html",
    duration: "800",
    image: [{ src: "./images/logo-agencelb.png", alt: "L'agence LB" }],
  },
  {
    title: "Programmeur/intégrateur de sites web chez Constella",
    textePath: "./content/textes/constella.html",
    duration: "1000",
    image: [{ src: "./images/logo-constella.svg", alt: "Constella" }],
  },
  {
    title: "Commis Fichiers Maîtres chez Groupe Touchette",
    textePath: "./content/textes/touchette.html",
    duration: "1200",
    image: [{ src: "./images/logo-touchette.jpg", alt: "Groupe Touchette" }],
  },
];

function ExperiencePro() {
  return (
    <section id="experiencepro" className={`${styles.experiencepro} pt-5`}>
      <Container className="pt-16 pb-5">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold relative w-fit">
          Mes expériences professionnelles
          <span className="block h-1 w-full mt-2 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] rounded-full animate-pulse"></span>
        </h2>
      </Container>
      <Container className="pb-5">
        <Boxes boxesData={dataBox} />
      </Container>
    </section>
  );
}

export default ExperiencePro;
