import styles from "./Apropos.module.css";
import Container from "../Container/Container";

function Apropos() {
  return (
    <section id="a-propos" className={`${styles.apropos} py-5`}>
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative p-6 overflow-hidden" data-aos="fade-right">
            <img
              src="/images/charles_a-propos.webp"
              alt="Photo de Charles"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid p-6" data-aos="fade-left">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
              À propos de moi
            </h2>
            <p className="text-white text-lg">
              Viande à chien de cochonnerie de saintes fesses de crucifix de
              purée de batince de sacréfice de colon d'estique de charrue
              d'étole de saint-cimonaque de sapristi de calvinouche de sacristi
              de câline de cossin de boswell de cul de Jésus de plâtre de
              cimonaque de caltor de doux Jésus d'enfant d'chienne de mautadine
              de marde de crisse de câline de bine de mangeux d'marde de
              calvaire de Jésus Marie Joseph de verrat de patente à gosse de
              calvince de câliboire de ciboire de torvisse de cibouleau de
              gériboire de saint-sacrament.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Apropos;
