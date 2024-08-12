import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { memo } from "react";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PageLayout from "./UI/PageLayout";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import FavouriteProductsPage from "./pages/FavouriteProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout withTabs>
        <HomePage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/products",
    element: (
      <PageLayout withTabs>
        <SearchPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/product/:id/:variantId",
    element: (
      <PageLayout>
        <ProductPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/cart",
    element: (
      <PageLayout>
        <CartPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/favourites",
    element: (
      <PageLayout>
        <FavouriteProductsPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
]);

const AppRoutes = memo(() => {
  return <RouterProvider router={router} />;
});

export default AppRoutes;
