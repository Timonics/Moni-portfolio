import { Loader, Send } from "lucide-react";
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
//   const [emailSent, setEmailSent] = useState(false);
//   const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .send(
    //     "service_h9qn2ft",
    //     "template_3a5fmlg",
    //     {
    //       from_name: formData.name,
    //       from_email: formData.email,
    //       subject: formData.subject,
    //       message: formData.message,
    //     },
    //     "1wR1sZKrUHHAKPoeu"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Message sent:", result.text);
    //       setEmailSent(true);
    //       setFormData({ name: "", email: "", subject: "", message: "" });
    //       setLoading(false);
    //     },
    //     (error) => {
    //       console.error("Error sending:", error.text);
    //       setError(true);
    //       setLoading(false);
    //     }
    //   )
    //   .finally(() => {
    //     setTimeout(() => {
    //       setEmailSent(false);
    //       setError(false);
    //     }, 3000);
    //   });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-linear-to-br from-gray-800 via-gray-950 to-black text-white/90 rounded-xl p-4 flex flex-col">
      {/* {emailSent && (
        <div className="bg-green-600/20 border border-green-600 backdrop-blur-2xl text-green-400 p-3 rounded-md mb-4 outfit fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
          <strong>Success!</strong> Your message has been sent. I'll get back to
          you soon.
        </div>
      )}
      {error && (
        <div className="bg-red-600/20 border border-red-600 backdrop-blur-2xl text-red-400 p-3 rounded-md mb-4 outfit fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
          <strong>Error!</strong> Something went wrong. Please try again later.
        </div>
      )} */}
      <div>
        <h2 className="text-2xl font-bold">Send Me a Message</h2>
        <p className="text-white/50">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 outfit">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border p-1 pl-2 rounded-md outline-none focus:border-indigo-400"
                required
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@gmail.com"
                className="border p-1 pl-2 rounded-md outline-none focus:border-indigo-400"
                required
              />
            </div>
          </div>

          <div className="space-y-2 flex flex-col outfit">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="border p-1 pl-2 rounded-md outline-none focus:border-indigo-400"
              required
            />
          </div>

          <div className="space-y-2 flex flex-col outfit">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your inquiry"
              className="border p-1 pl-2 rounded-md outline-none focus:border-indigo-400"
              rows={11}
              required
            />
          </div>
        </form>
      </div>
      <button
        onClick={handleSubmit}
        disabled={
          loading ||
          formData.message.trim() === "" ||
          formData.email.trim() === "" ||
          formData.name.trim() === "" ||
          formData.subject.trim() === ""
        }
        className={`w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#1c398e]/50 bg-[#1c398e]  cursor-pointer transition-all duration-300 max-lg:mt-10 mt-auto hover:bg-indigo-600 text-white outfit flex items-center px-3 py-1.5 rounded-md pops justify-center font-bold`}
      >
        {loading ? (
          <Loader className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Send className="w-4 h-4 mr-2" />
        )}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
};

export default ContactForm;
