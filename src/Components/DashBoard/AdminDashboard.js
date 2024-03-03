import React from "react";
import { Link } from "react-router-dom";
import MyProfile from "./MyProfile";
import arrowImg from "../../Components/imagess/left-arrow.png";
const AdminDashboard = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn  drawer-button gap-3 mt-3 ml-3"
        >
          <img src={arrowImg} className="h-6 bg-white rounded p-2"></img> See
          more
        </label>
        <MyProfile></MyProfile>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/allusers">Go to DashBoard</Link>
          </li>
          {/* <li>
            <Link to="/myprofile">My Profile</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
