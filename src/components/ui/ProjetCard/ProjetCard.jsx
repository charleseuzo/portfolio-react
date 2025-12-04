import { Link } from "react-router-dom";
import styles from "./ProjetCard.module.css";

function resolveImageUrl(src) {
  if (!src) return "";
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const clean = src.replace(/^\.\//, "").replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}

function ProjetCard({ projet, backgroundColor }) {
  const iconUrl = resolveImageUrl(projet.image);
  const bgColor = backgroundColor || projet.backgroundColor || "#0b0f14";
  return (
    <Link
      to={`/projets/${projet.slug}/`}
      className={styles.projetCard}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.cardContent}>
        {iconUrl && (
          <div className={styles.iconWrap}>
            <img
              src={iconUrl}
              alt={projet.titre}
              className={styles.iconImg}
              loading="lazy"
            />
          </div>
        )}
        <div className={styles.textBlock}>
          <h3 className={styles.titre}>{projet.titre}</h3>
          <p className={styles.categorie}>{projet.categorie}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjetCard;
