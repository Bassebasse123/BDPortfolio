import React from "react";
import { motion } from "framer-motion";

const AnimatedCircles = () => {
  return (
    <motion.div
      className="flexItem"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <div className="flexCircles frameCircles">
        <div className="flexCircles circle one"></div>
        <div className="flexCircles circle two"></div>
        <div className="flexCircles circle three"></div>
      </div>
    </motion.div>
  );
};

export default AnimatedCircles;
