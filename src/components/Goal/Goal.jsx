import Container from "../Container/Container";
import Card from "./Card";
import styles from "./Goal.module.css";

import card1 from "/Pictures/card1.svg";
import card2 from "/Pictures/card2.svg";
import card3 from "/Pictures/card3.svg";

export default function Goal() {
  const cardsArray = [
    {
      cardImage: card1,
      cardHeadline: "Graphic Design",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      cardImage: card2,
      cardHeadline: "Awesome code",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      cardImage: card3,
      cardHeadline: "free template",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
      <Container classes={styles.container}>
        <h1 className={styles.goalHeadline}>what we do</h1>
        <h2 className={styles.goalSubHeadline}>
          This is some text inside of a div block.
        </h2>
        <div className={styles.cards}>
          {cardsArray.map((el, ind) => (
            <Card
              key={ind}
              image={el.cardImage}
              headline={el.cardHeadline}
              description={el.cardDescription}
            />
          ))}
        </div>
      </Container>
  );
}
