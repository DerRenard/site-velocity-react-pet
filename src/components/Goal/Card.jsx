import styles from "./Card.module.css";

export default function Card({ image, headline, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="cardImage" />
      <h1 className={styles.cardHeadline}>{headline}</h1>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
