import styles from "./Header.module.css";
import Container from "../Container/Container";

function Header() {
  const navItems = [
    { name: "À propos de moi", href: "#a-propos" },
    { name: "Expériences professionelles", href: "#experiencepro" },
    { name: "Formations académiques", href: "#formations" },
    { name: "Compétences", href: "#competences" },
  ];

  return (
    <header
      className={`${styles.header} py-5 text-white text-lg fixed top-0 left-0 w-full shadow z-50`}
    >
      <Container>
        <nav className="flex flex-wrap justify-between">
          <a href="/" className="w-1/5">
            <img
              src="./images/charles_paquet_logo.jpg"
              alt="Photo de Charles"
              className="object-cover"
              loading="lazy"
            />
          </a>
          <ul className={`${styles.menu_desktop} flex gap-4`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
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
            <li>
              <a href="https://github.com/charleseuzo/" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
