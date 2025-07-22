import Logo from "../Logo/Logo";
import styles from "./NavBar.module.scss";

function NavBar({ children }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          {/* In a real app this should be handled with Link  */}
          <a href="/#hero">
            <Logo />
          </a>
        </li>

        {children}
      </ul>
    </nav>
  );
}

export default NavBar;
