import styles from "./UpdateQuantity.module.scss";

function UpdateQuantity({ id }) {
  return (
    <div className={styles.updateQuantity}>
      <button className={styles.btn}>-</button>
      <span>1</span>
      <button className={styles.btn}>+</button>
    </div>
  );
}

export default UpdateQuantity;
