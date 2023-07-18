import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBurger from "./animations/AnimatedBurger";

const SideNav = () => {
  const [navToggle, setNavToggle] = useState(true);

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  return (
    <motion.aside
      style={{ left: navToggle ? "0" : "-200px" }}
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <button className="navToggleBtn" onClick={toggleNav}>
          <div
            className={`navTogglerBar ${navToggle ? "navTogglerBarOne" : ""}`}
          ></div>
          <div
            className={`navTogglerBar ${navToggle ? "navTogglerBarTwo" : ""}`}
          ></div>
          <div
            className={`navTogglerBar ${navToggle ? "navTogglerBarThree" : ""}`}
          ></div>
        </button>
        <NavLink to={"/BDPortfolio"}>
          <h2>B</h2>
        </NavLink>
        <h3>Bastian</h3>
        <p>Web Developer</p>
      </section>
      <nav>
        <ul>
          <NavLink to={"/BDPortfolio/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/BDPortfolio/projects"}>
            <li>Projects</li>
          </NavLink>
          <NavLink>
            <li>Work</li>
          </NavLink>
          <NavLink to={"/BDPortfolio/contact"}>
            <li>Contact</li>
          </NavLink>
          <NavLink>
            <li>Links</li>
          </NavLink>
        </ul>
      </nav>
    </motion.aside>
  );
};

export default SideNav;
