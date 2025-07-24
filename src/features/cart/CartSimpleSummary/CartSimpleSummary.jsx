import { useSelector } from "react-redux";

import { getTotalItems, getTotalPrice } from "../Cart/cartSlice";
import styles from "./CartSimpleSummary.module.scss";
import Button from "../../../ui/Button/Button";

function CartSimpleSummary() {
  const totalItems = useSelector(getTotalItems);
  const totalPrice = useSelector(getTotalPrice);

  if (totalItems === 0) {
    return null; // Don't render if the cart is empty
  }

  return (
    <div className={styles.cartSimpleSummary}>
      <span>
        Total items: <em>{totalItems}</em>
      </span>

      <span>
        Total price: <em>{totalPrice}</em> €
        <Button to="cart" type="small">
          Go to cart
        </Button>
      </span>
    </div>
  );
}

export default CartSimpleSummary;
