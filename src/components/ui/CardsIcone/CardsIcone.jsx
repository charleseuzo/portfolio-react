import CardIcone from "../CardIcone/CardIcone";
import styles from "./CardsIcone.module.css";
import { useState } from "react";

function CardsIcone({ items = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={`${styles.cards} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6`}
    >
      {items.map((it, idx) => (
        <CardIcone
          key={idx}
          school_name={it.school_name}
          duration={it.duration}
          programme={it.programme}
          date={it.date}
          image={it.image}
          description={it.description}
          isExpanded={expandedIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}

export default CardsIcone;
