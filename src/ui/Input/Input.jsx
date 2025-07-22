import styles from "./Input.module.scss";

function Input({ type, value, onChange, placeholder }) {
  if (value && onChange)
    return (
      <input
        className={styles.input}
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );

  return (
    <input
      type={type || "text"}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}

export default Input;
