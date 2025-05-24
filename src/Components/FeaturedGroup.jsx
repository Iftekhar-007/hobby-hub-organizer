import Lottie from "lottie-react";
import React from "react";
import locationArrow from "../assets/location.json";
import rightArrow from "../assets/right.json";
import { Link } from "react-router";

const FeaturedGroup = ({ grp }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            className="h-[320px] w-[480px] object-cover"
            src={grp.photo}
            alt="image loading..."
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{grp.title}</h2>
          <p>{grp.description}</p>

          <div className="flex justify-start gap-2">
            <Lottie
              className="w-[20px]"
              animationData={rightArrow}
              loop={true}
            />
            <p>{grp.category}</p>
          </div>

          <div className="flex justify-start gap-2">
            <Lottie
              className="w-[20px]"
              animationData={locationArrow}
              loop={true}
            />
            <p>{grp.location}</p>
          </div>

          <Link to={`/allgroups/${grp._id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGroup;
