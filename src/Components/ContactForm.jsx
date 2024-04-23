/*
Author: Sara Echeverria
FileName: ContactForm.jsx
Version: I
Creation: 02/06/2023
Last modification: 03/06/2023
Copyright (C), 2023-2024, Sara Echeverria (bl33h)
*/

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_13uez5d",
        "template_iyebp2p",
        e.target,
        "OLpHe006pAU8jFhj-"
      )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert("Thank you I will get back to you as soon as possible ! (:");
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  return (
    <div className=" flex justify-center">
      <form
        id="contact_form"
        ref={form}
        method="POST"
        target="_blank"
        onSubmit={sendEmail}
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="w-[100%] h-[100%] flex flex-col gap-4 pt-4 text-grayscale-200"
      >
        <div style={{ flexDirection: "row", display: "flex", gap: 20 }}>
          <div className="w-200 flex flex-col">
            <label
              style={{
                color: "black",
              }}
              htmlFor="firstname"
            >
              Name
            </label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              style={{
                color: "black",
              }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              id="email"
              type="text"
              name="from_email"
              required
            />
          </div>
        </div>
        <div style={{ flexDirection: "row", display: "flex", gap: 20 }}>
          <div className="w-full flex flex-col">
            <label
              style={{
                color: "black",
              }}
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              id="phone"
              type="phone"
              name="from_phone"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              style={{
                color: "black",
              }}
              htmlFor="referral_source"
            >
              How did you find us?
            </label>
            <select
              className="p-[0.5em] rounded-xl text-grayscale-950"
              id="source"
              name="referral_source"
              required
            >
              <option value="none">Select an option</option>
              <option value="social_media">Social Media</option>
              <option value="friends_family">Friends & Family</option>
              <option value="internet_search">Internet Search</option>
              <option value="advertisement">Advertisement</option>
              <option value="previous_customer">Previous Customer</option>
              <option value="event_workshop">Event or Workshop</option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-col self-center	">
          <label style={{ color: "black" }}>Tell us about your project</label>
          <textarea
            className="p-[0.5em] h-[200px] rounded-xl text-grayscale-950"
            placeholder="Enter your message..."
            name="message"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <input
            className="w-[100%] h-[50px] bg-[#aa6161] rounded-xl cursor-pointer hover:bg-primary-700"
            type="submit"
            value={!isSent ? "Send" : "Done!"}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
