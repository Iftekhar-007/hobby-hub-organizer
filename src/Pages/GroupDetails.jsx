import React from "react";
import { useLoaderData } from "react-router";

const GroupDetails = () => {
  const groupData = useLoaderData();
  console.log(groupData);
  return (
    <div>
      <h1>{groupData.name}</h1>
    </div>
  );
};

export default GroupDetails;
