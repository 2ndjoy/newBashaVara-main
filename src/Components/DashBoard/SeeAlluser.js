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
        <p>
          <b>Name:</b> <i>{item.name}</i> <b>Status:</b>
          <b>Email{item.email}</b>
          <img src={item?.nid?.imageUrl} alt="" srcset="" />
        </p>
      ))}
    </div>
  );
};

export default SeeAlluser;
