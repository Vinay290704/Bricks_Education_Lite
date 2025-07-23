import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it and show a success toast.
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We will get back to you soon."); // Replaced alert with toast
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-16">
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get in Touch with Bricks
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mt-4">
            We'd love to hear from you! Whether you have questions about our
            robotics and programming courses or want to enroll your child, our
            team is here to help.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8 border border-[#EEEEEE] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Contact Information
            </h2>
            <p className="text-[#555555] leading-relaxed mb-6">
              For inquiries regarding our robotics and programming courses,
              enrollment, or program details, please reach out to us.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5722]/10 text-[#FF5722] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Address:
                  </h3>
                  <p className="text-[#555555]">
                    Electronic City Phase 1 , Bengaluru , Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5722]/10 text-[#FF5722] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Phone:
                  </h3>
                  <a
                    href="tel:+919871672790"
                    className="text-[#FF5722] hover:underline"
                  >
                    +91 98716 72790
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5722]/10 text-[#FF5722] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Email:
                  </h3>
                  <a
                    href="mailto:support@bricks.org.in"
                    className="text-[#FF5722] hover:underline"
                  >
                    support@bricks.org.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5722]/10 text-[#FF5722] flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    LinkedIn:
                  </h3>
                  <a
                    href="https://www.linkedin.com/company/bricks-education"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF5722] hover:underline"
                  >
                    Bricks Education LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 border border-[#EEEEEE]">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#EEEEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent transition-all duration-200 text-[#333333] bg-[#FDFDFD]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#EEEEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent transition-all duration-200 text-[#333333] bg-[#FDFDFD]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#EEEEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent transition-all duration-200 text-[#333333] bg-[#FDFDFD]"
                placeholder="Subject of your message"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#EEEEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent transition-all duration-200 text-[#333333] bg-[#FDFDFD]"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-semibold rounded-md shadow-lg hover:from-[#FF7043] hover:to-[#FF5722] transition-all duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
