import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full py-56">
      <div class="lds-circle">
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
