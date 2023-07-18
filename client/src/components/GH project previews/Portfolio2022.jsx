import React from "react";
import img from "../../images/Portfolio2022_Preview.jpg";
import { motion } from "framer-motion";

const Portfolio2022 = () => {
  return (
    <motion.div
      className="flexItem"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <a href="https://bassebasse123.github.io/portfoliopage/">
        <div className="card">
          <img className="preview" src={img} alt=""></img>

          <div className="text">
            <h3>Pure HTML/CSS Portfolio from 2022</h3>
            <p>
              Click this card to be redirected to my published portfolio page
              from 2022. The website is made from html and css code only.
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Portfolio2022;
