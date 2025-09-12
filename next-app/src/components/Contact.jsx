"use client";
import axios from "axios";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInfoCircle,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const trimmedMessage = form.message.trim();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (trimmedMessage.length < 50) {
      setError("Message must be at least 50 characters long.");
      setTimeout(() => setError(""), 5000);
      return;
    }

    setSending(true);
    setSuccess("");
    setError("");
    try {
      const res = await axios.post("/api/sendEmail", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError("Failed to send message. Try again.");
        setTimeout(() => setError(""), 5000);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setTimeout(() => setError(""), 5000);
    } finally {
      setSending(false);
    }
  };

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    trimmedMessage &&
    trimmedMessage.length >= 50;

  const getTooltipMessage = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.email.trim()) return "Please enter your email";
    if (!form.message.trim()) return "Please enter a message";
    if (trimmedMessage.length < 50)
      return `Message must be at least 50 characters (${trimmedMessage.length}/50)`;
    return "";
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 min-h-screen flex items-center justify-center py-16 px-4"
    >
      <div className="absolute inset-0 bg-[#100124] bg-opacity-20"></div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's connect!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 italic mb-12">
            <span className="text-yellow-300">
              Mind chatting over some virtual pancakes?
            </span>{" "}
            🥞
          </p>
        </div>

        <div className="mb-20">
          <div className="flex justify-center space-x-8 md:space-x-12 mb-16">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sarah-osuji-a5821b121/"
              className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
            >
              <div className="bg-white p-4 rounded-full shadow-2xl group-hover:shadow-blue-400/30 group-hover:bg-blue-50 transition-all duration-300 mb-3">
                <FaLinkedinIn className="text-3xl md:text-4xl text-blue-600 group-hover:text-blue-700" />
              </div>
              <span className="text-white text-sm md:text-base font-medium group-hover:text-blue-300">
                LinkedIn
              </span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Honeylyte"
              className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
            >
              <div className="bg-white p-4 rounded-full shadow-2xl group-hover:shadow-blue-300/30 group-hover:bg-blue-50 transition-all duration-300 mb-3">
                <FaTwitter className="text-3xl md:text-4xl text-blue-400 group-hover:text-blue-500" />
              </div>
              <span className="text-white text-sm md:text-base font-medium group-hover:text-blue-300">
                Twitter
              </span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ChiomaSarah"
              className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
            >
              <div className="bg-white p-4 rounded-full shadow-2xl group-hover:shadow-gray-400/30 group-hover:bg-gray-50 transition-all duration-300 mb-3">
                <FaGithub className="text-3xl md:text-4xl text-gray-700 group-hover:text-gray-800" />
              </div>
              <span className="text-white text-sm md:text-base font-medium group-hover:text-gray-300">
                GitHub
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
            ... or drop me a message
          </h3>

          <form className="space-y-6 max-w-md mx-auto" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/10"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/10"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your message... (minimum 50 characters)"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none"
              ></textarea>
              <div className="absolute bottom-2 right-3 text-xs text-gray-400">
                {trimmedMessage.length}/50
              </div>
            </div>

            <div
              className="flex justify-center relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                type="submit"
                disabled={sending || !isFormValid}
                className={`px-8 py-4 rounded-full border font-bold transition-all duration-500 transform text-center ${
                  sending || !isFormValid
                    ? "bg-gray-400/30 border-gray-400/50 text-gray-400 cursor-not-allowed"
                    : "bg-white/90 border-transparent text-blue-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-400/30 cursor-pointer"
                }`}
              >
                {sending ? (
                  <div className="flex items-center justify-center">
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              {!isFormValid && showTooltip && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg z-10 whitespace-nowrap">
                  <div className="flex items-center">
                    <FaInfoCircle className="mr-2 text-yellow-400" />
                    {getTooltipMessage()}
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </div>

            {success && (
              <div className="mt-6 px-4 py-3 rounded-xl text-sm font-medium text-center bg-green-500/20 text-green-300 transition-all duration-300">
                {success}
              </div>
            )}
            {error && (
              <div className="mt-6 px-4 py-3 rounded-xl text-sm font-medium text-center bg-red-500/20 text-red-300 transition-all duration-300">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-40 animate-ping"></div>
    </section>
  );
};

export default Contact;
