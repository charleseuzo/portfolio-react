import styles from "./IconItem.module.css";

function IconItem({ icon, color, label }) {
  return (
    <div className={styles.iconItem}>
      <i className={icon} style={{ color: color, fontSize: "3.5rem" }}></i>
      <span>{label}</span>
    </div>
  );
}

export default IconItem;
