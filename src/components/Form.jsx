import React from "react";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    alert("Submitted Successfully");
    send("service_3wghf2a", "template_2wr7j4i", data, "KAwFK6Cnd7BCLx2_g")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submitting your Query!");
    document.getElementById("queryForm").reset();
  };

  return (
    <div className="summary-para2" onClick={props.onclose1}>
      <div className="modal-container">
        <ToastContainer />
        <h1>Want to Contact? Feel Free to Reach!!</h1>
        <form id="queryForm">
          <div className="input-field">
            <input
              className="input"
              type="text"
              name="from_name"
              placeholder="Name"
              {...register("from_name", {
                required: "Name is required",
              })}
            />
            {errors.from_name?.message && (
              <p className="errors">{errors.from_name?.message}</p>
            )}
          </div>

          <div className="input-field">
            <input
              className="input"
              type="text"
              name="reply_to"
              placeholder="Email"
              {...register("reply_to", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.reply_to?.message && (
              <p className="errors">{errors.reply_to?.message}</p>
            )}
          </div>

          <div className="input-field">
            <input
              className="input"
              type="text"
              name="phone_number"
              placeholder="Phone"
              {...register("phone_number", {
                required: "Phone number is required",
                minLength: {
                  value: 8,
                  message: "Phone number is not valid",
                },
              })}
            />
            {errors.phone_number?.message && (
              <p className="errors">{errors.phone_number?.message}</p>
            )}
          </div>

          <div className="input-field">
            <input
              type="text"
              className="input"
              name="subject"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              })}
            />
            {errors.subject?.message && (
              <p className="errors">{errors.subject?.message}</p>
            )}
          </div>

          <div className="input-field full-width">
            <textarea
              className="textarea"
              name="message"
              placeholder="Your message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 20,
                  message: "Minimum 20 characters required",
                },
                maxLength: {
                  value: 500,
                  message: "Maximum 500 characters allowed",
                },
              })}
            />
            {errors.message?.message && (
              <p className="errors">{errors.message?.message}</p>
            )}
          </div>

          <button onClick={props.onclose} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
