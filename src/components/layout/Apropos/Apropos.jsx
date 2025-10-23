import styles from "./Apropos.module.css";
import Container from "../Container/Container";

function Apropos() {
  return (
    <section id="a-propos" className={`${styles.apropos} py-5`}>
      <Container className="py-12"></Container>
    </section>
  );
}

export default Apropos;
