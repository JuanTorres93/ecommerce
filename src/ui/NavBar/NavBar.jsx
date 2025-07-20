import styles from "./NavBar.module.scss";

import { Link } from "react-router-dom";

//   - V Hero + Headline [Problem]
//   - V Subheadline + pain [Amplify]
//   - V Features / benefits [Solution(Story, System?) + Transformation]
//   - V Testimonial [Transformation]
//   - V Pricing [Offer]
//   - V FAQs / Guarantees [Offer + Response]
//   - V CTA [Response]

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link>LOGO</Link>
        </li>
        <li>
          <Link>Features</Link>
        </li>

        <li>
          <Link>Testimonial</Link>
        </li>

        <li>
          <Link>Pricing</Link>
        </li>

        <li>
          <Link>FAQs</Link>
        </li>

        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>BUTTON/NAME</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
