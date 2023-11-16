import React, { useContext, useEffect, useState } from "react";
import ServiceId from "./ServiceId";
import { AuthContext } from "../../UserContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
  // const [services, setServices] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  // console.log(services);

  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      return data;
    },
  });

  if (loading) {
    refetch();
  }

  return (
    <div className=" lg:mx-24 my-16 mx-0">
      <div className="py-0 mb-32 grid lg:grid-cols-4 md:grid-cols-3 justify-center gap-2">
        {loading ? (
          <p>Loading</p>
        ) : (
          services.map((service) => (
            <ServiceId
              key={service._id}
              service={service}
              refetch={refetch}
              setLoading={setLoading}
            ></ServiceId>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
