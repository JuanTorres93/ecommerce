import Button from "../../ui/Button/Button";
import UpdateQuantity from "../cart/UpdateQuantity/UpdateQuantity";
import styles from "./ProductThumbnail.module.scss";

function ProductThumbnail({ img, title, price }) {
  return (
    <article className={styles.productThumbnail}>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <div className={styles.info}>
        <span>{price} €</span>

        {/* TODO render conditionally based on cart state */}
        <Button type="small">Add to Cart</Button>
        <UpdateQuantity />
      </div>
    </article>
  );
}

export default ProductThumbnail;
