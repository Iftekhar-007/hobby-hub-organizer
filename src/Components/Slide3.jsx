import React from "react";

const Slide3 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(slide3img.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Start Your <br /> Own Hobby Group Today
            </h1>
            <p className="mb-5">
              Passionate about something unique? Create a group and bring others{" "}
              <br />
              along for the journey. It's free, simple, and rewarding.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
