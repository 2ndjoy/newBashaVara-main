import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
import toast from "react-hot-toast";

const SeeAlluser = () => {
  const [allUsers, setAllusers] = useState([]);

  const { user, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setAllusers(data));
  }, []);
  //   const [users] = allUsers;
  console.log("allUsers", allUsers);

  console.log(allUsers);

  const addStatus = (id) => {
    fetch(`http://localhost:5000/userss/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(
            "Verified Successfully,Refresh the page to see the update"
          );
        }
      });
    // console.log(id);
  };

  return (
    <div className="grid justify-center gap-6">
      {allUsers.map((item) => (
        <div className="card w-96 bg-base-500 shadow-xl">
          <figure>
            {" "}
            <img src={item?.nid?.imageUrl} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">User Name: {item?.name}</h2>
            <p>User Email: {item?.email}</p>
            <div className="card-actions justify-end">
              {user?.displayName == item?.name ? (
                <p>This is you</p>
              ) : item?.status === "verified" ? (
                <p>This user is verified</p>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => addStatus(item?._id)}
                >
                  Allow as verified
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeAlluser;
