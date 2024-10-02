import { useEffect } from "react";
import AppRoutes from "./Routes";
import "./styles/app.scss";
import { TELEGRAM } from "./utils/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    TELEGRAM.setBackgroundColor("#ffffff");
    TELEGRAM.expand();
  }, []);
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
