import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  getCartItemById,
} from "../Cart/cartSlice";
import styles from "./UpdateQuantity.module.scss";

function UpdateQuantity({ id }) {
  const dispatch = useDispatch();
  const item = useSelector(getCartItemById(id));

  function handleIncrement(e) {
    e.stopPropagation();

    if (!id) return;
    dispatch(increaseQuantity(id));
  }

  function handleDecrement(e) {
    e.stopPropagation();

    if (!id) return;
    dispatch(decreaseQuantity(id));
  }

  return (
    <div className={styles.updateQuantity}>
      <button className={styles.btn} onClick={handleDecrement}>
        -
      </button>
      <span>{item?.quantity}</span>
      <button className={styles.btn} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default UpdateQuantity;
