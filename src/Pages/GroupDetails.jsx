import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import rightarrow from "../assets/right.json";
import locationArrow from "../assets/location.json";
import peopleArrow from "../assets/people.json";
import dateArrow from "../assets/date.json";
import mailArrow from "../assets/mail.json";
import nameArrow from "../assets/name.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const GroupDetails = () => {
  const groupData = useLoaderData();
  console.log(groupData);

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

    setFavicon("/group.png");
  }, []);

  const handleJoin = () => {
    const currentTime = new Date();
    const groupStartTime = new Date(groupData.date); // Assuming date is ISO string

    if (currentTime < groupStartTime) {
      Swal.fire({
        title: "Joined Successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        title: "This group is no longer active!",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };
  return (
    <>
      <title>Group Details | Hobby HUb</title>
      <div className="w-[1440px] mx-auto my-20">
        <div>
          <img className="mb-5" src={groupData.photo} alt="" />
          <h2 className="text-3xl font-bold">{groupData.title}</h2>

          <div className="flex justify-start my-3 gap-2">
            <Lottie
              className="w-[20px]"
              animationData={mailArrow}
              loop={true}
            />
            <p>
              {" "}
              <b>Owner Email: </b>
              {groupData.email}{" "}
            </p>
          </div>

          <div className="flex justify-start my-3 gap-2">
            <Lottie
              className="w-[20px]"
              animationData={nameArrow}
              loop={true}
            />
            <p>
              {" "}
              <b>Ceated By : </b>
              {groupData.name}{" "}
            </p>
          </div>
          <div className="flex justify-start gap-2 my-3">
            <Lottie
              className="w-[20px]"
              animationData={rightarrow}
              loop={true}
            />
            <h4>
              {" "}
              <b>Category: </b> {groupData.category}
            </h4>
          </div>
          <div className="flex gap-2 justify-start">
            <Lottie
              className="w-[20px]"
              animationData={rightarrow}
              loop={true}
            />
            <p>
              <b>Details: </b> {groupData.description}{" "}
            </p>
          </div>

          <div className="flex justify-start gap-2 my-3">
            <Lottie
              className="w-[20px]"
              animationData={locationArrow}
              loop={true}
            />
            <p>
              <b>Meeting Location :</b> {groupData.location}{" "}
            </p>
          </div>

          <div className="flex justify-start gap-2">
            <Lottie
              className="w-[20px]"
              animationData={peopleArrow}
              loop={true}
            />
            <p>
              {" "}
              <b>Max Members : </b>
              {groupData.max_members}{" "}
            </p>
          </div>
          <div className="flex justify-start my-3 gap-2">
            <Lottie
              className="w-[20px]"
              animationData={dateArrow}
              loop={true}
            />
            <p>
              {" "}
              <b>Date : </b>
              {groupData.date}{" "}
            </p>
          </div>
        </div>

        <button onClick={handleJoin} className="btn bg-blue-500 text-white">
          Join Group
        </button>
      </div>
    </>
  );
};

export default GroupDetails;
