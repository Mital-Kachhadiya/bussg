import React, { useState, useEffect } from 'react';
import person1 from "../assets/images/person/person1.jpg";
import person2 from "../assets/images/person/person2.jpg";
import person3 from "../assets/images/person/person3.jpg";
import person4 from "../assets/images/person/person4.jpg";
import backgroundImage from "../assets/images/common/testimonial-bg.jpg"; // Replace with your background image

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Example Corp',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: person1,
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director, Acme Co.',
      feedback:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: person2,
    },
    {
      name: 'Michael Johnson',
      role: 'Founder, Startup XYZ',
      feedback:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Phasellus viverra nulla ut metus varius laoreet.',
      image: person3,
    },
    {
      name: 'Emily Davis',
      role: 'CTO, Tech Innovators',
      feedback:
        'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
      image: person4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Calculate the number of slides
  const numberOfSlides = Math.ceil(testimonials.length / 2);

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
          <p className="mt-2 text-indigo-200">
            Discover how we've helped businesses grow and succeed.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative w-full overflow-hidden" data-aos="zoom-in">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: numberOfSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex min-w-full gap-6 px-2"
              >
                {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:z-10"
                    style={{ boxSizing: 'border-box' }}
                  >
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-4 border-purple-600 shadow-md mb-2"
                      />
                      <h3 className="text-md font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                    <p className="text-gray-600 text-sm italic">"{testimonial.feedback}"</p>
                    <div className="mt-2 text-yellow-500 text-lg">★ ★ ★ ★ ★</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: numberOfSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
