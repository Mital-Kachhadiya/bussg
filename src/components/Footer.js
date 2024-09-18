import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-4 flex-grow">
            {" "}
            {/* Smaller gap for first 4 sections */}
            {/* Solutions Section */}
            <div className="flex-1 min-w-[120px]">
              <h3 className="text-lg font-semibold text-white mb-4">
                Solutions
              </h3>
              <ul className="space-y-2">
                <li>Marketing</li>
                <li>Analytics</li>
                <li>Commerce</li>
                <li>Insights</li>
              </ul>
            </div>
            {/* Support Section */}
            <div className="flex-1 min-w-[120px]">
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API Status</li>
              </ul>
            </div>
            {/* Company Section */}
            <div className="flex-1 min-w-[120px]">
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a  href="#about" >About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ul>
            </div>
            {/* Legal Section */}
            <div className="flex-1 min-w-[120px]">
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Claim</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="flex-1 min-w-[250px]">
            {" "}
            {/* Larger section width */}
            <h3 className="text-lg font-semibold text-white mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mb-3 sm:mb-0 sm:mr-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-gray-300 placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
