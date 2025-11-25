import styles from "./Hero.module.css";
import Container from "../Container/Container";

function Hero() {
  return (
    <section
      className={`${styles.hero} relative min-h-[calc(100vh-64px)] flex items-center justify-center text-white`}
    >
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/public/images/hero-desktop.jpg"
        />
        <source media="(min-width:640px)" srcSet="/images/hero-tablet.jpg" />
        <img
          src="/images/hero-mobile.jpg"
          alt="Photo de fond du hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </picture>
      <Container className="relative z-10 text-center px-4">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          data-aos="fade-in"
        >
          <span className="block">Charles Pâquet </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Développeur Front-End
          </span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
          Passionné par le développement web moderne, je transforme vos idées en
          applications performantes et élégantes.
        </p>
        <div className="flex flex-row flex-wrap content-center justify-center gap-x-5">
          <a
            href="/projets/"
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Voir mes projets
          </a>
          <a
            href="public/content/files/CV_Charles Pâquet 2025.pdf"
            target="_blank"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Télécharger mon CV</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
