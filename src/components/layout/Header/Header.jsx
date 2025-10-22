import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.header} py-5 text-white fixed top-0 left-0 w-full shadow z-50`}>
      <nav className="container flex flex-wrap justify-between">
        <h1>Salut gros cave</h1>
        <ul className="flex gap-4">
          <li>À propos de moi</li>
          <li>Expériences professionelles</li>
          <li>Formations académiques</li>
          <li>Compétences</li>
        </ul>
        <ul className="flex gap-4">
          <li><a href="mailto:charles_paquet@hotmail.com"><i className="fa-solid fa-envelope"></i></a></li>
          <li><a href="https://www.linkedin.com/in/charlesp%C3%A2quet/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>        
      </nav>
    </header>
  );
}

export default Header;
