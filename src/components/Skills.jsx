import React from "react";
import image from "./Images/skills image.jpg";
export default function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-left">
        <img className="skills-image" src={image} alt="skills"></img>
      </div>
      <div className="skills-right">
        <h1>Skills</h1>
        <p className="main-para">
          As a passionate and dedicated frontend developer, I possess a diverse
          range of technical skills and industry experience that enable me to
          create immersive and engaging web experiences. With a focus on clean
          code and user-centric design, I take pride in transforming ideas into
          responsive and interactive websites. Below are some of the skills and
          technologies I excel in:
        </p>
        <ul className="main-para">
          <li>
            <strong>HTML5</strong>
          </li>
          <li>
            <strong>CSS3</strong>
          </li>
          <li>
            <strong>JAVASCRIPT</strong>
          </li>
          <li>
            <strong>REACT</strong>
          </li>
          <li>
            <strong>REDUX</strong>
          </li>
          <li>
            <strong>API</strong>
          </li>
          <li>
            <strong>GIT</strong>
          </li>
          <li>
            <strong>TYPESCRIPT</strong>
          </li>
          <li>
            <strong>BOOTSTRAP</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
