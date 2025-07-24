import { useSelector } from "react-redux";

import { getCart } from "./cartSlice";
import styles from "./Cart.module.scss";
import UpdateQuantity from "../UpdateQuantity/UpdateQuantity";

function Cart() {
  const cart = useSelector(getCart);

  return (
    <div className={styles.Cart}>
      <div className={styles.grid}>
        <h3 className={styles.tableHeader}>Product</h3>
        <h3 className={styles.tableHeader}>Price</h3>
        <h3 className={styles.tableHeader}>Quantity</h3>
        <h3 className={styles.tableHeader}>Total Price</h3>
      </div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div className={`${styles.CartItem} ${styles.grid}`}>
      <div className={styles.itemProduct}>
        <img src={item.img} alt={item.name} className={styles.ItemImage} />
        <h3>{item.name}</h3>
      </div>
      <span className={styles.price}>{item.unitPrice.toFixed(2)} €</span>
      {/* <span>{item.quantity}</span> */}
      <span>
        <UpdateQuantity id={item.itemId} />
      </span>
      <span className={styles.totalPrice}>
        {(item.quantity * item.unitPrice).toFixed(2)} €
      </span>
    </div>
  );
}

export default Cart;
