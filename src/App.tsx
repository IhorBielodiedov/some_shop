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
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiMCIsInJvbGUiOiJqd3RfY2xpZW50Iiwic2siOiI3OTIzYzUzZi0xNDgyLTQ0MjgtODgyZC02ZjU3MTNlZWQ2NmUiLCJleHAiOjE3NDc2OTU3NjAuMTYyNzUzLCJpYXQiOjE3Mzk4MTE3NjAuMTYyNzUzfQ.FI66-uIVPQld6y5tacZrCJz7zGJyIeYj-LyS-glc35UpOErKOILjVY6ShK1RYB1mbu5MN_1PscKf_ZNq975Wqi-r2ksCkMHfq6MfFG10FlcE3o4TRIuz-8xmTOZq5DWi0SuMv9cbK3Tb02m1aZviFpxSBi2Mbq4UwfM8O-X0YZVtreMd9cS5HiVURCQg6ieIPjf_HTUoMPLFZcRCQrhqgbIsVc0F75UqtZCl8AtrJtk2lBKKX8skYYHwJ_aFbxwGwdgMv7tpSGptMQXfE-IiesM4fax3qzug8df5Xt0rn6A0AoQZ9hXhpON2o-OF2lVUikrIGlh_y5CSPJXR0jB-1Q"
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
