import ProductDetails from "../../features/product/ProductDetails/ProductDetails";
import styles from "./ProductDetailsPage.module.scss";

const fakeProduct = {
  id: 149,
  title: "Premium Cotton T-Shirt",
  slug: "premium-cotton-t-shirt",
  price: 29,
  description:
    "High-quality cotton t-shirt with comfortable fit and modern design",
  category: {
    id: 1,
    name: "Clothes",
    slug: "clothes",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2025-07-22T07:55:11.000Z",
    updatedAt: "2025-07-22T07:55:11.000Z",
  },
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg?PremiumCottonT-Shirt_0",
    "https://i.imgur.com/QkIa5tT.jpeg?PremiumCottonT-Shirt_1",
    "https://i.imgur.com/QkIa5tT.jpeg?PremiumCottonT-Shirt_2",
    "https://i.imgur.com/QkIa5tT.jpeg?PremiumCottonT-Shirt_3",
  ],
  creationAt: "2025-07-22T11:25:57.000Z",
  updatedAt: "2025-07-22T11:25:57.000Z",
};

function ProductDetailsPage() {
  return (
    <div className={styles.ProductDetailsPage}>
      <ProductDetails product={fakeProduct} />
    </div>
  );
}

export default ProductDetailsPage;
