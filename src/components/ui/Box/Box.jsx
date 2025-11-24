import { useEffect, useState } from "react";
import styles from "./Box.module.css";

function Box({ title, textePath, duration, image }) {
  const [texte, setTexte] = useState("");

  useEffect(() => {
    fetch(textePath)
      .then((res) => res.text())
      .then(setTexte);
  }, [textePath]);

  return (
    <div
      className={`${styles.box} grid grid-cols-1 md:grid-cols-3 gap-8 py-6 w-full`}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="grid p-6 col-span-2">
        <h3 className="text-white text-1xl sm:text-2xl lg:text-3xl font-bold pb-4">
          {title}
        </h3>
        <div
          className="text-white text-lg"
          dangerouslySetInnerHTML={{ __html: texte }}
        ></div>
      </div>
      <div className="relative bg-gray-200 p-6 rounded overflow-hidden">
        {image.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export default Box;
