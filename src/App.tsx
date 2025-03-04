import { useEffect } from "react";
import AppRoutes from "./Routes";
import "./styles/app.scss";
import { TELEGRAM } from "./utils/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductsStore } from "./stores/useProductsStore";
import { useCartStore } from "./stores/cartStore";

function App() {
  const carts = useCartStore((state) => state.products);
  const getCategories = useProductsStore((state) => state.getCategories);
  const getCarts = useCartStore((state) => state.getCarts);
  const calculateTotalAmount = useCartStore(
    (state) => state.calculateTotalAmount
  );

  useEffect(() => {
    TELEGRAM.setBackgroundColor("#ffffff");
    TELEGRAM.expand();
    localStorage.setItem("access", process.env.REACT_APP_API_TOKEN);
    // api.getCarts("1");
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getCarts();
  }, []);

  useEffect(() => {
    calculateTotalAmount(carts);
  }, [carts]);

  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default App;
