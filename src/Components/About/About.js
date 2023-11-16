import React from "react";
import Accordionn from "../Accordion/Accordionn";
import Accordion from "../Accordion/Accordion";

const About = () => {
  return (
    <div className="text-black lg:flex lg:justify-evenly my-44 grid justify-center">
      {/* <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div> */}
      <Accordionn></Accordionn>
      {/* <Accordion></Accordion> */}
    </div>
  );
};

export default About;
