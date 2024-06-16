import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { memo } from "react";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PageLayout from "./UI/PageLayout";
import ProductPage from "./pages/ProductPage";

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
    path: "/product/:id",
    element: (
      <PageLayout>
        <ProductPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
]);

const AppRoutes = memo(() => {
  return <RouterProvider router={router} />;
});

export default AppRoutes;
