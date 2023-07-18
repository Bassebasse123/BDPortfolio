import React from "react";
import HsProject from "./HsProject";
import Portfolio2022 from "./Portfolio2022";

const ProjectsContainer = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        <HsProject></HsProject>
        <Portfolio2022></Portfolio2022>
      </div>
    </div>
  );
};

export default ProjectsContainer;
