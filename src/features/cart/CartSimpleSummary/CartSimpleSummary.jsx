import styles from "./CartSimpleSummary.module.scss";

function CartSimpleSummary() {
  return (
    <div className={styles.cartSimpleSummary}>
      <span>
        Total items: <em>0</em>
      </span>

      <span>
        Total price: <em>0</em> €
      </span>
    </div>
  );
}

export default CartSimpleSummary;
