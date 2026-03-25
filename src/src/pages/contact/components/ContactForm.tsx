import { Loader, Send, CheckCircle, AlertCircle } from "lucide-react";
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
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call - Uncomment and configure emailjs when ready
    setTimeout(() => {
      setLoading(false);
      setNotification({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 5000);
    }, 1500);

    // emailjs implementation (uncomment when ready)
    /*
    emailjs
      .send(
        "service_h9qn2ft",
        "template_3a5fmlg",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "1wR1sZKrUHHAKPoeu"
      )
      .then(
        (result) => {
          setNotification({
            type: 'success',
            message: 'Message sent successfully! I\'ll get back to you soon.'
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
          
          setTimeout(() => {
            setNotification({ type: null, message: '' });
          }, 5000);
        },
        (error) => {
          setNotification({
            type: 'error',
            message: 'Something went wrong. Please try again later.'
          });
          setLoading(false);
          
          setTimeout(() => {
            setNotification({ type: null, message: '' });
          }, 5000);
        }
      );
    */
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
    <div className="relative">
      {/* Notification Toast */}
      {notification.type && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-lg border ${
            notification.type === 'success' 
              ? 'bg-green-500/10 border-green-500/50 text-green-400'
              : 'bg-red-500/10 border-red-500/50 text-red-400'
          }`}>
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/50">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Send Me a Message
          </h2>
          <p className="text-white/50">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-white/80 font-medium">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-white/40 transition-all duration-300"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-white/80 font-medium">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@gmail.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-white/40 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-white/80 font-medium">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-white/40 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-white/80 font-medium">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or inquiry..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-white/40 transition-all duration-300 resize-none"
              rows={8}
              required
            />
          </div>

          <button
            type="submit"
            disabled={
              loading ||
              formData.message.trim() === "" ||
              formData.email.trim() === "" ||
              formData.name.trim() === "" ||
              formData.subject.trim() === ""
            }
            className="group relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-indigo-500 to-purple-500" />
            <span className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;