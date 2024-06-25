import React, { useState } from "react";
import Message from "./Message";
import Like from "./Like";
import { app } from "../firebase";

const SidePanel = () => {
  const [liked, setLiked] = useState(false);
  const [tab, setTab] = useState("message");

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const circleProfileData = {
    name: "John Doe",
    profileImage:
      "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  };

  const handleGoogleClick = async () => {};
  const messagesData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      text: "Consectetur adipiscing elit",
    },
  ];

  return (
    <div>
      <hr />
      <div className="bg-neutral-900 h-screen">
        <div className="circle-profile flex flex-row bg-rose-500 items-center">
          <img
            src={circleProfileData.profileImage}
            alt={circleProfileData.name}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <h2 className="text-white font-bold py-4 px-4">
            {circleProfileData.name}
          </h2>
        </div>
        {/* Tab Buttons */}
        <div className="my-2">
          <button
            className={`text-white font-bold mx-6`}
            style={{
              borderBottom: tab === "like" ? "3px solid red" : "none",
            }}
            onClick={() => handleTabChange("like")}
          >
            Likes
          </button>
          <button
            className={`text-white font-bold`}
            style={{
              borderBottom: tab === "message" ? "2px solid red" : "none",
            }}
            onClick={() => handleTabChange("message")}
          >
            Message
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {tab === "like" && (
            <Like liked={liked} handleLikeToggle={handleLikeToggle} />
          )}
          {tab === "message" && <Message messagesData={messagesData} />}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
