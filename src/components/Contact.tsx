import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-transparent p-6 max-w-3xl mx-auto mt-8">
      <div className="bg-gray-800 bg-opacity-80 text-white p-6 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">Contact</h1>
        <p className="mb-4">
          Have a question, feedback, or just want to say hi? Fill out the form
          below to send an email to the creator of Practibot.
        </p>
        <form>
          <label className="block mb-4">
            <span className="block text-white mb-2">Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block mb-4">
            <span className="block text-white mb-2">Email</span>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block mb-4">
            <span className="block text-white mb-2">Message</span>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
