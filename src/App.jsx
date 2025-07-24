import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LandingLayout from "./features/landing/LandingLayout/LandingLayout";
import AppLayout from "./ui/AppLayout/AppLayout.jsx";
import ProductPage, {
  loader as productLoader,
} from "./pages/ProductPage/ProductPage.jsx";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import StartPage from "./pages/StartPage/StartPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import { loader as productDetailsLoader } from "./features/product/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/start",
        element: <StartPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />, // TODO protect this route
    children: [
      {
        index: true,
        element: <Navigate to="/app/product" replace />,
      },
      {
        path: "product",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "product/:productId",
        element: <ProductDetailsPage />,
        loader: productDetailsLoader,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "order/:orderId",
        element: <OrderPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
