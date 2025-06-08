import Container from "../Container/Container"
import Button from "../Button/Button"
import styles from "./Hero.module.css"

export default function Hero() {
  return <div className={styles.heroBackground}>
    <Container classes={styles.container}>
      <h1 className={styles.heroHeadline}>This is Velocity</h1>
      <div className={styles.heroButtons}>
        <Button classname={styles.signUp}>sign up</Button>
        <Button>Learn more</Button>
      </div>
    </Container>
  </div>
}