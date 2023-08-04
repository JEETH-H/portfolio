import React from "react";
import Tittle from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillSection from "../Components/SkillSection";

function About() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />

      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skill-container">
        <SkillSection skill={"HTML"} progress={"80%"} width={"80%"} />
        <SkillSection skill={"CSS"} progress={"70%"} width={"70%"} />
        <SkillSection skill={"Javascript"} progress={"65%"} width={"65%"} />
        <SkillSection skill={"React JS"} progress={"64%"} width={"64%"} />
        <SkillSection skill={"Java"} progress={"81%"} width={"66%"} />
        <SkillSection skill={"Django"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"MySQL"} progress={"45%"} width={"45%"} />
        <SkillSection skill={" MongoDB"} progress={"45%"} width={"45%"} />
        <SkillSection skill={"Photoshop"} progress={"90%"} width={"90%"} />
        <SkillSection skill={"Illustrator"} progress={"75%"} width={"75%"} />
        <SkillSection skill={"Premier Pro"} progress={"70%"} width={"70%"} />
      </div>
    </div>
  );
}

export default About;
