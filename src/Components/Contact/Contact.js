import React from "react";
import ContactForm from "./ContactFrom";

const Contact = () => {
  return (
    <div className="mb-24">
      <div className="text-black text-center ">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <hr className="border-black border-3 my-3 mx-36" />
        <p>
          <br />
          Whether you have questions, suggestions, or just want to say hello,
          we're here to listen
          <br /> Your feedback is valuable to us as we strive to provide the
          best experience possible.
          <br />
          Drop us a message and our dedicated team will get back to you
          promptly.
        </p>
      </div>
      <div className="my-16">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
