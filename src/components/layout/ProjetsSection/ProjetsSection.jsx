import { Link } from "react-router-dom";
import styles from "./ProjetsSection.module.css";
import Container from "../Container/Container";
import ProjetCard from "../../ui/ProjetCard";
import AOS from "aos";
import { useEffect } from "react";

// Aperçu des projets pour la page d'accueil (limité à 3)
const projetsPreview = [
  {
    id: 1,
    slug: "pickleball-rn",
    titre: "Pickleball R-N",
    categorie: "Site Web Professionnel",
    image: "./images/logo_pickleball_rouyn-noranda.jpg",
    backgroundColor: "#1b4b8d",
  },
];

function ProjetsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="mes-projets" className={`${styles.projetsSection} pt-5`}>
      <Container className="pt-16 pb-12">
        <h2
          className="text-white text-3xl sm:text-4xl lg:text-5xl mb-8"
          data-aos="fade-up"
        >
          Mes projets
        </h2>

        <div className={styles.flexContainer} data-aos="fade-up" data-aos-delay="100">
          {projetsPreview.map((projet) => (
            <div key={projet.id} className={styles.projetWrapper}>
              <ProjetCard projet={projet} />
            </div>
          ))}
          
          <div className={styles.ctaWrapper}>
            <Link
              to="/projets/"
              className={styles.ctaButton}
            >
              Voir tous mes projets
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjetsSection;
