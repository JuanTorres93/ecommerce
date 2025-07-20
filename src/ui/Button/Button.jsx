import styles from "./Button.module.scss";

function Button({ children, type }) {
  return (
    <button className={`${styles.btn} ${type ? styles[type] : ""}`}>
      {children}
    </button>
  );
}

export default Button;
