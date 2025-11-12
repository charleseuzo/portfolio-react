import styles from "./Box.module.css";

function Box({ duration, image }) {
  return (
    <div className={`${styles.box } grid grid-cols-1 md:grid-cols-2 gap-8`}  data-aos="fade-up" data-aos-duration={duration}>
        <div className="grid p-6" data-aos="fade-right">
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
            Programmeur/intégrateur de sites web chez Constella
            </h3>
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
        <div className="relative bg-gray-200 p-6 rounded overflow-hidden" data-aos="fade-left">
          {image.map((img, i) => (
            <img 
              key={i} 
              src={img.src} 
              alt={img.alt}
            />
          ))}
        </div>
    </div>
  );
}

export default Box;
