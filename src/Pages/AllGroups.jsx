import React, { use, useEffect } from "react";
import Group from "./Group";

const fetchPromise = fetch(
  `https://hobby-hub-server-lilac.vercel.app/groups`
).then((res) => res.json());

const AllGroups = () => {
  const allGroups = use(fetchPromise);
  useEffect(() => {
    document.title = "All Groups | HobbyHub";

    const setFavicon = (url) => {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    };

    setFavicon("../../public/ancestors.png"); // Put this file in your public folder
  }, []);
  return (
    <div className="w-[1440px] mx-auto">
      <h1 className="text-center text-5xl my-20 font-bold">All Groups Here</h1>

      {allGroups.map((group, index) => (
        <Group key={index} group={group}></Group>
      ))}
    </div>
  );
};

export default AllGroups;
