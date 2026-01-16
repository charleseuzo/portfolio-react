import styles from "./Card.module.css";

function Card({ title, link, duration }) {
  return (
    <a
      href={link}
      className={styles.card}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div
        className={`${styles.visual} group flex flex-col items-center justify-center p-6 border border-white/20 rounded-xl shadow-xl transition duration-300 ease-[cubic-bezier(.4,0,.2,1)]`}
      >
        <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white tracking-tight text-center group-hover:text-white/90">
          {title}
        </span>
      </div>
    </a>
  );
}

export default Card;
