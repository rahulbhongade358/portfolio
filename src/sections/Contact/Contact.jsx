import React from "react";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16 mt-5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Contact <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Feel free to reach out for internships, collaborations or just to
            say hello 😊
          </p>

          <div className="mt-10 bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <form
              action="https://formsubmit.co/YOUR_EMAIL"
              method="POST"
              className="grid gap-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:border-blue-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:border-blue-400"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:border-blue-400"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
