import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import arrowImg from "../../Components/imagess/left-arrow.png";
import { useQuery } from "@tanstack/react-query";
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

  const handleDelete = (_id) => {
    console.log(_id);
    const procced = window.confirm("Are you sure to confirm this order");
    if (procced) {
      fetch(`http://localhost:5000/userss/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // refetch();
            toast.success("Deleted successfully");
          }
        });
    }
  };

  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      return data;
    },
  });
  console.log(user);

  return (
    <div className="grid justify-center gap-6 border-4 border-blue-400">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-primary">{allUsers.length}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Services</div>
          <div className="stat-value text-secondary">{services.length}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <Link to="/admindash">
                <div className="w-16 rounded-full">
                  <img src={user.photoURL} className="rounded-full"></img>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/admindash" className="mt-5"></Link>
      {allUsers.map((item) => (
        <div className="card w-96 bg-base-500 shadow-xl">
          <figure>
            {" "}
            <img src={item?.nid?.imageUrl} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">User Name: {item?.name}</h2>
            <p>User Email: {item?.email}</p>
            <div className="flex items-center space-x-4">
              <div className="card-actions justify-end">
                {user?.displayName == item?.name ? (
                  <p>This is you</p>
                ) : item?.status === "verified" ? (
                  <p>This user is verified</p>
                ) : (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => addStatus(item?._id)}
                  >
                    Allow as verified
                  </button>
                )}
              </div>
              <div>
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="btn btn-error btn-xs"
                >
                  Delete this user
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeAlluser;
