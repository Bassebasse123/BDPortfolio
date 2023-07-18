import React from "react";
import AnimationContainer from "./animations/AnimationContainer";
import ProjectsContainer from "./GH project previews/ProjectsContainer";
const ProjectsPage = () => {
  return (
    <div className="projectsPage">
      <ProjectsContainer></ProjectsContainer>

      <AnimationContainer></AnimationContainer>
      <h1>MORE TO COME - UNDER CONSTRUCTION</h1>
    </div>
  );
};

export default ProjectsPage;
