import { useLoaderData } from "react-router-dom";
import ProductDetails from "../../features/product/ProductDetails/ProductDetails";
import styles from "./ProductDetailsPage.module.scss";

function ProductDetailsPage() {
  const product = useLoaderData();

  return (
    <div className={styles.ProductDetailsPage}>
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductDetailsPage;
