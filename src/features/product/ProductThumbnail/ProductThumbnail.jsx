import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getCartItemById } from "../../cart/Cart/cartSlice";
import styles from "./ProductThumbnail.module.scss";

import UpdateQuantity from "../../cart/UpdateQuantity/UpdateQuantity";
import AddToCart from "../../cart/AddToCart/AddToCart";

function ProductThumbnail({ product }) {
  const navigate = useNavigate();

  const isInCart = useSelector(getCartItemById(product?.id));

  const item = {
    itemId: product?.id,
    name: product?.title,
    unitPrice: product?.price,
    quantity: 1,
    img: product?.images?.at(0),
  };

  function handleGoToDetails() {
    navigate(`/app/product/${product?.id}`);
  }

  return (
    <article className={styles.productThumbnail} onClick={handleGoToDetails}>
      <img src={product?.images?.at(0)} alt={product?.title} />
      <h2>{product?.title}</h2>

      <div className={styles.info}>
        <span>{product?.price} €</span>

        {!isInCart && <AddToCart item={item} />}
        {isInCart && <UpdateQuantity id={item?.itemId} />}
      </div>
    </article>
  );
}

export default ProductThumbnail;
