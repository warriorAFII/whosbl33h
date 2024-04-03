import { LazyMotion, domAnimation, m } from "framer-motion";
import ContactForm from "../Components/ContactForm";
import SectionTitle from "../Components/SectionTitle";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="overflow-hidden-web flex flex-col items-center mt-40 mb-40"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className=" p-4 flex flex-col gap-4 justify-center items-center"
        >
          <div className="flex sm:flex-row flex-col bg-[#FFF1E6] border-20 rounded-2xl gap-5 p-5 ">
            <div className="max-w-md">
              <h1 style={{ color: "#aa6161", fontSize: 40 }}>Contact us</h1>
              <p>
                We’d love to hear more about your project, drop us a message and
                we’ll get back to you within 48 hours!
              </p>
              <h3 style={{ color: "#aa6161", marginTop: 20 }}>Our Email</h3>
              <p
                style={{
                  marginTop: 8,
                }}
              >
                Contact@BuildBlox.co.uk
              </p>
              <h3 className="text-[#aa6161] mt-5">Follow us</h3>
              <SocialLinks />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default Contact;
