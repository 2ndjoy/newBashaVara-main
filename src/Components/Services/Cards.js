import React from "react";

const Cards = () => {
  return (
    <div className="my-5 text-black">
      <div className="card h-80  w-80 shadow-xl">
        <figure>
          <img
            src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1690622731~exp=1690626331~hmac=a82fe3b893416a60c4b29763e0c5bba2350fb22e31b978a665cfb3b45584d00e&w=996"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
