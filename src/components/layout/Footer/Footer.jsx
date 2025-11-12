import styles from "./Footer.module.css";
import Container from "../Container/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} py-5 text-white`}>
      <Container className="flex flex-row flex-wrap justify-center">
        <p>© {currentYear} Tous droits réservés - Charles Pâquet</p>
      </Container>
    </footer>
  );
}

export default Footer;
