import Button from "../../../ui/Button/Button";
import Heading from "../../../ui/Heading/Heading";
import styles from "./CTA.module.scss";

function CTA() {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.cta}>
        <img src="images/cta.png" alt="cta" />

        <div className={styles.ctaContent}>
          <Heading type="h2">Ready to become that guy?</Heading>

          <Button to="/start" type="primary">
            Explore the collection
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
