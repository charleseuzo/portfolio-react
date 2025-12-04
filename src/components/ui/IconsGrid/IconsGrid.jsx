import styles from "./IconsGrid.module.css";
import IconItem from "../IconItem/IconItem";

function IconsGrid({ iconsData }) {
  return (
    <div className={styles.iconsGrid}>
      {iconsData.map((iconData, index) => (
        <IconItem
          key={index}
          icon={iconData.icon}
          color={iconData.color}
          label={iconData.label}
        />
      ))}
    </div>
  );
}

export default IconsGrid;
