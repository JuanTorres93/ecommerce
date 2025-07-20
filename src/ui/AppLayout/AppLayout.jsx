import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
