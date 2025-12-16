import styles from "./ProjetsSection.module.css";
import Container from "../Container/Container";
import AOS from "aos";
import { useEffect } from "react";

function ProjetsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="mes-projets" className={`${styles.projetsSection} pt-5`}>
      <Container className="pt-16 pb-5">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-8" data-aos="fade-up">
          Mes projets
        </h2>
        {/* Contenu à ajouter ici */}
      </Container>
    </section>
  );
}

export default ProjetsSection;
