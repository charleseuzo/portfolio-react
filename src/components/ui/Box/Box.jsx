import styles from "./Box.module.css";

function Box({ title, texte, duration, image }) {
  return (
    <div
      className={`${styles.box} grid grid-cols-1 md:grid-cols-3 gap-8 p-6 w-full rounded-xl border`}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="grid p-6 col-span-2">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <div className="text-white font-medium">{texte}</div>
      </div>
      <div className={`relative bg-white p-6 rounded overflow-hidden ${styles.imageWrap}`}>
        {image.map((img, i) => (
          <img key={i} className={styles.image} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export default Box;
