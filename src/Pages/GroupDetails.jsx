import React from "react";
import { useLoaderData } from "react-router";
import rightarrow from "../assets/right.json";
import locationArrow from "../assets/location.json";
import Lottie from "lottie-react";

const GroupDetails = () => {
  const groupData = useLoaderData();
  console.log(groupData);
  return (
    <div className="w-[1440px] mx-auto my-20">
      <div>
        <img className="mb-5" src={groupData.photo} alt="" />
        <h2 className="text-3xl font-bold">{groupData.title}</h2>
        <div className="flex justify-start gap-2 my-3">
          <Lottie className="w-[20px]" animationData={rightarrow} loop={true} />
          <h4>
            {" "}
            <b>Category:</b> {groupData.category}
          </h4>
        </div>
        <div className="flex gap-2 justify-start">
          <Lottie className="w-[20px]" animationData={rightarrow} loop={true} />
          <p>
            <b>Details:</b> {groupData.description}{" "}
          </p>
        </div>

        <div className="flex justify-start gap-2 my-3">
          <Lottie
            className="w-[20px]"
            animationData={locationArrow}
            loop={true}
          />
          <p>
            <b>Meeting Location</b> {groupData.location}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
