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

  return (
    <div className="flex justify-center">
      <div className="">
        <b>My Orders</b>
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {services.map((serv) => (
                <tr>
                  <th>1</th>
                  <td>{serv?.location}</td>
                  <td>{serv?.size}</td>
                  <td>{serv?.contactNo}</td>
                  <td>
                    {!cancel ? (
                      <button className="btn btn-success btn-xs">Pay</button>
                    ) : (
                      <b className="text-red-500">Cancelled</b>
                    )}
                  </td>
                  <td>
                    {!cancel ? (
                      <label
                        htmlFor="my_modal_6"
                        className="btn btn-xs btn-secondary"
                      >
                        Verify
                      </label>
                    ) : (
                      <b className="text-red-500">Cancelled</b>
                    )}
                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my_modal_6"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <div className="bg-base p-3 m-3 grid justify-center">
                          Send NID/PASSPORT to owner for verification
                          <PhotoUploadBox></PhotoUploadBox>
                          <div className="flex justify-end">
                            <label
                              className="modal-backdrop btn btn-active btn-success mx-2 mt-2 pt-1"
                              htmlFor="my_modal_6"
                              onClick={sendVerificationData}
                            >
                              Send
                            </label>
                            <label
                              className="modal-backdrop btn btn-active btn-error mt-2 pt-1"
                              htmlFor="my_modal_6"
                            >
                              Close
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
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

export default MyOrders;
