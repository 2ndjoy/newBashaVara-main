import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider";
import { useContext } from "react";
import SmallLoaing from "../../SmallLoading/SmallLoaing";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handlelogout = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/homeservices">Home Service</Link>
            </li>
            <li>
              <Link to="/addservices">Add Rental Service</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl font-bold text-black">
          <i>FindBasha</i>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/homeservices">Home Service</Link>
          </li>

          <li>
            <Link to="/addservices">Add Rental Service</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="navbar-end">
          {loading ? (
            <SmallLoaing />
          ) : user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <details className="dropdown mb-32">
                    <summary className="m-1 ">
                      {" "}
                      <b>Dashboard</b>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <Link to="/myservices">My services</Link>
                      </li>
                      <li>
                        <Link to="/myorders">My orders</Link>
                      </li>
                      <li>
                        <Link to="/myprofile">My profile</Link>
                      </li>
                      <li>
                        <Link to="/myclients">My clients</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="mt-2">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={handlelogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-sm btn-outline">
              <Link to="/login" className="text-black">
                Log in
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
    // <div className="navbar bg-slate-200">
    //   <div className="flex-1">
    //     <Link to="/" className="normal-case text-xl font-bold text-black">
    //       <i>FindBasha</i>
    //     </Link>
    //   </div>
    //   <div className="flex-none  text-black">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <Link to="/services">Services</Link>
    //       </li>
    //       <li>
    //         <Link to="/addservices">Add Service</Link>
    //       </li>
    //       {/* <li>
    //         {user?.email ? (
    //           <button onClick={handlelogout} className="btn btn-ghost">
    //             Logout
    //           </button>
    //         ) : (
    //           <Link to="/login">Login</Link>
    //         )}
    //       </li> */}
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     {loading ? (
    //       <SmallLoaing />
    //     ) : user?.email ? (
    //       <div className="dropdown dropdown-end">
    //         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //           <div className="w-10 rounded-full">
    //             <img alt="" src={user?.photoURL} />
    //           </div>
    //         </label>
    //         <ul
    //           tabIndex={0}
    //           className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
    //         >
    //           <li>
    //             <Link to="/dashboard" className="justify-between">
    //               Go to Dashboard
    //             </Link>
    //           </li>
    //           <li className="mt-2">
    //             <button
    //               className="btn btn-sm btn-outline"
    //               onClick={handlelogout}
    //             >
    //               Logout
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     ) : (
    //       <button className="btn btn-sm btn-outline">
    //         <Link to="/login" className="text-black">
    //           Log in
    //         </Link>
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
};

export default Header;
