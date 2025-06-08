import Button from "../Button/Button";
import styles from "./Service.module.css";

export default function Service({ image, headline, description }) {
  return (
    <div className={styles.service}>
      <img src={image} alt="serviceImage" className={styles.serviceImage}/>
      <h1 className={styles.serviceHeadline}>{headline}</h1>
      <p className={styles.serviceDescription}>{description}</p>
      <Button>Learn more</Button>
    </div>
  );
}
