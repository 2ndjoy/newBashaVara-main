import React, { useContext, useEffect, useState } from "react";
import PhotoUploadBox from "./PhotoUploadBox ";
import toast from "react-hot-toast";
import { AuthContext } from "../../UserContext/AuthProvider";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const sendVerificationData = () => {
    toast.success("Sent successfully");
  };

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [user?.email]);
  const [myId] = myData;
  console.log("myData", myId._id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddService = (data) => {
    // console.log(data);

    const photo = data.photo[0];
    const formData = new FormData();

    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=94c2a478e54e97d802b6d035fdda4286`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const serviceImage = imgData.data.display_url;
          fetch(`http://localhost:5000/users/${myId._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ imageUrl: serviceImage }),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success(`Added to the database successfully`);
              }
            });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen text-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={user?.photoURL} className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-2xl font-bold">{user?.displayName}</h1>
            <p className="py-6">
              <b>Contact: </b> 01777777777
            </p>
            <p>
              <b>Email: </b> {user?.email}
            </p>
            <button className="btn btn-primary mt-5">Edit</button>
            <br />
            <br />
            <div className="flex items-center justify-center">
              <label htmlFor="my_modal_7" className="btn btn-success">
                Verification
              </label>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <form onSubmit={handleSubmit(handleAddService)}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text text-black">
                        Select picture
                      </span>
                    </label>
                    <input
                      className="input w-full max-w-xs"
                      {...register("photo", { required: "Photo is required" })}
                      type="file"
                    />
                  </div>
                  {errors.photo && (
                    <p role="alert" className="text-warning">
                      {errors.photo.message}
                    </p>
                  )}

                  <div className="flex justify-end">
                    <input
                      className="modal-backdrop btn btn-active btn-success mx-2 mt-2 pt-1"
                      htmlFor="my_modal_7"
                      value="Send"
                      type="submit"
                    />
                    <label
                      className="modal-backdrop btn btn-active btn-error mt-2 pt-1"
                      htmlFor="my_modal_7"
                    >
                      Close
                    </label>
                  </div>
                </form>
              </div>
              {/* <label
                className="modal-backdrop btn btn-active btn-error "
                htmlFor="my_modal_7"
              >
                Close
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
