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
    { name: "À propos", hash: "a-propos" },
    { name: "Mes projets", hash: "mes-projets" },
    { name: "Expériences", hash: "experiencepro" },
    { name: "Formations", hash: "formations" },
    { name: "Compétences", hash: "competences" },
  ];

  return (
    <header
      className={`${styles.header} py-5 text-white text-lg fixed top-0 left-0 w-full shadow z-50`}
    >
      <Container>
        {/* Mobile & Tablet Navigation */}
        <nav className="flex justify-between items-center lg:hidden">
          <Link to="/" className="w-1/2 md:w-1/3" onClick={closeMobileMenu}>
            <img
              src={`${import.meta.env.BASE_URL}images/charles_paquet_logo.png`}
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
            <div className={styles.mobileMenuContact}>
              <Link
                to="/contact/"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all duration-300"
                onClick={closeMobileMenu}
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="justify-between hidden lg:flex lg:flex-wrap">
          <Link to="/" className="w-1/5">
            <img
              src={`${import.meta.env.BASE_URL}images/charles_paquet_logo.png`}
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
          <Link
            to="/contact/"
            className="px-6 py-2 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contactez-moi
          </Link>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
