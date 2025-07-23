import Cart from "../../features/cart/Cart/Cart.jsx";
import Heading from "../../ui/Heading/Heading.jsx";
import styles from "./CartPage.module.scss";

function CartPage() {
  return (
    <div className={styles.CartPage}>
      <Heading type="h2">Your cart</Heading>
      <Cart />
    </div>
  );
}

export default CartPage;
