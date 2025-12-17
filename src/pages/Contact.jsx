import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroContenu from "../components/layout/HeroContenu/HeroContenu";
import Container from "../components/layout/Container";
import ContactForm from "../components/ui/ContactForm";

function Contact() {
  return (
    <>
      <link
        rel="canonical"
        href="https://charleseuzo.github.io/portfolio-react/contact/"
      />

      <title>Contact | Charles Pâquet</title>
      <meta
        name="description"
        content="Contactez Charles Pâquet pour discuter de projets, d'opportunités professionnelles ou de collaborations en développement web et logiciel."
      />
      <meta
        name="keywords"
        content="contact développeur, Charles Pâquet, développeur web, collaboration, opportunités professionnelles, React"
      />
      <meta property="og:title" content="Contact | Charles Pâquet" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Prenez contact avec Charles Pâquet pour discuter de projets, de collaborations ou d'opportunités en développement web."
      />
      <meta
        property="og:image"
        content="https://charleseuzo.github.io/portfolio-react/images/charles_a-propos.jpg"
      />
      <meta
        property="og:url"
        content="https://charleseuzo.github.io/portfolio-react/contact/"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | Charles Pâquet" />
      <meta
        name="twitter:description"
        content="Discutons de projets ou d'opportunités professionnelles en développement web."
      />
      <meta
        name="twitter:image"
        content="https://charleseuzo.github.io/portfolio-react/images/charles_a-propos.jpg"
      />

      <Header />
      <main className="pt-[64px] bg-black min-h-screen">
        <HeroContenu
          titre="Contactez-moi"
          imageMobile="/images/hero_contact-mobile.jpg"
          imageTablet="/images/hero_contact-tablet.jpg"
          imageDesktop="/images/hero_contact-desktop.jpg"
          altImage="Contact"
        />

        <Container className="py-12">
          <section className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Vous avez un projet en tête ? N'hésitez pas à me contacter pour
                discuter de vos besoins. Je serais ravi de vous aider à
                concrétiser vos idées.
              </p>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <ContactForm />
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
