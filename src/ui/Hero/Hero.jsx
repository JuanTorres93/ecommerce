import styles from "./Hero.module.scss";

import Button from "../Button/Button";

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.hero}>
        <img
          className={styles.heroImg}
          src="images/hero.png"
          alt="Creepy aisle with many shelves filled with strange objects"
        />

        <div className={styles.textBox}>
          <h1>
            In a hyperconnected world, you’re constantly exposed to the
            highlight reels of others.
          </h1>

          <span>And deep down, you want to stand out.</span>

          <Button to="/start" type="primary">
            Be remembered
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
