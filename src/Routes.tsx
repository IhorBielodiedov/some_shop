import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { memo } from "react";
import { OrderDataPage } from "./pages/OrderDataPage";
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
