import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="text-black">
        <div>
          <h2 className="text-2xl">Contact Information</h2>
          <p className="text-black/50">
            Here are the different ways you can reach me.
          </p>
        </div>
        <div className="space-y-6 mt-5 monte">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-indigo-900" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Email</p>
              <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md">
                <h6>ayobamimarilyn@gmail.com</h6>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-indigo-900" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Phone</p>
              <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md">
                <h6>+234 708 696 1293</h6>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-indigo-900" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Location</p>
              <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md">
                <h6>Lagos, Nigeria.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-indigo-500/20">
        <div>
          <h2 className="text-2xl monte">Follow Me</h2>
          <p className="nun">
            Connect with me on social media and professional networks.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap gap-4">
            {/* <a
              href="https://facebook.com"
              className="border-indigo-500 text-indigo-800 hover:bg-indigo-500 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer"
            >
              <FaFacebook className="w-5 h-5 mr-2" />
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer"
            >
              <FaXTwitter className="w-5 h-5 mr-2" />
            </a> */}
            <a
              href="https://linkedin.com"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer"
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-indigo-700/10 to-indigo-800/10 border-indigo-700/30">
        <div className="p-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-2 pops">
            Quick Response
          </h3>
          <p className="text-black/70 outfit">
            I typically respond to messages within 24 hours. For urgent
            matters, feel free to reach out via phone or connect with us on
            social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
