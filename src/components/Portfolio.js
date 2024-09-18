import React from "react";
import portfolio1 from "../assets/images/portfolio/portfolio1.jpg";
import portfolio2 from "../assets/images/portfolio/portfolio2.jpg";
import portfolio3 from "../assets/images/portfolio/portfolio3.jpg";
import portfolio4 from "../assets/images/portfolio/portfolio4.png";
import portfolio5 from "../assets/images/portfolio/portfolio5.jpg";
import portfolio6 from "../assets/images/portfolio/portfolio6.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce website built with React, Node.js, and MongoDB.",
      image: portfolio1,
      link: "#",
    },
    {
      title: "Personal Blog",
      description:
        "A minimalist personal blog platform built using GatsbyJS and GraphQL.",
      image: portfolio2,
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills, built with Next.js.",
      image: portfolio3,
      link: "#",
    },
    {
      title: "Social Media App",
      description:
        "A social media platform built using React Native for cross-platform mobile development.",
      image: portfolio4,
      link: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce website built with React, Node.js, and MongoDB.",
      image: portfolio5,
      link: "#",
    },
    {
      title: "Personal Blog",
      description:
        "A minimalist personal blog platform built using GatsbyJS and GraphQL.",
      image: portfolio6,
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-base font-semibold leading-7 text-purple-700">
            Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Check Out Our Latest Creations
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
            data-aos="flip-up"
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="text-white text-lg font-semibold hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
