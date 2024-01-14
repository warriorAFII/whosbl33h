/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Projects.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import ProjectCards from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";
import PhotoFrame from "../assets/photoFrame.png";
const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full flex justify-center "
      style={{ backgroundColor: "brown", height: "100vh" }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",

          alignItems: "center",
        }}
      >
        <img
          src={PhotoFrame}
          className="w-50 h-50 object-contain"
          style={{ width: 350, marginLeft: 50 }}
        />
        <h1
          style={{
            textAlign: "center",
            fontSize: 22,
            zIndex: 1,
            marginTop: 70,
            color: "white",
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          Discover the extraordinary with Build Blox. We specialize in crafting
          stunning User Interfaces (UI) that elevate your online presence. From
          e-commerce to local business websites, our services are tailored to
          meet your unique needs. Experience the perfect blend of creativity and
          functionality with our team. Let's bring your vision to life.
        </h1>
      </div>
    </div>
  );
};

export default Projects;
