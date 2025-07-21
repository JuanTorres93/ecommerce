import Button from "../../../ui/Button/Button";
import Logo from "../../../ui/Logo/Logo";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#hero">
            <Logo />
          </a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#testimonials">Testimonial</a>
        </li>

        <li>
          <a href="#faqs">FAQs</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <Button to="/start" type={"primary"}>
            Start now
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
