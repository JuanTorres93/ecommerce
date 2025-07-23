import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import UpdateQuantity from "../../cart/UpdateQuantity/UpdateQuantity";
import styles from "./ProductThumbnail.module.scss";

function ProductThumbnail({ product }) {
  const navigate = useNavigate();

  function handleGoToDetails() {
    navigate(`/app/product/${product?.id}`);
  }

  return (
    <article className={styles.productThumbnail} onClick={handleGoToDetails}>
      <img src={product?.images?.at(0)} alt={product?.title} />
      <h2>{product?.title}</h2>

      <div className={styles.info}>
        <span>{product?.price} €</span>

        {/* TODO render conditionally based on cart state */}
        <Button type="small">Add to Cart</Button>
        <UpdateQuantity />
      </div>
    </article>
  );
}

export default ProductThumbnail;
