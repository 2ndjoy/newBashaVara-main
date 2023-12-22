import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";

const MyServices = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (loading) {
    refetch();
  }

  console.log(services);
  return (
    <div className="flex justify-center">
      <div className="">
        <b>My Services:"Coming soon"</b>
        <br />
        <br />
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Location</th>
                <th>Size</th>
                <th>Contact no</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {loading ? (
                <p>Loading</p>
              ) : (
                services?.map((serv) => (
                  <tr>
                    <th></th>
                    <td>{serv.serviceLocation}</td>
                    <td>{serv.size}</td>
                    <td>{serv.renterPhoneNumber}</td>
                    <td>
                      <button className="btn btn-success btn-xs">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-error btn-xs">Delete</button>
                    </td>
                  </tr>
                ))
              )}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
