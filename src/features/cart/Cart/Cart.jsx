import React from "react";
import styles from "./Cart.module.scss";
import UpdateQuantity from "../UpdateQuantity/UpdateQuantity";

const fakeCartData = [
  {
    id: 1,
    name: "Pizza Margherita",
    quantity: 2,
    price: 8.99,
    img: "/images/users/user1.jpg",
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    quantity: 1,
    price: 9.99,
    img: "/images/users/user2.jpg",
  },
];

function Cart() {
  return (
    <div className={styles.Cart}>
      <div className={styles.grid}>
        <h3 className={styles.tableHeader}>Product</h3>
        <h3 className={styles.tableHeader}>Price</h3>
        <h3 className={styles.tableHeader}>Quantity</h3>
        <h3 className={styles.tableHeader}>Total Price</h3>
      </div>
      {fakeCartData.map((item) => (
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
      <span className={styles.price}>{item.price.toFixed(2)} €</span>
      {/* <span>{item.quantity}</span> */}
      <span>
        <UpdateQuantity id={item.id} />
      </span>
      <span className={styles.totalPrice}>
        {(item.quantity * item.price).toFixed(2)} €
      </span>
    </div>
  );
}

export default Cart;
