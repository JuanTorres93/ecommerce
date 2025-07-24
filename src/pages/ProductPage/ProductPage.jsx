import { useLoaderData } from "react-router-dom";
import ProductThumbnail from "../../features/product/ProductThumbnail/ProductThumbnail";
import { getProducts } from "../../services/productsAPI";
import styles from "./ProductPage.module.scss";

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

function ProductPage() {
  const products = useLoaderData();

  return (
    <section className={styles.productPage}>
      <div className={styles.products}>
        {products?.map((product) => (
          <ProductThumbnail key={product.id} product={product} />
        )) || <p>No products available</p>}
      </div>
    </section>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default ProductPage;
