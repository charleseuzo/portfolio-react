import styles from "./HomeMenu.module.css";
import Container from "../Container/Container";
import Cards from "../../ui/Cards";

const dataHome = [
  { title: "À propos de moi", link: "#a-propos", duration: "400" },
  { title: "Mes projets", link: "#mes-projets", duration: "600" },
  {
    title: "Mes expériences professionnelles",
    link: "#experiencepro",
    duration: "800",
  },
  {
    title: "Mes formations académiques",
    link: "#formations",
    duration: "1000",
  },
  { title: "Mes compétences", link: "#competences", duration: "1200" },
];

function HomeMenu() {
  return (
    <section className={`${styles.homemenu} pt-5 hidden md:block`}>
      <Container className="pt-16 pb-5">
        <Cards cardsData={dataHome} />
      </Container>
    </section>
  );
}

export default HomeMenu;
