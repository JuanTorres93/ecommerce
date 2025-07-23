import Input from "../../../ui/Input/Input.jsx";
import Button from "../../../ui/Button/Button.jsx";
import styles from "./CartSummary.module.scss";

function CartSummary() {
  return (
    <div className={styles.CartSummary}>
      <h4>Cart Summary</h4>

      <div className={styles.rowPrice}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>654 €</span>
      </div>

      <div className={styles.rowPrice}>
        <span className={styles.label}>Discount</span>
        <span className={`${styles.value} ${styles.discountValue}`}>
          -100 €
        </span>
      </div>

      <div className={`${styles.rowPrice} ${styles.rowTotal}`}>
        <span className={styles.label}>Total</span>
        <span className={styles.value}>554 €</span>
      </div>

      <div className={styles.discount}>
        <Input placeholder="Enter discount code" />
        <Button type="rounded">Apply</Button>
      </div>

      <Button type="rounded">Go to Stripe Checkout</Button>
    </div>
  );
}

export default CartSummary;
