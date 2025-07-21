import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

function Button({ children, type, to }) {
  const className = `${styles.btn} ${type ? styles[type] : ""}`;

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return <button className={className}>{children}</button>;
}

export default Button;
