import { useParams } from "react-router-dom";

import OrderDetails from "../../features/order/OrderDetails/OrderDetails";
import Heading from "../../ui/Heading/Heading";
import styles from "./OrderPage.module.scss";

function OrderPage() {
  const { orderId } = useParams();

  return (
    <div className={styles.OrderPage}>
      <Heading type="h2">Order Number {orderId}</Heading>
      <OrderDetails />

      {/* <div className={styles.cartWrapper}>
        <CartSummary showCheckout={false} showDiscountCode={false} />
      </div> */}
    </div>
  );
}

export default OrderPage;
