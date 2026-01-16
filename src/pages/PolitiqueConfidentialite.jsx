import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroContenu from "../components/layout/HeroContenu/HeroContenu";
import Container from "../components/layout/Container";

function PolitiqueConfidentialite() {
  return (
    <>
      <link
        rel="canonical"
        href="https://charleseuzo.github.io/portfolio-react/politique-de-confidentialite/"
      />

      <title></title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:title" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />

      <Header />
      <main className="pt-[64px] min-h-screen">
        <HeroContenu
          titre="Politique de confidentialité"
          imageMobile="/images/hero_politique-mobile.jpg"
          imageTablet="/images/hero_politique-tablet.jpg"
          imageDesktop="/images/hero_politique-desktop.jpg"
          altImage="Politique de confidentialité"
        />

        <Container className="py-12">
          <div className="prose prose-invert max-w-4xl">
            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Introduction
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Nous respectons votre vie privée et nous engageons à protéger
                vos données personnelles. Cette politique de confidentialité
                explique comment nous collectons, utilisons et protégeons vos
                informations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                1. Données Collectées
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Nous pouvons collecter les informations suivantes :
              </p>
              <ul className="list-disc list-inside text-white/80 text-lg space-y-2">
                <li>
                  Informations de contact (nom, email) si vous nous contactez
                </li>
                <li>
                  Données de navigation (adresse IP, navigateur, pages visitées)
                </li>
                <li>
                  Cookies et technologies similaires pour améliorer votre
                  expérience
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                2. Utilisation des Données
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-white/80 text-lg space-y-2 mt-4">
                <li>Répondre à vos messages et requêtes</li>
                <li>Améliorer notre site web</li>
                <li>Analyser l'utilisation du site</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                3. Protection des Données
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Nous mettons en place des mesures de sécurité appropriées pour
                protéger vos données contre l'accès non autorisé, la
                modification, la divulgation ou la destruction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                4. Cookies
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience
                utilisateur. Vous pouvez contrôler les cookies via les
                paramètres de votre navigateur.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                5. Tiers
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Nous ne partageons pas vos données personnelles avec des tiers
                sans votre consentement, sauf si la loi l'exige.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                6. Vos Droits
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Vous avez le droit d'accéder, de rectifier ou de supprimer vos
                données personnelles. Pour exercer ces droits, veuillez nous
                contacter.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                7. Modifications de cette Politique
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Nous nous réservons le droit de modifier cette politique à tout
                moment. Les modifications entreront en vigueur dès leur
                publication sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-semibold mb-4">
                8. Contact
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Pour toute question concernant cette politique de
                confidentialité, veuillez nous contacter via le formulaire de
                contact sur notre site.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default PolitiqueConfidentialite;
