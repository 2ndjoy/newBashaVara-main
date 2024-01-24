import React from "react";

const GiveReview = () => {
  return (
    <div>
      <b>Give a review</b>
      <br />
      <br />
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>{" "}
      <br />
      <button className="btn btn-info btn-sm">Done</button>
    </div>
  );
};

export default GiveReview;
