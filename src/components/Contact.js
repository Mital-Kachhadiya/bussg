import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-200 py-16 lg:py-24" id="contact">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:justify-between lg:items-center">
          {/* Contact Information */}
          <div className="lg:w-1/2 lg:pr-12"  data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Get in Touch with Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have any questions or want to start a project? Send us a message, and we’ll respond as soon as possible.
            </p>

            <div className="mt-10 space-y-6">
              {/* Email */}
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a1 1 0 001.11 0L20 8M21 12.08V16a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.92M21 8l-8.89 5.26a1 1 0 01-1.11 0L3 8"
                    />
                  </svg>
                </div>
                <span className="ml-4 text-lg font-medium text-gray-700">email@example.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h18M3 10h18M3 15h18M3 20h18"
                    />
                  </svg>
                </div>
                <span className="ml-4 text-lg font-medium text-gray-700">+1 234 567 8901</span>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A2 2 0 013 15.618V6a2 2 0 012-2h14a2 2 0 012 2v9.618a2 2 0 01-1.553 1.658L15 20v-5H9v5z"
                    />
                  </svg>
                </div>
                <span className="ml-4 text-lg font-medium text-gray-700">1234 Street, City</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 lg:mt-0 lg:w-1/2"  data-aos="zoom-in">
            <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
