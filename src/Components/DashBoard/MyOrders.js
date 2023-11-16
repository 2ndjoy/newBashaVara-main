import React from "react";

const MyOrders = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <b>My Services:"Coming soon"</b>
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Zindabazar</td>
                <td>Small</td>
                <td>01111121212</td>
                <td>
                  <button className="btn btn-success btn-xs">Pay</button>
                </td>
                <td>
                  <button className="btn btn-error btn-xs">Cancel</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Chowhatta</td>
                <td>Large</td>
                <td>0171464815</td>
                <td>
                  <button className="btn btn-success btn-xs">Pay</button>
                </td>
                <td>
                  <button className="btn btn-error btn-xs">Cancel</button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Tilagor</td>
                <td>Medium</td>
                <td>0145684512</td>
                <td>
                  <button className="btn btn-success btn-xs">Pay</button>
                </td>
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

export default MyOrders;
