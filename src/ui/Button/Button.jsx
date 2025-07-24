import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

function Button({ children, type, to, onClick = () => {}, disabled = false }) {
  const className = `${styles.btn} ${type ? styles[type] : ""}`;

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      className={className}
      onClick={disabled ? null : onClick}
    >
      {children}
    </button>
  );
}

export default Button;
