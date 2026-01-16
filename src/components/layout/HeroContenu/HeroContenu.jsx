import styles from "./HeroContenu.module.css";
import Container from "../Container/Container";

function HeroContenu({
  titre,
  imageMobile,
  imageTablet,
  imageDesktop,
  altImage = "Image de fond",
  useGradient = false,
  usePattern = false,
  children,
}) {
  // Ajouter BASE_URL aux chemins relatifs pour la production
  const getFullPath = (path) => {
    if (!path) return path;
    // Si le chemin commence par / mais n'est pas une URL complète
    if (path.startsWith("/") && !path.startsWith("//")) {
      return `${import.meta.env.BASE_URL}${path.slice(1)}`;
    }
    return path;
  };

  const fullImageMobile = getFullPath(imageMobile);
  const fullImageTablet = getFullPath(imageTablet);
  const fullImageDesktop = getFullPath(imageDesktop);

  return (
    <section
      className={`${styles.heroContenu} ${
        useGradient ? styles.gradientBg : ""
      } ${
        usePattern ? styles.patternBg : ""
      } relative flex items-center justify-center text-white`}
    >
      {!useGradient && !usePattern && (
        <>
          <picture>
            {fullImageDesktop && (
              <source media="(min-width:1024px)" srcSet={fullImageDesktop} />
            )}
            {fullImageTablet && (
              <source media="(min-width:640px)" srcSet={fullImageTablet} />
            )}
            <img
              src={fullImageMobile || fullImageDesktop || fullImageTablet}
              alt={altImage}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>
        </>
      )}
      {usePattern && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
      )}
      <Container className="relative z-10 text-start px-4">
        <h1
          className="text-shadow text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          data-aos="fade-in"
        >
          {titre}
        </h1>
        {children && (
          <div className="flex flex-row flex-wrap content-center justify-center gap-x-5 gap-y-3">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}

export default HeroContenu;
