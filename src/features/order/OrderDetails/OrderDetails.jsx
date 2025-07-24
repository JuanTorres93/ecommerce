import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOrderById } from "../orderSlice";
import styles from "./OrderDetails.module.scss";

function OrderDetails() {
  const { orderId } = useParams();
  const order = useSelector(getOrderById(orderId));
  const items = order?.items || [];

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
        <img src={item?.img} alt={item?.name} />
        <h3>{item?.name}</h3>
      </div>
      <div className={styles.ItemDetails}>
        <p className={styles.price}>{item?.price?.toFixed(2)} €</p>
        <p>Qty: {item?.quantity}</p>
      </div>
    </div>
  );
}

export default OrderDetails;
