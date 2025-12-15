import styles from "./Boxes.module.css";
import Box from "../Box/Box";

function Boxes({ boxesData }) {
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
        />
      ))}
    </div>
  );
}

export default Boxes;
