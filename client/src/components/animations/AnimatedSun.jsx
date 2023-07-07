import React from "react";
import { motion } from "framer-motion";

const AnimatedSun = () => {
  return (
    <motion.div
      className=" center"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <div className="hole">
        <div className="sky"></div>
        <div className="sun"></div>
        <div className="sand"></div>
        <div className="pyrleft"></div>
        <div className="pyrright"></div>
        <div className="shadow"></div>
      </div>
    </motion.div>
  );
};

export default AnimatedSun;
