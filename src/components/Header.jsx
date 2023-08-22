import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import image from "./Images/WhatsApp Image 2023-07-12 at 8.32.15 PM.jpeg";
import Form from "./Form";
export default function Header() {
  const [show, setShow] = useState(false);
  const handler = () => {
    console.log("hello");
    setShow(true);
  };
  const handler2 = () => {
    console.log("hello");
    alert("Submitted Successfully");
    setShow(false);
  };
  const handler3 = () => {
    console.log("hello");

    setShow(false);
  };
  return (
    <div>
      <div className="header-wrapper">
        <div className="left-side">
          <Link className="Link" to="/">
            <h1 className="Link">Khushi Sharma</h1>
          </Link>
        </div>
        <div className="right-side">
          <Link className="Link" to="/Experience">
            Experience
          </Link>
          <Link className="Link" to="/Skills">
            Skills
          </Link>
          <Link className="Link" to="/Projects">
            Projects
          </Link>
          <Link className="Link" to="/Achievements">
            Achievements
          </Link>
          <Button onclick={handler} onclose={handler2} text="Contact Me!" />
        </div>
      </div>
      {show && <Form onclose={handler2} onclose1={handler3}></Form>}
    </div>
  );
}
