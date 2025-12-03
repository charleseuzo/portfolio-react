import styles from "./CardIcone.module.css";

function CardIcone({
  school_name,
  duration = 600,
  programme = null,
  date = null,
  image = null,
}) {
  return (
    <div
      className={styles.cardIcone}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className={styles.visual}>
        <div className={`${styles.imageWrap}`}>
          {image && (
            <img
              className={styles.image}
              src={image.src}
              alt={image.alt || ""}
            />
          )}
        </div>
        <div className={`${styles.content}`}>
          <h3 className="text-white text-xl font-semibold mb-2">
            {school_name}
          </h3>
          {programme ? (
            <div className="text-white/90 text-base mb-1">{programme}</div>
          ) : null}
          {date ? <div className="text-white/70 text-sm">{date}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default CardIcone;
