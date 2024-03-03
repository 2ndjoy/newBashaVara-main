import React, { useContext, useState } from "react";
import PhotoUploadBox from "./PhotoUploadBox ";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../UserContext/AuthProvider";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myorders/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (loading) {
    refetch();
  }
  console.log(services);
  const sendVerificationData = () => {
    toast.success("Sent successfully");
  };

  const commingSoon = () => {
    toast.success("Coming soon");
  };

  const [cancel, setCancel] = useState(true);

  const handleDelete = (_id) => {
    console.log(_id);
    const procced = window.confirm("Are you sure to confirm this process");
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

  const handleDone = (_id) => {
    console.log(_id);
    const procced = window.confirm("Are you sure to confirm this order");
    if (procced) {
      fetch(`http://localhost:5000/services/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            handleDelete(_id);
            refetch();
            toast.success("Rented successfully");
          } else {
            toast.success("Already rented");
          }
        });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <b>My Checklist</b>
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
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {services.map((serv) => (
                <tr>
                  <th></th>
                  <td>{serv?.location}</td>
                  <td>{serv?.size}</td>
                  <td>{serv?.contactNo}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button
                      onClick={() => handleDelete(serv._id)}
                      className="btn btn-error btn-xs"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDone(serv.id)}
                      className="btn btn-success btn-xs"
                      title="Call to owner before renting"
                    >
                      Rent now
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

export default MyOrders;
