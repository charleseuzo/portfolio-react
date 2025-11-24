import styles from "./Formations.module.css";
import Container from "../Container/Container";

function Formations() {
  return (
    <section id="formations" className={`${styles.formations} py-5`}>
      <Container className="py-12"></Container>
    </section>
  );
}

export default Formations;
