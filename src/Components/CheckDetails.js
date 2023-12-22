import React, { useContext } from "react";
import home1 from "../Components/imagess/home1.jpg";
import { AuthContext } from "../UserContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const CheckDetails = () => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    renterName,
    rentFee,
    availability,
    size,
    description,
    serviceImage,
    renterPhoneNumber,
    serviceLocation,
    email,
  } = useLoaderData();
  console.log("CheckDetails", _id);

  const handleRent = () => {
    if (user?.email) {
      const rent = {
        id: _id,
        location: serviceLocation,
        size: size,
        contactNo: renterPhoneNumber,
        email: user.email,
      };

      fetch("http://localhost:5000/myorders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(rent),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            toast.success(`You Have booked successfully`);
          }
        });

      console.log(rent);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={serviceImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className=" py-6">
              <b>Available From:</b> {availability}
            </p>
            <p className="py-6">
              <b>Description: </b>
              {description}
            </p>
            <p className="py-6">
              <b>Contact: </b>
              {renterPhoneNumber}
            </p>
            <button className="btn btn-black" onClick={() => handleRent(_id)}>
              Add for Rent
            </button>
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
