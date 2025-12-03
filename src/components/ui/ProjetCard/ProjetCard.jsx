import { Link } from "react-router-dom";
import styles from "./ProjetCard.module.css";

function ProjetCard({ projet }) {
  return (
    <Link
      to={`/projets/${projet.slug}`}
      className={styles.projetCard}
      style={{ backgroundImage: `url(${projet.image})` }}
    >
      <div className={styles.overlay}>
        <h3 className={styles.titre}>{projet.titre}</h3>
        <p className={styles.categorie}>{projet.categorie}</p>
      </div>
    </Link>
  );
}

export default ProjetCard;
