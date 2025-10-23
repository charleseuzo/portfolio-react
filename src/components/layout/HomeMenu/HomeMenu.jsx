import styles from "./HomeMenu.module.css";
import Container from "../Container/Container";
import Cards from "../../ui/Cards";

const dataHome = [
  { title: "À propos de moi", link: "#a-propos" },
  { title: "Mes expériences professionnelles", link: "#experience-pro" },
  { title: "Mes formations académiques", link: "#formation" },
  { title: "Mes compétences", link: "#competences" },
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
