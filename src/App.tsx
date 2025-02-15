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
    localStorage.setItem(
      "access",
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiMCIsInJvbGUiOiJqd3RfY2xpZW50Iiwic2siOiI3OTIzYzUzZi0xNDgyLTQ0MjgtODgyZC02ZjU3MTNlZWQ2NmUiLCJleHAiOjE3NDU4ODA3MzcuNjE1NDMxLCJpYXQiOjE3Mzc5OTY3MzcuNjE1NDMxfQ.hVqkY6QTPMyFoizeb2KSMGCKqOALbAbZEpRskkAEz3JWpjl5zRAcA4Phybl60AiZGJ-gbhsoS4VcgCfJY6K37ggJQMqTwHz7XlMUbOmovKKlOtixzsKAyJzNfia-onoYgLGFQp2HOeu3xz83aat0XJtZvfjOrep5XlNmmjikrkqF3DSGyv7tP3wPhcuXH8q4v5DZhKAuV_X1DQnTnUTdmFQ6-Nug_jzebHOZLzxSnAcu_891ny5k3egwhdzc-LZu1Gj3inTWI8K4iosuN7vhl2BkCP-mLQCBpimQVBQfQxiNHBcDKE_A1iUoAn_Qhrpx54zmOod6gylkEUNu-u4IMw"
    );
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
