import React from "react";
import curriculumVitae from "../images/2023_07_07_CV_Bastian Dammann.jpg";

const AboutPage = () => {
  return (
    <div>
      <img
        style={{
          padding: "50px",
          width: "50vw",
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "200px",
        }}
        src={curriculumVitae}
        alt=""
      />
    </div>
  );
};

export default AboutPage;
