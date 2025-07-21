import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <header>App header</header>

      <main>
        <Outlet />
      </main>

      <footer>App footer</footer>
    </div>
  );
}

export default AppLayout;
