import Container from "../Container/Container";
import Footer from "./Footer";
import styles from "./FooterContent.module.css";

import twitter from "/Pictures/Twitter.svg"
import facebook from "/Pictures/Facebook.svg"
import pinterest from "/Pictures/Pinterest.svg"
import google from "/Pictures/Google.svg"

export default function FooterContent() {
  return (
    <div className={styles.footerContent}>
      <Container classes={styles.container}>
        <div className={styles.about}>
          <h1 className={styles.aboutHeadline}>about velocity</h1>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linksHeadline}>useful links</div>
          <nav className={styles.links}>
            <li className={styles.link}><a href="#">Phasellus gravida semper nisi</a></li>
            <li className={styles.link}><a href="#">Suspendisse nisl elit</a></li>
            <li className={styles.link}><a href="#">Dellentesque habitant morbi</a></li>
            <li className={styles.link}><a href="#">Etiam sollicitudin ipsum</a></li>
          </nav>
        </div>
        <div className={styles.socialSection}>
          <div className={styles.socialHeadline}>social</div>
          <nav className={styles.socialLinks}>
            <li className={styles.link}><a href="#"><img src={twitter} alt="" /> Twitter</a></li>
            <li className={styles.link}><a href="#"><img src={facebook} alt="" /> Facebook</a></li>
            <li className={styles.link}><a href="#"><img src={pinterest} alt="" /> Pinterest</a></li>
            <li className={styles.link}><a href="#"><img src={google} alt="" /> Google</a></li>
          </nav>
        </div>
      </Container>
    </div>
  );
}
