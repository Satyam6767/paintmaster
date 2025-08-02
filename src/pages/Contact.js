import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#f5ebe0]">
      <Navbar />

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 text-amber-900">
          <h1 className="text-4xl font-bold mb-4 mt-10">Get in Touch</h1>
          <p className="text-lg">
            Have questions, suggestions, or just want to say hello? Fill out the form below and we will get back to you soon!
          </p>
        </div>

        <form
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-gray-200 p-8 rounded-lg shadow-lg"
          action="https://formsubmit.co/livlavish9999@example.com"
          method="POST"
        >
          {/* Hidden inputs for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white text-black placeholder-gray-500 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#C77A63]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white text-black placeholder-gray-500 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#C77A63]"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="bg-white text-black placeholder-gray-500 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#C77A63]"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="bg-white text-black placeholder-gray-500 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#C77A63]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="bg-white text-black placeholder-gray-500 md:col-span-2 border border-gray-300 p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#C77A63]"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-[#C77A63] text-white py-3 px-6 rounded hover:bg-[#a45a49] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
