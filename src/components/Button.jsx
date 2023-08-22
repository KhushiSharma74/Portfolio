import React from "react";
import image from "./Images/download call image.jpg";
import "./Main.css";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onclick} className="button">
        <div className="contact">
          <div>
            <h1>{props.text}</h1>
          </div>
          <div>
            <img className="Contact-button" src={image} alt="contact"></img>
          </div>
        </div>
      </button>
    </div>
  );
}
