import React, { useContext } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const MyClients = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (loading) {
    refetch();
  }
  const handleDelete = (_id) => {
    console.log(_id);
    const procced = window.confirm("Are you sure to confirm this order");
    if (procced) {
      fetch(`http://localhost:5000/myorders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Deleted successfully");
          }
        });
    }
  };

  console.log("services", services);
  return (
    <div className="flex justify-center">
      <div className="">
        <b>My Clients</b>
        <br />
        <br />
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Client's name</th>
                <th>Client's no</th>
                <th>Client's email</th>
                <th>Service Image</th>
                <th>Location</th>
                <th>Size</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {services.map((serv) => (
                <tr>
                  <td>
                    {" "}
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={serv?.rentTakerImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{serv?.name}</td>
                  <td>{serv?.rentTakerphone}</td>
                  <td>{serv?.email}</td>
                  <td>
                    <div className="mask mask-squircle w-12 h-12">
                      {" "}
                      <img
                        src={serv?.serviceImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>{serv?.location}</td>
                  <td>{serv?.size}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(serv._id)}
                      className="btn btn-error btn-xs"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClients;
