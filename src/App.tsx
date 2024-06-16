import { useEffect } from "react";
import AppRoutes from "./Routes";
import GradientButton from "./UI/GradientButton";
import TabBar from "./components/TabBar";
import "./styles/app.scss";
import { TELEGRAM } from "./utils/constants";

function App() {
  useEffect(() => {
    TELEGRAM.setBackgroundColor("#ffffff");
    TELEGRAM.expand();
  }, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
