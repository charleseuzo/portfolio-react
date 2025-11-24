import styles from "./Header.module.css";
import Container from "../Container/Container";

function Header() {
  return (
    <header
      className={`${styles.header} py-5 text-white text-lg fixed top-0 left-0 w-full shadow z-50`}
    >
      <Container>
        <nav className="flex flex-wrap justify-between">
          <a href="/" className="w-1/5">
            <img
              src="/images/charles_paquet_logo.jpg"
              alt="Photo de Charles"
              className="object-cover"
              loading="lazy"
            />
          </a>
          <ul className="flex gap-4">
            <li>
              <a href="#a-propos">À propos de moi</a>
            </li>
            <li>
              <a href="#experiencepro">Expériences professionelles</a>
            </li>
            <li>
              <a href="#formations">Formations académiques</a>
            </li>
            <li>
              <a href="#competences">Compétences</a>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <a href="mailto:charles_paquet@hotmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/charlesp%C3%A2quet/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
