import Heading from "../../../ui/Heading/Heading";
import styles from "./Subheadline.module.scss";

function Subheadline() {
  return (
    <section className={styles.subheadlineSection}>
      <div className={styles.subheadline}>
        <Heading type="h2">
          Without a unique edge, you risk blending into the background.
        </Heading>

        <div className={styles.container}>
          <div className={styles.left}>
            <img
              src="images/simple-objects.png"
              alt="Group of objects: cassette, sunglasses, earphones, old camera, pen, watch and wallet"
            />
            <ul>
              <li>
                <span>Mediocre gifts.</span>
              </li>
              <li>
                <span>Boring setups.</span>
              </li>
              <li>
                <span>Unremarkable gadgets.</span>
              </li>
            </ul>
          </div>

          <div className={styles.right}>
            <h3>
              You feel <em>average</em>.
            </h3>

            <p>
              And when you feel average, you <em>act</em> average.
            </p>

            <img src="images/watching-ipad.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subheadline;
