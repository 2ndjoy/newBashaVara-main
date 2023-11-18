import React, { useState } from "react";
import PhotoUploadBox from "./PhotoUploadBox ";
import toast from "react-hot-toast";

const MyOrders = () => {
  const sendVerificationData = () => {
    toast.success("Sent successfully");
  };

  const commingSoon = () => {
    toast.success("Coming soon");
  };

  const [cancel, setCancel] = useState(true);
  const cancelBTN = () => {
    setCancel(!cancel);
  };
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
                  {cancel ? (
                    <button
                      onClick={cancelBTN}
                      className="btn btn-error btn-xs"
                    >
                      undo
                    </button>
                  ) : (
                    <button
                      onClick={cancelBTN}
                      className="btn btn-error btn-xs"
                    >
                      Cancel
                    </button>
                  )}
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
                  <label
                    htmlFor="my_modal_7"
                    className="btn btn-xs btn-secondary"
                  >
                    Verify
                  </label>
                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
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
                            htmlFor="my_modal_7"
                            onClick={sendVerificationData}
                          >
                            Send
                          </label>
                          <label
                            className="modal-backdrop btn btn-active btn-error mt-2 pt-1"
                            htmlFor="my_modal_7"
                          >
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <label
                className="modal-backdrop btn btn-active btn-error "
                htmlFor="my_modal_7"
              >
                Close
              </label> */}
                  </div>
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
                  <label
                    htmlFor="my_modal_8"
                    className="btn btn-xs btn-secondary"
                  >
                    Verify
                  </label>
                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_8"
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
                            htmlFor="my_modal_8"
                            onClick={sendVerificationData}
                          >
                            Send
                          </label>
                          <label
                            className="modal-backdrop btn btn-active btn-error mt-2 pt-1"
                            htmlFor="my_modal_8"
                          >
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <label
                className="modal-backdrop btn btn-active btn-error "
                htmlFor="my_modal_7"
              >
                Close
              </label> */}
                  </div>
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
