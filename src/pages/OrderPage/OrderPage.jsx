import CartSummary from "../../features/cart/CartSummary/CartSummary";
import OrderDetails from "../../features/order/OrderDetails/OrderDetails";
import Heading from "../../ui/Heading/Heading";
import styles from "./OrderPage.module.scss";

function OrderPage() {
  return (
    <div className={styles.OrderPage}>
      <Heading type="h2">Order Number NUMBER</Heading>
      <OrderDetails />

      <div className={styles.cartWrapper}>
        <CartSummary showCheckout={false} showDiscountCode={false} />
      </div>
    </div>
  );
}

export default OrderPage;
