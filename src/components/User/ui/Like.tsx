import React from "react";
import { IoMdMore } from "react-icons/io";

const Like = () => {
  const likesData = [
    {
      id: 1,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR614yICWA8Jv0GQSE-mcZEMSwY3HQJzItWQ&s",
      name: "Anjali Rajeev",
    },
    {
      id: 2,
      profilePicture:
        "https://i.pinimg.com/236x/41/7b/67/417b67c2c946c28e2cca22d777b84df8.jpg",
      name: "Sangeetha ",
    },
    {
      id: 3,
      profilePicture:
        "  https://i.pinimg.com/236x/c4/7f/cd/c47fcdb80eebfdeb611e5adca75fb779.jpg",
      name: "Charu Sajeev ",
    },
  ];

  return (
    <div className="">
      {likesData.map((like) => (
        <div
          key={like.id}
          className="like-item flex items-center bg-stone-50 my-4"
        >
          <img
            src={like.profilePicture}
            alt={like.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <p className="text-gray-800 font-bold">{like.name}</p>
          <button className="ml-auto">
            <IoMdMore style={{ width: "24px", height: "24px" }} />{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Like;
