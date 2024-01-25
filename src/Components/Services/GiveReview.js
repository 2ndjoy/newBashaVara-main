import React, { useState } from "react";
import toast from "react-hot-toast";

const GiveReview = () => {
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleClick = () => {
    if (review.trim() !== "") {
      console.log("review:", review);
      setReview("");
      // You can perform any action with the input value here
    } else {
      toast.error("Input is empty. Please enter some text.");
      // Optionally, you can show a message or perform some other action
    }
  };

  return (
    <div>
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        value={review}
        onChange={handleReviewChange}
        placeholder="Enter text..."
      />
      <button className="mt-2 btn btn-sm btn-primary" onClick={handleClick}>
        Give review
      </button>
    </div>
  );
};

export default GiveReview;
