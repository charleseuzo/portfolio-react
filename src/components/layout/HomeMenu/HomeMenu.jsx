import styles from "./HomeMenu.module.css";
import Container from "../Container/Container";
import Cards from "../../ui/Cards";

const dataHome = [
  { title: "À propos de moi", link: "#a-propos", duration: "400" },
  {
    title: "Mes expériences professionnelles",
    link: "#experiencepro",
    duration: "600",
  },
  { title: "Mes formations académiques", link: "#formations", duration: "800" },
  { title: "Mes compétences", link: "#competences", duration: "1000" },
];

function HomeMenu() {
  return (
    <section className={`${styles.homemenu} py-5`}>
      <Container className="py-12">
        <Cards cardsData={dataHome} />
      </Container>
    </section>
  );
}

export default HomeMenu;
