import styles from "./ExperiencePro.module.css";
import Container from "../Container/Container";
import Boxes from "../../ui/Boxes/Boxes";

const dataBox = [
  {
    title: "Développeur Front-End chez L'agence LB",
    textePath: "/content/textes/agencelb.html",
    duration: "800",
    image: [{ src: "/images/logo-agencelb.png", alt: "L'agence LB" }],
  },
  {
    title: "Programmeur/intégrateur de sites web chez Constella",
    textePath: "/content/textes/constella.html",
    duration: "1000",
    image: [{ src: "/images/logo-constella.svg", alt: "Constella" }],
  },
  {
    title: "Commis Fichiers Maîtres chez Groupe Touchette",
    textePath: "/content/textes/touchette.html",
    duration: "1200",
    image: [{ src: "/images/logo-touchette.jpg", alt: "Groupe Touchette" }],
  },
];

function ExperiencePro() {
  return (
    <section id="experiencepro" className={`${styles.experiencepro} py-5`}>
      <Container className="py-12">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Mes expériences professionnelles
        </h2>
      </Container>
      <Container className="py-12">
        <Boxes boxesData={dataBox} />
      </Container>
    </section>
  );
}

export default ExperiencePro;
