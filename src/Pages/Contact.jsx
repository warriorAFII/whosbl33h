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

                  padding: 20,
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                <div>
                  <h1 style={{ color: "#aa6161", fontSize: 60 }}>Contact us</h1>
                  <p style={{ fontWeight: 300, fontFamily: "sofiaPro" }}>
                    We’d love to hear more about your project, drop us a message
                    and we’ll get back to you within 48 hours!
                  </p>
                  <h3 style={{ color: "#aa6161" }}>Our Email</h3>
                  <p style={{ fontWeight: 300, fontFamily: "sofiaPro" }}>
                    Contact@BuildBlox.co.uk
                  </p>
                  <h3 style={{ color: "#aa6161" }}>Follow us</h3>
                  <SocialLinks />
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
