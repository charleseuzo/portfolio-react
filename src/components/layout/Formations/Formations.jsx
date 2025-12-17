import styles from "./Formations.module.css";
import Container from "../Container/Container";
import CardsIcone from "../../ui/CardsIcone/CardsIcone";

const sampleFormations = [
  {
    school_name: "Université de Montréal",
    duration: 700,
    programme: "Baccalauréat en Démographie et géographie",
    date: "2013-2017",
    image: {
      src: "./images/Icone_UdeM.png",
      alt: "Baccalauréat en Démographie et géographie - Université de Montréal",
    },
    description:
      "Ce programme m'a permis d'acquérir des compétences en analyse de données, en statistiques, en géomatique et en recherche sociale.",
  },
  {
    school_name: "Université de Montréal",
    duration: 700,
    programme: "Certificat en informatique appliquée",
    date: "2018-2021",
    image: {
      src: "./images/Icone_UdeM.png",
      alt: "Certificat en informatique appliquée - Université de Montréal",
    },
    description:
      "Dans ce programme, j'ai pu apprendre les bases de la programmation, du développement web, les bases de données et des systèmes d'information.",
  },
  {
    school_name: "Cégep Garneau",
    duration: 700,
    programme: "Certification collégiale en cybersécurité",
    date: "2024",
    image: {
      src: "./images/Icone_Cegep-Garneau.png",
      alt: "Certification collégiale en cybersécurité - Cégep Garneau",
    },
    description:
      "Ce programme m'a permis de développer des compétences essentielles pour  la protection, la sécurité et l'intégrité des actifs informatiques et informationnels d'une organisation.",
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
