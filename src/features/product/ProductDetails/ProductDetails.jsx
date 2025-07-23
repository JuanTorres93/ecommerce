import Button from "../../../ui/Button/Button";
import UpdateQuantity from "../../cart/UpdateQuantity/UpdateQuantity";
import styles from "./ProductDetails.module.scss";

function ProductDetails({ product }) {
  const numImages = product?.images?.length || 0;

  const mainImage = numImages > 0 ? product.images[0] : null;
  const secondaryImages = numImages > 1 ? product.images.slice(1) : [];

  return (
    <div className={styles.ProductDetails}>
      <div className={styles.imagesContainer}>
        {mainImage && (
          <img
            className={styles.mainImage}
            src={mainImage}
            alt={product?.title}
          />
        )}
        {secondaryImages.length > 0 && (
          <div className={styles.secondaryImages}>
            {secondaryImages.map((image, index) => (
              <img
                key={index}
                className={styles.secondaryImage}
                src={image}
                alt={product?.title}
              />
            ))}
          </div>
        )}
      </div>

      <div className={styles.textContainer}>
        <h3>{product?.title || "No name found"}</h3>
        <span>{product?.price ? `${product.price} €` : "No price found"}</span>
        <p>{product?.description || "No description found"}</p>

        <div className={styles.actionsBox}>
          {/* TODO show one or the other */}
          <UpdateQuantity />
          <Button type="primary">Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
