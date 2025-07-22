import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";

import NavBar from "../../ui/NavBar/NavBar";
import Input from "../Input/Input";
import CartSimpleSummary from "../../features/cart/CartSimpleSummary/CartSimpleSummary";

function AppLayout() {
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

      {/* TODO show only if cart is not empty */}
      <footer>
        <CartSimpleSummary />
      </footer>
    </div>
  );
}

function NavBarItems() {
  return (
    <>
      <ul>
        <li>
          <Input type="text" placeholder="Ticket number" />
        </li>

        <li>
          <span>Name</span>
        </li>
      </ul>
    </>
  );
}

export default AppLayout;
