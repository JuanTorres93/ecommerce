import { useSelector } from "react-redux";
import { Outlet, useNavigation, useLocation } from "react-router-dom";

import styles from "./AppLayout.module.scss";
import { getUsername } from "../../features/user/userSlice";

import Loader from "../../ui/Loader/Loader";
import NavBar from "../../ui/NavBar/NavBar";
import Input from "../Input/Input";
import CartSimpleSummary from "../../features/cart/CartSimpleSummary/CartSimpleSummary";

function AppLayout() {
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles.appLayout}>
      {isLoading && (
        <div className={styles.loader}>
          <Loader type="bars" />
        </div>
      )}

      <header>
        <NavBar>
          <NavBarItems />
        </NavBar>
      </header>

      <main>
        {/* TODO add some back button */}
        <Outlet />
      </main>

      <footer>
        {location.pathname !== "/app/cart" && <CartSimpleSummary />}
      </footer>
    </div>
  );
}

function NavBarItems() {
  const username = useSelector(getUsername);

  return (
    <>
      <ul>
        <li>
          <Input type="text" placeholder="Ticket number" />
        </li>

        <li>
          <span>{username}</span>
        </li>
      </ul>
    </>
  );
}

export default AppLayout;
