import React, { useEffect } from "react";

const MyGroups = () => {
  useEffect(() => {
    // document.title = "MyGroups | HobbyHub";

    const setFavicon = (url) => {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    };

    setFavicon("../../public/man.png");
  }, []);
  return (
    <>
      <title>MyGroups | HobbyHub</title>
      <div>
        <h1>MyGroups here</h1>
      </div>
    </>
  );
};

export default MyGroups;
