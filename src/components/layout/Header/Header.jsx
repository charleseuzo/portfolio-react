import styles from "./Header.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const navItems = [
    { name: "À propos de moi", hash: "a-propos" },
    { name: "Expériences professionelles", hash: "experiencepro" },
    { name: "Formations académiques", hash: "formations" },
    { name: "Compétences", hash: "competences" },
  ];

  // Navigation via React Router to always point to Home + hash.
  // Produces clean href like "/#formations" (dev) or "/portfolio-react/#formations" (prod).

  return (
    <header
      className={`${styles.header} py-5 text-white text-lg fixed top-0 left-0 w-full shadow z-50`}
    >
      <Container>
        {/* Mobile Navigation */}
        <nav className="flex justify-between items-center md:hidden">
          <Link to="/" className="w-1/2" onClick={closeMobileMenu}>
            <img
              src={`${import.meta.env.BASE_URL}images/charles_paquet_logo.jpg`}
              alt="Photo de Charles"
              className="object-cover"
              loading="lazy"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className={styles.hamburger}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              }`}
            ></i>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuList}>
              {navItems.map((item) => (
                <li key={item.hash}>
                  <Link
                    to={{ pathname: "/", hash: `#${item.hash}` }}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.mobileMenuSocial}>
              <li>
                <a
                  href="mailto:charles_paquet@hotmail.com"
                  onClick={closeMobileMenu}
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/charlesp%C3%A2quet/"
                  target="_blank"
                  onClick={closeMobileMenu}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/charleseuzo/"
                  target="_blank"
                  onClick={closeMobileMenu}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="justify-between hidden md:flex md:flex-wrap">
          <Link to="/" className="w-1/5">
            <img
              src={`${import.meta.env.BASE_URL}images/charles_paquet_logo.jpg`}
              alt="Photo de Charles"
              className="object-cover"
              loading="lazy"
            />
          </Link>
          <ul className={`${styles.menu_desktop} flex gap-4`}>
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link to={{ pathname: "/", hash: `#${item.hash}` }}>
                  {item.name}
                </Link>
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
