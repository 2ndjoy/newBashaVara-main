import React from "react";

const MyClients = () => {
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
                <th>Service</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              <tr>
                <th>1</th>
                <td>{"serv?.location"}</td>
                <td>{"serv?.size"}</td>
                <td>{"serv?.contactNo"}</td>
                <td>{"serv?.contactNo"}</td>
                <td></td>
                <td>
                  <button className="btn btn-error btn-xs">Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClients;
