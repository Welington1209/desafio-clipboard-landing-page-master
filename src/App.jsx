import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-Bai">
      <Header />

      <div className="flex flex-col items-center">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
