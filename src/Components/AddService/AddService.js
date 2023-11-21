import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider";

const AddService = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useContext(AuthContext);

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
          const service = {
            renterName: data.sellerName,
            rentFee: data.rentFee,
            availability: data.availability,
            size: data.size,
            description: data.description,
            serviceImage: imgData.data.display_url,
            renterPhoneNumber: data.renterPhoneNumber,
            serviceLocation: data.serviceLocation,
            email: user.email,
          };
          fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success(`Added to the database successfully`);
                navigate("/services");
                reset();
              }
            });
          console.log(service);
          // reset();
        }
      });
  };
  return (
    <div className="grid  justify-center py-11">
      <div className="w-96 p-7">
        <h2 className="text-3xl font bold text-center text-black mt-11 mb-9">
          Add service
        </h2>
        <form onSubmit={handleSubmit(handleAddService)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Your Name</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              defaultValue={user?.displayName}
              {...register("sellerName", {
                required: "Seller Name is required",
              })}
              type="text"
            />
          </div>
          {errors.renterName && (
            <p role="alert" className="text-warning">
              {errors.renterName.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Rent fee</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("rentFee", { required: "Rent fee is required" })}
              type="text"
            />
          </div>
          {errors.rentFee && (
            <p role="alert" className="text-warning">
              {errors.rentFee.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Location</span>
            </label>
            <select
              className="select input-bordered w-full max-w-xs"
              {...register("serviceLocation", {
                required: "Location is required",
              })}
            >
              <option value="">Select a location</option>{" "}
              <option value="sylhet">Sylhet</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="barishal">Barishal</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="khulna">Khulna</option>
            </select>
          </div>

          {errors.serviceLocation && (
            <p role="alert" className="text-warning">
              {errors.serviceLocation.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Size</span>
            </label>
            <select
              className="select input-bordered w-full max-w-xs"
              {...register("size", {
                required: "Size is required",
              })}
            >
              <option value="">Select a size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {errors.size && (
            <p role="alert" className="text-warning">
              {errors.size.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Phone number</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("renterPhoneNumber", {
                required: "Phone number is required",
              })}
              type="text"
            />
          </div>
          {errors.renterPhoneNumber && (
            <p role="alert" className="text-warning">
              {errors.renterPhoneNumber.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Select picture</span>
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

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Available from</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("availability", {
                required: "availability is required",
              })}
              type="text"
            />
          </div>
          {errors.availability && (
            <p role="alert" className="text-warning">
              {errors.availability.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Description</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: "Description is required",
              })}
              type="text"
            />
          </div>
          {errors.description && (
            <p role="alert" className="text-warning">
              {errors.description.message}
            </p>
          )}

          <input
            className="btn bg-blue-600 text-white w-1/2 my-4"
            value="Add service"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
