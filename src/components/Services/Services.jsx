import Container from "../Container/Container";
import Service from "./Service";
import styles from "./Services.module.css";

import serviceImage1 from "/Pictures/service_1.png";
import serviceImage2 from "/Pictures/service_2.png";

export default function Services() {
  const servicesArray = [
    {
      image: serviceImage1,
      headline: "SERVICES one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.",
    },
    {
      image: serviceImage2,
      headline: "SERVICES two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.",
    },
  ];
  return (
    <div className={styles.servicesBackground}>
      <Container classes={styles.container}>
        <h1 className={styles.serviceHeadline}>services</h1>
        <h2 className={styles.serviceSubHeadline}>This is some text inside of a div block.</h2>
        <div className={styles.services}>
          {servicesArray.map((el, ind) => (
            <Service
              key={ind}
              image={el.image}
              headline={el.headline}
              description={el.description}
              ServiceButton={el.button}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
