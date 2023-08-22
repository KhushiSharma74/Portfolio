import React from "react";
import Button2 from "./Button2";
import image from "./Images/food-app-icon-for-food-mobile-order-vector.jpg";
import image1 from "./Images/pngtree-vector-resume-icon-png-image_4894578.jpg";
import image2 from "./Images/westher.png";
export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="project-wrapper">
        <div className="project-left">
          <img className="food-para" src={image} alt=""></img>
          <Button2 text="OmniFood" />
          <p className="main-para">
            ⚫OmniFood is a food ordering app, designed using React and Redux,
            offers a seamless and efficient way for users to order their
            favorite dishes from the comfort of their devices. With an intuitive
            user interface and a dynamic shopping cart, the app provides a
            delightful user experience. Users can explore a wide variety of food
            items neatly categorized for easy navigation. Each food item is
            showcased with mouthwatering images and detailed descriptions,
            enticing users to make their selections.
          </p>
        </div>
        <div className="project-right">
          <img className="portfolio-para" src={image1} alt=""></img>
          <Button2 text="Portfolio" />
          <p className="main-para">
            ⚫My personal portfolio website is a showcase of my skills,
            projects, and experiences as a frontend developer. Designed and
            developed from scratch using modern web technologies, this project
            serves as an interactive and visually appealing platform to
            highlight my professional journey. In the future, I plan to expand
            my portfolio with new projects and update the website to reflect my
            ongoing professional growth.
          </p>
        </div>
        <div className="project-right">
          <img className="portfolio-para" src={image2} alt=""></img>
          <a
            target="_blank"
            href="https://khushisharma74.github.io/WeatherApp/"
          >
            <Button2 text="WeatherApp" />
          </a>

          <p className="main-para">
            ⚫The Weather App is a user-friendly and visually appealing
            application that allows users to get real-time weather information
            for different locations worldwide. It leverages weather data from a
            reliable external API to provide accurate and up-to-date weather
            forecasts. Users can easily search for cities or specific locations
            to view current weather conditions, as well as hourly and daily
            forecasts.
          </p>
        </div>
      </div>
    </>
  );
}
