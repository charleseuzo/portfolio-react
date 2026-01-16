import { useState } from "react";
import styles from "./Footer.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleCopyEmail = async () => {
    const email = "charles_paquet@hotmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setShowCopiedMessage(true);
      setTimeout(() => {
        setShowCopiedMessage(false);
      }, 2500);
    } catch (err) {
      console.error("Erreur lors de la copie:", err);
    }
  };

  return (
    <footer className={`${styles.footer} py-5 text-white`}>
      <Container className="text-center pb-6">
        <h2 className="text-4xl mb-4">Prêt à démarrer votre projet ?</h2>
        <p className="text-white/80 text-lg mb-8">
          Discutons de vos besoins et créons quelque chose d'exceptionnel
          ensemble.
        </p>
        <Link
          to="/contact/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Commencer maintenant
        </Link>
        <ul className="flex gap-6 justify-center mt-8">
          <li>
            <button
              onClick={handleCopyEmail}
              className="text-2xl hover:text-[#8AA6C1] transition-colors duration-300 cursor-pointer bg-transparent border-none"
              aria-label="Copier l'adresse email"
            >
              <i className="fa-solid fa-envelope"></i>
            </button>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/charlesp%C3%A2quet/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#8AA6C1] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/charleseuzo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#8AA6C1] transition-colors duration-300"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
        
        {/* Message de confirmation */}
        {showCopiedMessage && (
          <div className={styles.copiedMessage}>
            <i className="fa-solid fa-check-circle mr-2"></i>
            Collé dans votre presse-papiers!
          </div>
        )}
      </Container>
      <Container className="flex flex-row flex-wrap justify-center text-center">
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
