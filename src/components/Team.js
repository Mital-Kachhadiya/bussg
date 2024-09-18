import React from "react";
import person1 from "../assets/images/person/person1.jpg";
import person2 from "../assets/images/person/person2.jpg";
import person3 from "../assets/images/person/person3.jpg";
import person4 from "../assets/images/person/person4.jpg";
import person5 from "../assets/images/person/person5.jpg";
import person6 from "../assets/images/person/person6.jpg";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: person1,
  },
  {
    name: "Sarah Johnson",
    role: "Chief Operating Officer",
    imageUrl: person2,
  },
  {
    name: "Michael Smith",
    role: "Chief Technology Officer",
    imageUrl: person3,
  },
  {
    name: "Emily Davis",
    role: "Chief Marketing Officer",
    imageUrl: person4,
  },
  {
    name: "James Wilson",
    role: "Chief Financial Officer",
    imageUrl: person5,
  },
  {
    name: "Olivia Martinez",
    role: "Head of Human Resources",
    imageUrl: person6,
  },
];

const Team = () => {
  return (
    <section className="bg-purple-900 py-16 lg:py-24" id="team" >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start lg:justify-between" data-aos="fade-right">
        {/* Left Side: Title and Description */}
        <div className="lg:w-1/3 mb-12 lg:mb-0 px-6 lg:px-0 lg:mx-20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
            rutrum. Aenean imperdiet.{" "}
          </p>
        </div>

        {/* Right Side: Team Members */}
        <div className="lg:w-2/3">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" >
            {people.map((person) => (
              <li key={person.name} className="flex items-center space-x-4" >
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm  text-white">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
