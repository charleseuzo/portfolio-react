import styles from "./Competences.module.css";
import Container from "../Container/Container";
import IconsGrid from "../../ui/IconsGrid";

const iconsData = [
  { icon: "fab fa-wordpress", color: "#444140", label: "WORDPRESS" },
  { icon: "fab fa-html5", color: "#E34F26", label: "HTML5" },
  { icon: "fab fa-css3-alt", color: "#1572B6", label: "CSS3" },
  { icon: "fab fa-sass", color: "#CC6699", label: "SASS" },
  { icon: "fab fa-js", color: "#F7DF1E", label: "JAVASCRIPT" },
  { icon: "fab fa-react", color: "#61DAFB", label: "REACT JS" },
  { icon: "fab fa-github", color: "#FFFFFF", label: "GITHUB" },
  { icon: "fab fa-php", color: "#777bb3", label: "PHP" },
];

function Competences() {
  return (
    <section id="competences" className={`${styles.competences} pt-5`}>
      <Container className="py-16">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl relative w-fit">
          Compétences
        </h2>
      </Container>
      <Container className="pb-5">
        <div className={styles.blackBox}>
          <IconsGrid iconsData={iconsData} />
        </div>
      </Container>
    </section>
  );
}

export default Competences;
