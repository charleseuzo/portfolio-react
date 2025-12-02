import styles from "./Footer.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} py-5 text-white`}>
      <Container className="flex flex-row flex-wrap justify-center">
        <p>
          © {currentYear} |{" "}
          <Link
            to="/politique-de-confidentialite/"
            className="hover:text-white/70 transition-colors duration-200"
          >
            Politique de confidentialité
          </Link>{" "}
          | Tous droits réservés - Charles Pâquet
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
