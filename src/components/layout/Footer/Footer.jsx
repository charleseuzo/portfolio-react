import styles from "./Footer.module.css";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className={`${styles.footer} py-5 text-white`}>
      <Container className="flex flex-row flex-wrap justify-between"></Container>
    </footer>
  );
}

export default Footer;
