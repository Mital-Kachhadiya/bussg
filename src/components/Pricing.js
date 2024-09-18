import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const plans = [
  {
    name: "Basic",
    price: "$19",
    features: [
      { text: "Lorem, ipsum dolor.", available: true },
      { text: "Harum, beatae laudantium", available: true },
      { text: "Odit, fugit saepe", available: true },
      { text: "Harum, veniam suscipit!", available: false },
      { text: "A, aut veritatis!", available: false },
      { text: "Aliquid, quasi repellat!", available: false },
    ],
    callout: "Great for small projects!",
  },
  {
    name: "Pro",
    price: "$49",
    features: [
      { text: "Lorem, ipsum dolor.", available: true },
      { text: "Harum, beatae laudantium", available: true },
      { text: "Odit, fugit saepe", available: true },
      { text: "Harum, veniam suscipit!", available: true },
      { text: "A, aut veritatis!", available: true },
      { text: "Aliquid, quasi repellat!", available: false },
    ],
    popular: true,
    callout: "Perfect for growing businesses.",
  },
  {
    name: "Enterprise",
    price: "$99",
    features: [
      { text: "Lorem, ipsum dolor.", available: true },
      { text: "Harum, beatae laudantium", available: true },
      { text: "Odit, fugit saepe", available: true },
      { text: "Harum, veniam suscipit!", available: true },
      { text: "A, aut veritatis!", available: true },
      { text: "Aliquid, quasi repellat!", available: true },
    ],
    callout: "Best value for large enterprises.",
  },
];

const PricingPlan = () => {

  return (
    <div className="bg-purple-50 py-8 px-4 lg:px-6" id="pricing">
      <div className="text-center mb-8" data-aos="fade-down" >
        <p className="text-base font-semibold leading-7 text-purple-700">Pricing Plans</p>
        <h1 className="mt-2 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          Choose a plan tailored to your business needs.
        </h1>
        <p className="mt-4 text-md lg:text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="container mx-auto grid gap-4 lg:grid-cols-3 sm:grid-cols-1 lg:px-32" data-aos="fade-down">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border rounded-lg p-4 lg:p-6 text-center bg-white transition transform hover:scale-105 ${
              plan.popular ? "border-purple-600 shadow-md" : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-purple-600 text-white py-1 px-3 rounded-bl-lg text-xs font-semibold">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-bold text-purple-900">{plan.name}</h3>
            <p className="text-3xl font-extrabold my-5 text-purple-600">{plan.price}</p>
            <p className="text-xs text-gray-500 mb-3">{plan.callout}</p>
            <ul className="space-y-2 mb-4 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center py-1 text-gray-700">
                  {feature.available ? (
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
