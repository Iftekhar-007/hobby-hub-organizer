import React, { useEffect, useState } from "react";
import Sliders from "../Components/Sliders";
import HobbyImpoCards from "../Components/HobbyImpoCards";
import TrendingHobbies from "../Components/TrendingHobbies";
import Featured from "../Components/Featured";

const Home = () => {
  const [theme, setTheme] = useState("light");
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

  useEffect(() => {
    document.title = "Home | HobbyHub";
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // https://e1.pngegg.com/pngimages/630/550/png-clipart-metrostation-black-home-icon-thumbnail.png

  return (
    <div className="">
      <div className="flex justify-end p-4 w-[1440px] mx-auto">
        <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <Sliders />
      <Featured></Featured>
      <HobbyImpoCards></HobbyImpoCards>
      <TrendingHobbies></TrendingHobbies>
    </div>
  );
};

export default Home;
