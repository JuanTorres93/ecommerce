import { useDispatch } from "react-redux";

import { addItem } from "../Cart/cartSlice";
import Button from "../../../ui/Button/Button";

function AddToCart({ item }) {
  const dispatch = useDispatch();

  function handleAddToCart(e) {
    e.stopPropagation();

    if (!item || !item.itemId) return;

    dispatch(addItem(item));
  }

  return (
    <Button type="small" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
}

export default AddToCart;
