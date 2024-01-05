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
              <button className="btn btn-primary">Allow as verified</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeAlluser;
