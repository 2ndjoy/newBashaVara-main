import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/service");
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      {services.map((servic) => (
        <div>
          <div className="card card-compact w-56 h-3/4 bg-slate-400 text-black shadow-xl">
            <figure>
              <img
                src={servic?.serviceImage}
                alt="Shoes"
                className="h-56 w-56"
              />
            </figure>
            <div className="card-body">
              <p className="bold">
                <span className="font-bold">Location:</span>{" "}
                {servic?.serviceLocation}
              </p>
              <p className="bold">
                <span className="font-bold">Size: </span>
                {servic?.size}
              </p>
              <p className="bold">
                <span className="font-bold">Rent fee:</span> {servic?.rentFee}{" "}
                tk
              </p>
              <p className="bold">
                <span className="font-bold">Available from</span>{" "}
                {servic?.availability}
              </p>
              <p className="bold">
                <span className="font-bold">Owner: </span>
                {servic?.renterName}
              </p>
              <p className="bold">
                <span className="font-bold">Contact: </span>
                {servic?.renterPhoneNumber}
              </p>
              <p>
                <span className="font-bold">Details: </span>
                {servic?.description}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/services/${servic?._id}`}>
                  <button className="btn btn-primary">Check</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeServices;
