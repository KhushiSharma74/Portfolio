import React from "react";
import image from "./Images/download call image.jpg";
import "./Main.css";

export default function Button2(props) {
  // const handler=()=>{
  //     if(props.text===WeatherApp){

  //     }
  //     elseif(props.text===Portfolio){

  //     }
  //     elseif(props.text===OmniFood){

  //     }

  // }
  return (
    <div>
      <button className="button">
        <div className="contact">
          <div>
            <h1>{props.text}</h1>
          </div>
        </div>
      </button>
    </div>
  );
}
