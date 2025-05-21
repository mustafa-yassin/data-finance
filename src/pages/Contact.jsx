import React from "react";

const Contact = () => {
  return (
    <div className="w-full mt-16 min-h-screen flex flex-col justify-center items-center bg-white text-black">
      <h2 className="text-4xl font-bold mb-4" style={{ color: "#00df9a" }}>
        Contact Us
      </h2>
      <p className="text-lg max-w-xl text-center">
        Have questions or want to get in touch? Reach out to our team and we’ll
        be happy to assist you with your financial needs.
      </p>
      <form className="mt-8 w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-black rounded focus:outline-none focus:border-[#00df9a] bg-white text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-black rounded focus:outline-none focus:border-[#00df9a] bg-white text-black"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border border-black rounded focus:outline-none focus:border-[#00df9a] bg-white text-black"
          rows={4}
        />
        <button
          type="submit"
          className="bg-[#00df9a] text-black font-bold py-3 rounded hover:bg-black hover:text-white transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
