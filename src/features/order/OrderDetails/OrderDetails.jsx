import styles from "./OrderDetails.module.scss";

const fakeOrderItems = [
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

function OrderDetails({ order }) {
  // const items = order?.items || [];
  const items = fakeOrderItems;

  return (
    <div className={styles.OrderDetails}>
      {items.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function OrderItem({ item }) {
  return (
    <div className={styles.OrderItem}>
      <div className={styles.ItemInfo}>
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
      </div>
      <div className={styles.ItemDetails}>
        <p className={styles.price}>{item.price.toFixed(2)} €</p>
        <p>Qty: {item.quantity}</p>
      </div>
    </div>
  );
}

export default OrderDetails;
