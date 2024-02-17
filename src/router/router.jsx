import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/Homepage";
import SingleProductPage from "../pages/SingleProductPage";
import CatalogPage from "../pages/CatalogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/catalog/:id",
        element: <SingleProductPage />,
      },
    ],
  },
]);

export default router;
