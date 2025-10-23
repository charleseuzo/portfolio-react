import styles from "./Cards.module.css";
import Card from "../Card/Card";



function Cards({ cardsData }) {
  return (
    <div className={`${styles.cards} flex flex-wrap content-center justify-between items-start`}>
        {cardsData.map((card, index) => (
            <Card
                key={index}
                title={card.title}
                link={card.link}
            />
        ))}
    </div>
  );
}

export default Cards;
