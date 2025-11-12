import styles from "./Image.module.css";

function Image({ image }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className={`${styles.image} object-cover`}
      loading="lazy"
    />
  );
}

export default Image;