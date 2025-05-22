import React, { useEffect } from "react";

const CreateGroup = () => {
  useEffect(() => {
    // document.title = "Create Group | HobbyHub";

    const setFavicon = (url) => {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    };

    setFavicon("../../public/diversity.png");
  }, []);
  return (
    <>
      <title>Create Group | HobbyHub</title>
      <div>
        <h1>create group</h1>
      </div>
    </>
  );
};

export default CreateGroup;
