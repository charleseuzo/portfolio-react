import styles from "./Card.module.css";

function Card({ title,link, duration }) {
  return (
    <a href={link}
      className={`${styles.card }
    group card
    flex flex-col items-center justify-center
    p-6
    bg-white/10 backdrop-blur-md
    border border-white/20 rounded-xl
    shadow-xl

    transition
    duration-300 ease-[cubic-bezier(.4,0,.2,1)]

    hover:bg-white/20
    hover:-translate-y-1 hover:scale-[1.02]
    hover:shadow-2xl`} 
      data-aos="fade-up" data-aos-duration={duration}>
        <span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center group-hover:text-white/90">{title}</span>
    </a>
  );
}

export default Card;
