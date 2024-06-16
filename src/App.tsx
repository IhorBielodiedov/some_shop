import { useEffect } from "react";
import AppRoutes from "./Routes";
import GradientButton from "./UI/GradientButton";
import TabBar from "./components/TabBar";
import "./styles/app.scss";

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
