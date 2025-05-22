import React, { use } from "react";
import HobbyCard from "./HobbyCard";

const fecthPromise = fetch("../../public/hobbyimpo.json").then((res) =>
  res.json()
);

const HobbyImpoCards = () => {
  const hobbyImpos = use(fecthPromise);
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold mb-10">
        Why Hobby Groups Matter
      </h1>
      <div className=" w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {hobbyImpos.map((hobby) => (
          <HobbyCard hobby={hobby}></HobbyCard>
        ))}
      </div>
    </div>
  );
};

export default HobbyImpoCards;
