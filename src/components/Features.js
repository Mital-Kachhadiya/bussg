import React from "react";
import {
  UserGroupIcon,
  BellAlertIcon,
  CogIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const allFeatures = [
  {
    name: "Support 24/7",
    description:
      "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
    icon: CogIcon,
  },
  {
    name: "User Friendly",
    description:
      "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.",
    icon: UserGroupIcon,
  },
  {
    name: "Notifications",
    description:
      "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.",
    icon: BellAlertIcon,
  },
  {
    name: "Chat With Friends",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper ultricies nisi. Nam eget dui. ",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Accessibility",
    description:
      "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    icon: GlobeAltIcon,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-down">
          <h2 className="text-base font-semibold leading-7 text-purple-700">
            Amazing Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Innovative Solutions Designed to Elevate Your Experience
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mx-auto mt-16 ">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
            {allFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-16" data-aos="flip-left">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
