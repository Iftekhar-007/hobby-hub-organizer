import React, { useEffect, useState } from "react";
import FeaturedGroup from "./FeaturedGroup";

const Featured = () => {
  const [featuredGrp, setFeaturedGrp] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/groups`)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedGrp(data);
      });
  }, []);
  return (
    <div className="w-[1440px] mx-auto my-20">
      <h2 className="text-center text-5xl font-bold mb-10">Featured Group</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGrp?.slice(0, 6).map((grp) => (
          <FeaturedGroup key={grp._id} grp={grp}></FeaturedGroup>
        ))}
      </div>
    </div>
  );
};

export default Featured;
