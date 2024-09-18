import React, { useState } from "react";

const Faqs = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Ut enim ad minim veniam?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Duis aute irure dolor in reprehenderit?",
      answer: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Excepteur sint occaecat cupidatat non proident?",
      answer: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Phasellus viverra nulla ut metus varius laoreet?",
      answer: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    },
    {
      question: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Sunt in culpa qui officia deserunt mollit anim id est laborum?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
  ];
  

  return (
    <section className="bg-white py-16 lg:px-16 " id="faqs">
      <div className="container mx-auto px-6"  >
        <div className="mx-auto max-w-2xl lg:text-center"  data-aos="fade-down">
          <h2 className="text-base font-semibold leading-7 text-purple-700">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Queries, Resolved Here.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4"  data-aos="fade-right"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-md  text-gray-900">
                  {faq.question}
                </h3>
                <span>
                  {open === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {open === index && (
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
