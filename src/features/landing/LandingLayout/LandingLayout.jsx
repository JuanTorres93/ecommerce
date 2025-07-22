import { Outlet } from "react-router-dom";
import NavBar from "../../../ui/NavBar/NavBar";
import styles from "./LandingLayout.module.scss";
import Footer from "../Footer/Footer";
import Button from "../../../ui/Button/Button";

function LandingLayout() {
  return (
    <div className={styles.appLayout}>
      <header>
        <NavBar>
          <NavBarItems />
        </NavBar>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function NavBarItems() {
  return (
    <>
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
    </>
  );
}

export default LandingLayout;
