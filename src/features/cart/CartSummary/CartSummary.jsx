import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getTotalPrice,
  validCoupons,
  getCart,
  clearCart,
} from "../Cart/cartSlice.js";
import { addOrder } from "../../order/orderSlice.js";
import Input from "../../../ui/Input/Input.jsx";
import Button from "../../../ui/Button/Button.jsx";
import styles from "./CartSummary.module.scss";

function CartSummary({ showDiscountCode = true, showCheckout = true }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [discountCode, setDiscountCode] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const discountIsValid = validCoupons.includes(discountCode);

  const totalPrice = useSelector(getTotalPrice);
  const cartItems = useSelector(getCart);

  const applyDiscount = () => {
    if (discountIsValid) {
      // In a real application, you would fetch this from an API or a database
      if (discountCode === "DISCOUNT100") {
        setDiscountValue(100);
      }
      if (discountCode === "SAVE50") {
        setDiscountValue(50);
      }
    } else {
      setDiscountValue(0);
    }

    setDiscountCode("");
  };

  const handleCreateOrder = () => {
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty. Please add items to your cart before proceeding."
      );
      return;
    }

    const orderItems = cartItems.map((item) => ({
      id: item.itemId,
      name: item.name,
      quantity: item.quantity,
      price: item.unitPrice,
      img: item.img,
    }));

    const newOrder = {
      id: crypto.randomUUID(), // Generate a unique ID for the order
      items: orderItems,
      totalDiscount: discountValue,
      createdAt: Date.now(),
    };

    dispatch(addOrder(newOrder));
    // TODO save order to localStorage

    // Reset the cart after order creation
    dispatch(clearCart()); // Assuming you have a clearCart action
    setDiscountValue(0);
    setDiscountCode("");

    navigate("/app/order/" + newOrder.id);
  };

  return (
    <div className={styles.CartSummary}>
      <h4>Cart Summary</h4>

      <div className={styles.rowPrice}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>{totalPrice} €</span>
      </div>

      <div className={styles.rowPrice}>
        <span className={styles.label}>Discount</span>
        <span className={`${styles.value} ${styles.discountValue}`}>
          -{discountValue} €
        </span>
      </div>

      <div className={`${styles.rowPrice} ${styles.rowTotal}`}>
        <span className={styles.label}>Total</span>
        <span className={styles.value}>{totalPrice - discountValue} €</span>
      </div>

      {showDiscountCode && (
        <div className={styles.discount}>
          <Input
            placeholder="Enter discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <Button onClick={applyDiscount} type="rounded">
            Apply
          </Button>
        </div>
      )}

      {showCheckout && (
        <Button onClick={handleCreateOrder} type="rounded">
          Go to Stripe Checkout
        </Button>
      )}
    </div>
  );
}

export default CartSummary;
