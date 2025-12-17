import styles from "./Apropos.module.css";
import Container from "../Container/Container";
import AOS from "aos";
import { useEffect } from "react";

function Apropos() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="a-propos" className={`${styles.apropos} pt-5`}>
      <Container className="pt-16 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          <div className="col-span-1 order-last md:order-first">
            <img
              src="./images/charles_a-propos.jpg"
              alt="Photo de Charles"
              loading="lazy"
              className="rounded-2xl object-cover 
                transition-all duration-500 
                group-hover:scale-105
              "
            />
          </div>
          <div
            className="text-white flex flex-col gap-6 col-span-3 order-first md:order-last"
            data-aos="fade-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl relative w-fit">
              À propos de moi
              {/* <span className="block h-1 w-full mt-2 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] rounded-full animate-pulse"></span> */}
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              Développeur et intégrateur Web basé dans la région de Québec, je
              conçois des sites fiables, performants et bien structurés, en
              gardant toujours une vision globale des projets.
            </p>
            <p>
              Issu d'une formation en informatique appliquée et complétée par
              une certification en cybersécurité, j'ai développé une solide
              capacité d'analyse, un grand souci du détail et une approche
              orientée solutions. J'interviens autant sur l'intégration
              front-end que sur le développement WordPress, la mise en ligne, la
              gestion d'hébergement, les noms de domaine, la maintenance et la
              sécurité.
            </p>
            <p>
              Polyvalent et autonome, je travaille avec différentes plateformes
              et technologies (WordPress, sites statiques, boutiques en ligne,
              JavaScript, React) et je m'intéresse activement aux technologies
              IA. Curieux et toujours en apprentissage, j'aime collaborer avec
              des gens qui cherchent des solutions efficaces, durables et bien
              pensées.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Apropos;
