import ProjetCard from "../ProjetCard";
import styles from "./DetailsProjets.module.css";

// Données d'exemple pour vos projets
// Vous pourrez les déplacer dans un fichier séparé plus tard
const projetsData = [
  {
    id: 1,
    slug: "pickleball-rn",
    titre: "Pickleball R-N",
    categorie: "Site Web Professionnel",
    image: "./images/logo_pickleball_rouyn-noranda.jpg",
    backgroundColor: "#1b4b8d",
  },
];

function DetailsProjets({ projets = projetsData }) {
  return (
    <section className={styles.detailsProjets}>
      <div className={styles.grid}>
        {projets.map((projet) => (
          <ProjetCard key={projet.id} projet={projet} />
        ))}
      </div>
    </section>
  );
}

export default DetailsProjets;
