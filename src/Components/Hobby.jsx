import React from "react";

const Hobby = ({ hobby }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={hobby.img}
            alt="Shoes"
            className="rounded-xl w-[320px] h-[520px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{hobby.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
