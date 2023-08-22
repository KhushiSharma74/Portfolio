import React from "react";
import image from "./Images/leadership.jpg";
import image1 from "./Images/ira image.jpg";
import image2 from "./Images/wings1.png";
export default function Achievements() {
  return (
    <>
      <h1>Achievements</h1>
      <div className="ach-wrapper">
        <div className="left-side4">
          <img className="leader-img" src={image}></img>
          <p className="main-para">
            ⚫As the Head for the Weather App project, my primary responsibility
            was team management, ensuring the successful development and
            delivery of the application
          </p>
        </div>
        <div className="mid-side">
          <img className="ira-img" src={image1}></img>
          <p className="main-para">
            ⚫Awarded first place in the prestigious IRA Price Winning
            Competition for outstanding performance in web development using
            HTML, CSS, JavaScript and React
          </p>
        </div>
        <div className="right-side4">
          <img className="wings-img" src={image2}></img>
          <p className="main-para">
            ⚫Successfully cleared the Wings1 Internal Examination at TCS,
            demonstrating proficiency in React and its application in modern web
            development.
          </p>
        </div>
      </div>
    </>
  );
}
