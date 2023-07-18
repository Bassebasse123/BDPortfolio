import React from "react";
import video from "../../videos/HS_Collection_Preview.webm";
import { motion } from "framer-motion";

const HsProject = () => {
  return (
    <motion.div
      className="flexItem"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="card">
        <video
          className="hsVideo"
          src={video}
          width="500px"
          height="245px"
          controls
        ></video>

        <div className="text">
          <h3>React Hearthstone Library</h3>
          <p>
            Using an API for Blizzard's Hearthstone game to create a collection
            of the cards. Using the useReduce and useState hook, the collection
            can be filtered by mana costs, rarity, classes and searchterm to
            show specific cards only.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HsProject;
