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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="">
            <img
              src="./images/charles_a-propos.webp"
              alt="Photo de Charles"
              loading="lazy"
              className="rounded-2xl object-cover 
                transition-all duration-500 
                group-hover:scale-105
              "
            />
          </div>
          <div className="text-white flex flex-col gap-6" data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative w-fit">
              À propos de moi
              <span className="block h-1 w-full mt-2 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] rounded-full animate-pulse"></span>
            </h2>

            <p className="text-lg leading-relaxed text-white/90">
              Développeur web passionné, j'aime créer des interfaces propres,
              fluides et efficaces. Mon approche est centrée sur l'expérience
              utilisateur, la performance et le souci du détail.
              <br />
              <br />
              Je travaille principalement avec **React**, **Vite** et
              **TailwindCSS**, et j'adore transformer des idées en projets
              concrets, modernes et élégants.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Apropos;
