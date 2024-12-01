import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { memo } from "react";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PageLayout from "./UI/PageLayout";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import FavouriteProductsPage from "./pages/FavouriteProductsPage";
import { OrderDataPage } from "./pages/OrderDataPage";
import { PaymentPage } from "./pages/PaymentPage";
import DeliveryPage from "./pages/DeliveryPage";
import PaymnetInfoPage from "./pages/PaymentInfoPage";
import UserAgreementPage from "./pages/UserAgreementPage";
import RefoundPage from "./pages/RefoundPage";
import CitySearchPage from "./pages/CitySearchPage";

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
    path: "/payment",
    element: (
      <PageLayout>
        <PaymentPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/favourites",
    element: (
      <PageLayout withTabs>
        <FavouriteProductsPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/orderData",
    element: (
      <PageLayout>
        <OrderDataPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/payment",
    element: (
      <PageLayout>
        <PaymentPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/delivery",
    element: (
      <PageLayout>
        <DeliveryPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/paymentInfo",
    element: (
      <PageLayout>
        <PaymnetInfoPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/userAgreement",
    element: (
      <PageLayout>
        <UserAgreementPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/refound",
    element: (
      <PageLayout>
        <RefoundPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/citySearch",
    element: (
      <PageLayout>
        <CitySearchPage />
      </PageLayout>
    ),
    errorElement: <ErrorBoundary />,
  },
]);

const AppRoutes = memo(() => {
  return <RouterProvider router={router} />;
});

export default AppRoutes;
