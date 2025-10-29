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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Charles Pâquet
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Développeur Front-End
        </h2>
      </Container>
    </section>
  );
}

export default Hero;
