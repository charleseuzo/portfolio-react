import styles from "./Card.module.css";

function Card({ title,link }) {
  return (
    <a href={link} className={`${styles.card } flex flex-wrap content-center justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
        <h2 className="mb-2 text-4xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{title}</h2>
    </a>
  );
}

export default Card;
