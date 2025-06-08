import Container from "../Container/Container";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Container>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <li>
            <h1 className={styles.headerLogo}>velocity</h1>
          </li>
          <li className={styles.headerLinks}>
            <a href="#" className={`${styles.headerLink} ${styles.active}`}>
              Home
            </a>
            <a href="#" className={`${styles.headerLink}`}>
              Contact
            </a>
          </li>
        </nav>
      </header>
    </Container>
  );
}
