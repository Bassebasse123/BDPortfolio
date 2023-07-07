import React from "react";
import { motion } from "framer-motion";

const AnimatedBurger = () => {
  return (
    <motion.div
      className="flexItem"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button>
        <div className="bar barone"></div>
        <div className="bar bartwo"></div>
        <div className="bar barthree"></div>
      </button>
    </motion.div>
  );
};

export default AnimatedBurger;
