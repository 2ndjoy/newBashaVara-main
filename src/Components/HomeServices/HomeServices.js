import React from "react";
import Cards from "../Services/Cards";

const HomeServices = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWrZmxqHFRMdvFD1LQbgumSK6vizakJH7PP6UV0cH7ahijpWvyhZMERxyW14KjodMu5I&usqp=CAU)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              We also offer other services
            </h1>
            <p className="mb-5">Check our cleaning services</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:gap-16 gap-0 lg:mx-32 justify-center lg:justify-center my-11">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cleaning Services 1</h2>
            <h2 className="card-title">Price: 2000tk</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1329006104/photo/cheerful-young-housewife-holding-bucket-with-cleaning-supplies.jpg?s=612x612&w=0&k=20&c=9sYffJHz7gGHfr78k7DITVDqjNfPyA5KDUo2aKi3xoQ="
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cleaning Services 2</h2>
            <h2 className="card-title">Price: 2000tk</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKv08j01sCpHwojsu4RaiXtVz0bWeJNc2vSAxZfDq3RF0HQo2KLC2MyPefgzofJeHMbhE&usqp=CAU"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cleaning Services 3</h2>
            <h2 className="card-title">Price: 2000tk</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
