import styles from "./Box.module.css";
import { useState } from "react";

function Box({ title, texte, duration, image, date, location, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.box} items-center grid grid-cols-1 md:grid-cols-3 gap-8 p-6 w-full rounded-xl border transition-all duration-500 cursor-pointer`}
      data-aos="fade-up"
      data-aos-duration={duration}
      onClick={toggleExpand}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggleExpand()}
    >
      <div className="col-span-2 order-last md:order-first">
        <div className="p-6">
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            {(date || location) && (
              <div className="text-sm text-gray-400 flex flex-wrap gap-2">
                {date && <span>{date}</span>}
                {date && location && <span>•</span>}
                {location && <span>{location}</span>}
              </div>
            )}
          </div>
          {description && (
            <p className="text-gray-300 text-sm italic mt-3">{description}</p>
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${styles.textContent}`}
          style={{
            maxHeight: isExpanded ? "1000px" : "0",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="px-6 pb-6 text-white font-medium">{texte}</div>
        </div>
      </div>
      <div
        className={`relative justify-self-center lg:justify-self-end bg-white p-6 rounded overflow-hidden order-first md:order-last ${styles.imageWrap}`}
      >
        {image.map((img, i) => (
          <img key={i} className={styles.image} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export default Box;
