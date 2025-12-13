import styles from "./CardIcone.module.css";

function CardIcone({
  school_name,
  duration = 600,
  programme = null,
  date = null,
  image = null,
  description = null,
  isExpanded = false,
  onToggle = () => {},
}) {
  const handleClick = () => {
    if (description) {
      onToggle();
    }
  };

  return (
    <div
      className={`${styles.cardIcone} ${description ? styles.clickable : ""}`}
      data-aos="fade-up"
      data-aos-duration={duration}
      onClick={handleClick}
      role={description ? "button" : undefined}
      tabIndex={description ? 0 : undefined}
      onKeyDown={(e) => description && e.key === "Enter" && handleClick()}
    >
      <div className={styles.visual}>
        <div className={styles.mainContent}>
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
        {description && (
          <div
            className={`${styles.descriptionWrap} overflow-hidden transition-all duration-500 ease-in-out`}
            style={{
              maxHeight: isExpanded ? "500px" : "0",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <div className="px-4 pb-4 pt-2 text-white/80 text-sm">
              {description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardIcone;
