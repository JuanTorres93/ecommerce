import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LandingLayout from "./features/landing/LandingLayout/LandingLayout";
import AppLayout from "./ui/AppLayout/AppLayout.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import StartPage from "./pages/StartPage/StartPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

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
      },
      {
        path: "product/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
