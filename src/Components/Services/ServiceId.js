import React from "react";
import { Link } from "react-router-dom";

const ServiceId = ({ service }) => {
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
  } = service;
  // console.log(_id)
  // const serbiv;
  return (
    <div>
      <div className="card card-compact w-56 h-3/4 bg-slate-400 text-black shadow-xl">
        <figure>
          <img src={serviceImage} alt="Shoes" className="h-56 w-56" />
        </figure>
        <div className="card-body">
          <p className="bold">
            <span className="font-bold">Location:</span>{" "}
            {serviceLocation.toUpperCase()}
          </p>
          <p className="bold">
            <span className="font-bold">Size: </span>
            {size.toUpperCase()}
          </p>
          <p className="bold">
            <span className="font-bold">Rent fee:</span> {rentFee}
          </p>
          <p className="bold">
            <span className="font-bold">Available from</span>{" "}
            {availability.toUpperCase()}
          </p>
          <p className="bold">
            <span className="font-bold">Owner: </span>
            {renterName.toUpperCase()}
          </p>
          <p className="bold">
            <span className="font-bold">Contact: </span>
            {renterPhoneNumber.toUpperCase()}
          </p>
          <p>
            <span className="font-bold">Details: </span>
            {description.toUpperCase()}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">Check</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceId;
