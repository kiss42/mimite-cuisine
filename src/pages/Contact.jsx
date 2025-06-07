import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#D21034] via-white to-[#00209F] py-20 px-6 text-[#00209F]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-800">
            Have a question or want to place a custom order? Reach out to us below!
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-1 text-[#00209F]">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D21034]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-1 text-[#00209F]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D21034]"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold mb-1 text-[#00209F]">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="What would you like to ask?"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D21034]"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#D21034] text-white font-bold px-6 py-3 rounded-md hover:bg-[#bb0f2e] transition w-full md:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
