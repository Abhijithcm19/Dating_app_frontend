import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AiFillHeart,
  AiFillLike,
  AiFillStar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { IoMdMore } from "react-icons/io";

const ViewProfiles = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const profile = {
    id: 1,
    name: "Jane Doe",
    images: [
      "https://i.pinimg.com/236x/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg",
      "https://i.pinimg.com/564x/17/57/21/17572170d720320ee1aa47108990343c.jpg",
      "https://i.pinimg.com/736x/21/fa/ab/21faaba9de9ff4ba7c888e8e930b27e8.jpg",
    ],
    interests: ["Cooking", "Travel", "Photography"],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <hr />
      <div className="h-screen bg-black flex justify-center items-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-4 relative">
          <Slider {...settings} className="black-carousel">
            {profile.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Profile ${profile.id}`}
                  style={{ width: "100%", height: "450px" }}
                />
              </div>
            ))}
          </Slider>
          <div className="mt-2">
            <h3 className="text-lg font-semibold mb-1">{profile.name}</h3>
            <div className="flex flex-wrap">
              {profile.interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-gray-300 px-2 py-1 rounded-full mr-1 mb-1"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">
              <AiFillHeart className="mr-1" /> Not Interested
            </button>
            <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg mr-2">
              <AiFillLike className="mr-1" /> Interest
            </button>
            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2">
              <AiFillStar className="mr-1" /> Super Like
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg">
              <AiOutlineArrowRight className="" /> Next
            </button>
          </div>
          <div className="absolute top-0 right-0 p-4">
            <IoMdMore
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
              onClick={handleDropdownToggle}
            />
            {showDropdown && (
              <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2 mt-2 w-40">
                <p className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md mb-1">
                  View Profile
                </p>
                <p className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md">
                  Block & Report
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfiles;
