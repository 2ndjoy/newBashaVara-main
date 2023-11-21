import React from "react";
import home1 from "../Components/imagess/home1.jpg";

const CheckDetails = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={home1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className=" font-bold py-6">Available From:</h1>
            <p className="py-6">
              <b>Description:</b>
            </p>
            <p className="py-6">
              <b>Contact:</b>
            </p>
            <button className="btn btn-black">Add for Rent</button>
          </div>
        </div>
      </div>
      <div className="px-5 py-5 mx-6 lg:flex justify-around">
        <div className="">
          <div>
            <b>Give Review:</b>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input mt-4 input-bordered input-error w-full max-w-xs"
          />
          <br />
          <button className="btn mt-5">Send</button>
        </div>
        <div className="lg:mt-0 mt-9 lg:pt-0 pt-9">
          <b>Other's Review:</b>
          <hr />
          <br />
          <div className="mt-2  p-2 border rounded border-4">
            <p className="font-semibold ">Name</p>
            <br /> <p>Very Good Condtion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckDetails;
