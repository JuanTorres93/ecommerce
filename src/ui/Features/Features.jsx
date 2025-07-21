import Heading from "../Heading/Heading";
import styles from "./Features.module.scss";

function Features() {
  return (
    <section className={styles.featuresSection}>
      <Heading type="h2">How Getiow works</Heading>

      <div className={styles.features}>
        <Step
          number={1}
          title="Discover"
          description="Connects to curated APIs and marketplaces that most people don’t even know exist"
          imgSrc="/images/discover.png"
        />
        <Step
          title="Filter"
          number={2}
          description="Filters the noise and finds the gems"
          imgSrc="/images/things.png"
        />
        <Step
          title=" Deliver"
          number={3}
          description="Delivers them to you in a clean, smooth, minimal interface"
          imgSrc="/images/deliver.png"
        />
      </div>
    </section>
  );
}

function Step({ number, description, title, imgSrc }) {
  const displayNumber = number < 10 ? `0${number}` : number;

  return (
    <div className={styles.step}>
      <h3 className={styles.step__number}>{displayNumber}</h3>
      <h4 className={styles.step__title}>{title}</h4>

      <div className={styles.step__content}>
        <span className={styles.step__description}>{description}</span>

        <img src={imgSrc} alt={`Step ${number} image`} />
      </div>
    </div>
  );
}

export default Features;
