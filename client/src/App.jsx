import "../src/styles/app.scss";
import SideNav from "./components/SideNav.jsx";
import LandingPage from "./components/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>

      <Routes>
        <Route index path="/BDPortfolio" element={<LandingPage />}></Route>
        <Route path="/BDPortfolio/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
