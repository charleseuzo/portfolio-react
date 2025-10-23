import styles from "./HomeMenu.module.css";
import Cards from "../../ui/Cards";

const dataHome = [
  { title: 'À propos de moi', link: '#a-propos' },
  { title: 'Mes expériences professionnelles', link: '#experience-pro' },
  { title: 'Mes formations académiques', link: '#formation' },
  { title: 'Mes compétences', link: '#competences' },
];

function HomeMenu() {
  return (
    <section className={`${styles.homemenu}`}>
        <div className="container py-5">
            <Cards cardsData={dataHome} />
        </div>
    </section>
  );
}

export default HomeMenu;
