import "../src/styles/app.scss";
import SideNav from "./components/SideNav.jsx";
import LandingPage from "./components/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ScreenSizeProvider from "./context/screenSizeContext";

function App() {
  return (
    <ScreenSizeProvider>
      <div className="App">
        <SideNav></SideNav>
        <Routes>
          <Route index path="/BDPortfolio" element={<LandingPage />}></Route>
          <Route path="/BDPortfolio/contact" element={<ContactPage />}></Route>
          <Route path="/BDPortfolio/about" element={<AboutPage />}></Route>
          <Route
            path="/BDPortfolio/projects"
            element={<ProjectsPage />}
          ></Route>
        </Routes>
      </div>
    </ScreenSizeProvider>
  );
}

export default App;
