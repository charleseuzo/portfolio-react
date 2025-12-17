import styles from "./Boxes.module.css";
import Box from "../Box/Box";
import { useState } from "react";

function Boxes({ boxesData }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={`${styles.boxes} flex flex-wrap content-center justify-between items-start space-y-10`}
    >
      {boxesData.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          texte={box.texte}
          duration={box.duration}
          image={box.image}
          date={box.date}
          location={box.location}
          description={box.description}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Boxes;
