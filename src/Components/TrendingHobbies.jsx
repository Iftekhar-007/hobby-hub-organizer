import React, { use } from "react";
import Hobby from "./Hobby";

const fetchPromise = fetch(`trendHobby.json`).then((res) => res.json());

const TrendingHobbies = () => {
  const hobbies = use(fetchPromise);
  return (
    <div>
      <h1 className="text-center font-bold text-5xl mb-10">
        Explore Trending Hobbies
      </h1>
      <div className="w-[1440px] mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {hobbies.map((hobby, index) => (
          <Hobby key={index} hobby={hobby}></Hobby>
        ))}
      </div>
    </div>
  );
};

export default TrendingHobbies;
