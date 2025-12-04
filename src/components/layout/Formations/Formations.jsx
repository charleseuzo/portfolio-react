import styles from "./Formations.module.css";
import Container from "../Container/Container";
import CardsIcone from "../../ui/CardsIcone/CardsIcone";

const sampleFormations = [
  {
    school_name: "Université de Montréal",
    duration: 700,
    programme: "Baccalauréat en Démographie et géographie",
    date: "2013-2017",
    image: { src: "./images/Icone_UdeM.png", alt: "Université de Montréal" },
  },
  {
    school_name: "Université de Montréal",
    duration: 700,
    programme: "Certificat en informatique appliquée",
    date: "2018-2021",
    image: { src: "./images/Icone_UdeM.png", alt: "Formation" },
  },
  {
    school_name: "Cégep Garneau",
    duration: 700,
    programme: "Certification collégiale en cybersécurité",
    date: "2024",
    image: { src: "./images/Icone-Cegep-Garneau.png", alt: "Cégep Garneau" },
  },
];

function Formations() {
  return (
    <section id="formations" className={`${styles.formations} pt-5`}>
      <Container className="py-16">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl relative w-fit">
          Formations
        </h2>
      </Container>
      <Container className="pb-5">
        <CardsIcone items={sampleFormations} />
      </Container>
    </section>
  );
}

export default Formations;
