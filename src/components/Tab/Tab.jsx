import Container from "../Container/Container";
import styles from "./Tab.module.css";
import tabImage from "/Pictures/tabSection.png";

export default function Tab() {
  return (
    <Container classes={styles.container}>
      <h1 className={styles.tabHeadline}>Tab Section</h1>
      <h2 className={styles.tabSubHeadline}>
        This is some text inside of a div block.
      </h2>
      <div className={styles.tabButtons}>
        <button className={`${styles.button} ${styles.active}`}>
          Tab Button 1
        </button>
        <button className={`${styles.button}`}>Tab Button 2</button>
        <button className={`${styles.button}`}>Tab Button 3</button>
      </div>
      <img className={styles.tabImage} src={tabImage} alt="" />
      <h1 className={styles.title}>Some Title Here</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </p>
    </Container>
  );
}
