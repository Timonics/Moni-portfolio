import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-15 lg:space-y-20">
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
