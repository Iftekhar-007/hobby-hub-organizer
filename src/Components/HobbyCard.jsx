import React from "react";

const HobbyCard = ({ hobby }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={hobby.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{hobby.name}</h2>
          <p>{hobby.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
