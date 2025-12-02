import styles from "./Competences.module.css";
import Container from "../Container/Container";

function Competences() {
  return (
    <section id="competences" className={`${styles.competences} pt-5`}>
      <Container className="py-16">
        <h2 className="text-white text-3xl font-bold mb-6">Compétences</h2>
        <div className={styles.blackBox}>
          {/* Contenu des compétences ici */}
        </div>
      </Container>
    </section>
  );
}

export default Competences;
