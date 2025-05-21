import React, { useEffect } from "react";

const AllGroups = () => {
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
    <div>
      <h1>all groups here</h1>
    </div>
  );
};

export default AllGroups;
