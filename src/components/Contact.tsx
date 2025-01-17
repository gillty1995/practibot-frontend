import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to send your message.");
      }

      const data = await response.json();
      setSuccess(data.message || "Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-transparent p-6 max-w-3xl mx-auto mt-8">
      <div className="bg-gray-800 bg-opacity-80 text-white p-6 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">Contact</h1>
        <p className="mb-4">
          Have a question, feedback, or just want to say hi? Fill out the form
          below to send an email to the creator of Practibot.
        </p>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {success && <p className="text-green-400 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-white mb-2">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block text-white mb-2">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block text-white mb-2">Message</span>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
