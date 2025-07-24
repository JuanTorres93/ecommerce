import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getProductById } from "../../../services/productsAPI";

import { getCartItemById } from "../../cart/Cart/cartSlice";
import UpdateQuantity from "../../cart/UpdateQuantity/UpdateQuantity";
import styles from "./ProductDetails.module.scss";
import AddToCart from "../../cart/AddToCart/AddToCart";

function ProductDetails({ product }) {
  const [bigImage, setBigImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const numImages = product?.images?.length || 0;
  const isInCart = useSelector(getCartItemById(product?.id));
  const item = {
    itemId: product?.id,
    name: product?.title,
    unitPrice: product?.price,
    quantity: 1, // Default quantity is 1
    img: product?.images?.[0] || "",
  };

  const mainImage = numImages > 0 ? product.images[0] : null;
  const secondaryImages = numImages > 1 ? product.images : [];

  useEffect(() => {
    setBigImage(mainImage);
  }, [mainImage]);

  const handleImageClick = (image) => {
    setBigImage(image);
  };

  return (
    <div className={styles.ProductDetails}>
      <div className={styles.imagesContainer}>
        {bigImage && (
          <img
            className={styles.mainImage}
            src={hoveredImage || bigImage}
            alt={product?.title}
          />
        )}
        {secondaryImages.length > 0 && (
          <div className={styles.secondaryImages}>
            {secondaryImages.map((image, index) => (
              <img
                key={index}
                className={`${styles.secondaryImage} ${
                  bigImage === image ? styles["secondaryImage--active"] : ""
                }`}
                src={image}
                alt={product?.title}
                onClick={() => handleImageClick(image)}
                onMouseEnter={() => setHoveredImage(image)}
                onMouseLeave={() => setHoveredImage(null)}
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
          {!isInCart && <AddToCart item={item} />}
          {isInCart && <UpdateQuantity id={item?.itemId} />}
        </div>
      </div>
    </div>
  );
}

export function loader({ params }) {
  const { productId } = params;
  return getProductById(productId);
}

export default ProductDetails;
