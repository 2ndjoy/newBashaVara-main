import React, { useEffect, useState } from "react";

const SeeAlluser = () => {
  const [allUsers, setAllusers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setAllusers(data));
  }, []);
  //   const [users] = allUsers;
  console.log("allUsers", allUsers);

  return (
    <div>
      {allUsers.map((item) => (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={item?.nid?.imageUrl} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item?.name}</h2>
            <h2 className="card-title">{item?.email}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Approve Verification</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeAlluser;
