/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Contact.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { LazyMotion, domAnimation, m } from "framer-motion";
import ContactForm from "../Components/ContactForm";
import SectionTitle from "../Components/SectionTitle";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%] mx-auto">
        <div className="w-full"></div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
            >
              <div
                style={{
                  height: 500,
                  backgroundColor: "#FFF1E6",
                  width: "80%",
                }}
              >
                <h1 style={{ color: "#aa6161" }}>Contact us</h1>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-primary-600 flex justify-center pb-4 text-grayscale-50">
          <span>
            <em>Build Blox Forever</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
