import React, { useEffect } from "react";
import Sliders from "../Components/Sliders";

const Home = () => {
  useEffect(() => {
    document.title = "Home | HobbyHub";

    const setFavicon = (url) => {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    };

    setFavicon("../../public/icons8-home-100.png");
  }, []);

  // https://e1.pngegg.com/pngimages/630/550/png-clipart-metrostation-black-home-icon-thumbnail.png

  return (
    <div>
      <Sliders></Sliders>
    </div>
  );
};

export default Home;
