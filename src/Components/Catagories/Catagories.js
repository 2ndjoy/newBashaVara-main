import React from "react";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <div className="lg:flex grid lg:justify-evenly justify-center lg:gap-3 gap-2 text-black">
      <Link to="/">
        <div className="border border-r-sky-200 rounded p-2">
          Find small apartment
        </div>
      </Link>
      <Link to="/">
        <div className="border border-r-sky-200 rounded p-2">
          Find medium apartment
        </div>
      </Link>
      <Link to="/">
        <div className="border border-r-sky-200 rounded p-2">
          Find large apartment
        </div>
      </Link>
    </div>
  );
};

export default Catagories;
