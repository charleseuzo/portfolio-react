import CardIcone from "../CardIcone/CardIcone";
import styles from "./CardsIcone.module.css";

function CardsIcone({ items = [] }) {
  return (
    <div
      className={`${styles.cards} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
    >
      {items.map((it, idx) => (
        <CardIcone
          key={idx}
          school_name={it.school_name}
          duration={it.duration}
          programme={it.programme}
          date={it.date}
          image={it.image}
        />
      ))}
    </div>
  );
}

export default CardsIcone;
