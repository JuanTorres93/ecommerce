import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LandingLayout from "./features/landing/LandingLayout/LandingLayout";
import AppLayout from "./ui/AppLayout/AppLayout.jsx";

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
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
        element: <div>Product Page</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
