import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./LandingLayout.module.scss";
import Footer from "../Footer/Footer";

function LandingLayout() {
  return (
    <div className={styles.appLayout}>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default LandingLayout;
