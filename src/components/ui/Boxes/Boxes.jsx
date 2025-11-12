import styles from "./Boxes.module.css";
import Box from "../Box/Box";


function Boxes({ boxesData }) {
  return (
    <div className={`${styles.boxes} flex flex-wrap content-center justify-between items-start`}>
        {boxesData.map((box, index) => (
            <Box
                key={index}
                duration={box.duration}
                image={box.image}
            />
        ))}
    </div>
  );
}

export default Boxes;
