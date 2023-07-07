import React from "react";
import AnimatedBurger from "../animations/AnimatedBurger";
import AnimatedCircles from "../animations/AnimatedCircles";
import AnimatedSun from "../animations/AnimatedSun";

const AnimationContainer = () => {
  return (
    <div>
      <div className="miniProjectsFlexContainer">
        <AnimatedBurger></AnimatedBurger>
        <AnimatedCircles></AnimatedCircles>
        <AnimatedSun></AnimatedSun>
      </div>
    </div>
  );
};

export default AnimationContainer;
