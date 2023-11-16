import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b border-gray-200">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">About us</h2>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 16a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 13.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 16z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && <div className="mt-4">Hi kidssss</div>}
    </div>
  );
};

export default Accordion;
