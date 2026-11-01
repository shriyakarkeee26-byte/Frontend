import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaEnvelope,
  FaPhone,
  FaHeadset,
  FaWhatsapp
} from "react-icons/fa";
function Contact() {
  const [formdata, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
    setSuccess("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Contact : ", JSON.stringify(formdata));
    setSuccess("Message sent successfully");
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center bg-blue-100">
      <h1 className="text-red-400 font-bold lg:text-2xl">
        Contact Us
      </h1>
      <form
        className="flex flex-col gap-6 border border-gray-300 px-15 py-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your Full Name"
          name="fullName"
          value={formdata.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 px-8 py-2"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-6 py-2"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formdata.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 px-6 py-2"
          required
        />
        <textarea
          placeholder="Your Message"
          name="message"
          value={formdata.message}
          onChange={handleChange}
          className="w-full border border-gray-300 px-6 py-2"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-red-400 text-white font-bold py-2 hover:scale-100 duration-300"
        >
          Send Message
        </button>
      </form>
      {success && <p>{success}</p>}
      
      <footer className="bg-gray-300 text-gray-500 py-10 px-6 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
         
          <div>
            <h3 className="text-green-400 font-bold mb-4">
              Shriya Karki
            </h3>
            <p className="text-sm leading-6">
              I’m currently learning HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy creating websites, exploring new ideas, and improving my coding skills through practice. My goal is to become a skilled web developer and build creative, user-friendly websites.
            </p>
          </div>
   
          <div className="text-center">
            <h3 className="text-green-400 font-bold mb-4">
              Social Contacts
            </h3>
            <div className="flex justify-center items-center gap-5 text-xl">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:text-blue-600 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="hover:text-black transition"
                aria-label="X Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:text-blue-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
  <h3 className="text-green-400 font-bold mb-4">
    Contact Details & 24/7 Support
  </h3>

  <div className="flex flex-col gap-3 text-sm">

    <p className="flex items-center gap-2">
      <FaEnvelope className="text-green-500" />
      <a href="mailto:webcloudsnepal@gmail.com">
        webcloudsnepal@gmail.com
      </a>
    </p>

    <p className="flex items-center gap-2">
      <FaPhone className="text-green-500" />
      9762634769
    </p>

    <p className="flex items-center gap-2">
      <FaPhone className="text-green-500" />
      01-4534181
    </p>

    <p className="flex items-center gap-2">
      <FaPhone className="text-green-500" />
      01-4534182
    </p>

    <p className="flex items-center gap-2 font-semibold">
      <FaHeadset className="text-green-500" />
      Hotline: 9766896866
    </p>

    <a
      href="https://wa.me/9766896866"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
    >
      <FaWhatsapp />
      Book An Appointment
    </a>

  </div>
</div>
        
          <div className="text-center md:text-right">
            <p className="text-sm">
              © All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Contact;
