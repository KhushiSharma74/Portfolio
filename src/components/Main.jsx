import React, { useState } from "react";
import "./Main.css";
import Header from "./Header";
import Button from "./Button";
import image from "./Images/handshake.jpg";
import Form from "./Form";
import image1 from "./Images/main picture.avif";
export default function Main(props) {
  const [show, setShow] = useState(false);
  const handler = () => {
    console.log("hello");
    setShow(true);
  };
  const handler3 = () => {
    console.log("hello");
    setShow(false);
  };
  return (
    <div>
      {/* <Header /> */}
      <div className="header-wrapper2">
        <div className="left-side2">
          <h2>Hello 👋, I Am</h2>
          <h1>Khushi Sharma</h1>
          <p className="main-para">
            As a frontend developer with two years of specialized experience in
            React, I bring a passion for crafting captivating user interfaces
            and a strong foundation in modern web development. With a keen eye
            for design and an in-depth understanding of React's capabilities, I
            am dedicated to delivering seamless and engaging experiences for
            users.
          </p>
          <Button onclick={handler} text="Contact Me! " />
        </div>
        <div className="right-side2">
          <img className="picture-personal" src={image1} alt="khushi"></img>
        </div>
      </div>
      {show && <Form onclose={props.onclose} onclose1={handler3}></Form>}
    </div>
  );
}
