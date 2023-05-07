import React from "react";
import Nav from "../Shared/Nav";
import ContactForm from "./ContactForm";
import Locations from "../Shared/Locations"
import Footer from "../Shared/Footer";

const ContactPage = () => {
  return (
    <div className="mt-[96px] md:mt-[131px]">
      <Nav />
      <ContactForm />
      <Locations />
      <Footer cta={false} />
    </div>
  );
};

export default ContactPage;
