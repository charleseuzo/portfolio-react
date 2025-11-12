import styles from "./ExperiencePro.module.css";
import Container from "../Container/Container";
import Boxes from "../../ui/Boxes/Boxes";

const dataBox = [
    { duration: "400", image:[{src: "/images/logo-constella.svg",alt: "L'agence LB"}] },
    { duration: "400", image:[{src: "/images/logo-constella.svg",alt: "L'agence LB"}] },
    { duration: "400", image:[{src: "/images/logo-constella.svg",alt: "L'agence LB"}] },
]

function ExperiencePro() {
  return (
    <section id="experiencepro" className={`${styles.experiencepro} py-5`}>
        <Container className="py-12">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                Mes expériences professionnelles
            </h2>            
        </Container>
        <Container className="py-12">
            <Boxes boxesData={dataBox} />
        </Container>
    </section>
  );
}

export default ExperiencePro;
