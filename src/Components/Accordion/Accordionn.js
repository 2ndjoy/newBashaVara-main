import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="px-4 py-2 font-semibold text-left bg-gray-200 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div
        className={`overflow-hidden duration-700 transition-max-height ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 text-gray-500">{children}</div>
      </div>
    </div>
  );
};

const Accordionn = () => {
  return (
    <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
      <Accordion title="Who are we?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate
        repellendus molestias, quod maxime neque!
      </Accordion>
      <Accordion title="Section 2" className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate
        repellendus molestias, quod maxime neque!
      </Accordion>
    </div>
  );
};

export default Accordionn;
