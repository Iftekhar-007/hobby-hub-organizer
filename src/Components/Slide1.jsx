import React from "react";

const Slide1 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.postimg.cc/431RFy9j/slide1img.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Discover New Passions Near You
            </h1>
            <p className="mb-5">
              From painting to photography, gardening to gaming—find local
              groups that share your <br /> interests and make new friends along
              the way
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
