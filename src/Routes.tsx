import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { memo } from "react";
import { OrderDataPage } from "./pages/OrderDataPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OrderDataPage />,
  },
  {
    path: "/orderData",
    element: <OrderDataPage />,
  },
]);

const AppRoutes = memo(() => {
  return <RouterProvider router={router} />;
});

export default AppRoutes;
