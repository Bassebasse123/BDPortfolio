import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const SideNav = () => {
  return (
    <motion.aside
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
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
