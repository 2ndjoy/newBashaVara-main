import React, { useContext, useState } from "react";
import home1 from "../Components/imagess/home1.jpg";
import { AuthContext } from "../UserContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import Reviews from "./Services/Reviews";
import GiveReview from "./Services/GiveReview";

const CheckDetails = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleClick = () => {
    if (review.trim() !== "") {
      // const

      const reviewDetails = {
        service_id: _id,
        userName: user.displayName,
        userEmail: user.email,
        review: review,
      };

      fetch(`http://localhost:5000/reviews`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Thanks for your review");

            setReview("");
            refetch();
          }
        });
      console.log("review:", reviewDetails);

      // setReview("");
      // You can perform any action with the input value here
    } else {
      toast.error("Input is empty. Please enter some text.");
      // Optionally, you can show a message or perform some other action
    }
  };
  const {
    _id,
    renterName,
    rentFee,
    availability,
    size,
    description,
    serviceImage,
    renterPhoneNumber,
    serviceLocation,
    email,
  } = useLoaderData();
  // console.log("CheckDetails", _id);

  const { data: reviewss = [], refetch } = useQuery({
    queryKey: ["reviewss"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reviews/${_id}`);
      const data = await res.json();
      return data;
    },
  });
  console.log("reviewss", reviewss);

  const handleRent = () => {
    if (user?.email) {
      const rent = {
        id: _id,
        location: serviceLocation,
        size: size,
        contactNo: renterPhoneNumber,
        email: user.email,
      };

      fetch("http://localhost:5000/myorders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(rent),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            toast.success(`You Have booked successfully`);
            // setLoading(true);
            refetch();
          }
        });

      console.log(rent);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={serviceImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className=" py-6">
              <b>Available From:</b> {availability}
            </p>
            <p className="py-6">
              <b>Description: </b>
              {description}
            </p>
            <p className="py-6">
              <b>Contact: </b>
              {renterPhoneNumber}
            </p>
            <button className="btn btn-black" onClick={() => handleRent(_id)}>
              Add for Rent
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 py-5 mx-6 lg:flex justify-around lg:mt-2 mt-9">
        <div>
          <div className="lg:mb-0 mb-5">
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={review}
              onChange={handleReviewChange}
              placeholder="Enter text..."
            />
            <button
              className="lg:mx-0  mx-3 mt-2 btn btn-sm btn-info"
              onClick={handleClick}
            >
              Give review
            </button>
          </div>
        </div>
        <div className="lg:mt-0 mt-4">
          <b>Reviews</b>
          <br />
          {reviewss.map((review) => (
            <div className="border-solid border-2 border-blue-400 p-5 rounded lg:mt-2 mt-3">
              <b>{review?.userName}</b>
              {/* <hr className="h-5" /> */}
              <br />
              <p>{review?.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckDetails;
