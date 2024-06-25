import React, { useState } from "react";
import ChatPopup from "./ChatPopup";

const Message = () => {
  const messageData = [
    {
      id: 1,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR614yICWA8Jv0GQSE-mcZEMSwY3HQJzItWQ&s",
      name: "Anjali Rajeev",
      messageCount: 5,
    },
    {
      id: 2,
      profilePicture:
        "https://i.pinimg.com/236x/41/7b/67/417b67c2c946c28e2cca22d777b84df8.jpg",
      name: "Sangeetha",
      messageCount: 10,
    },
    {
      id: 3,
      profilePicture:
        "https://i.pinimg.com/236x/c4/7f/cd/c47fcdb80eebfdeb611e5adca75fb779.jpg",
      name: "Charu Sajeev",
      messageCount: 2,
    },
  ];

  const [openChat, setOpenChat] = useState(null);

  const openChatPopup = (user) => {
    setOpenChat(user);
  };

  const closeChatPopup = () => {
    setOpenChat(null);
  };

  return (
    <div>
      <div className="flex flex-col mx-4">
        {messageData.map((user) => (
          <div
            key={user.id}
            className="flex items-center mt-4 message-user hover:bg-gray-700 cursor-pointer"
            onClick={() => openChatPopup(user)}
          >
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="text-slate-50 text-lg font-semibold">{user.name}</p>
              <div className="flex items-center mt-1">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-1">
                  {user.messageCount}
                </div>
                <p className="text-gray-500">New messages</p>
              </div>
            </div>
          </div>
        ))}
        {/* Render chat popup if openChat is not null */}
      </div>
      {openChat && <ChatPopup user={openChat} onClose={closeChatPopup} />}
    </div>
  );
};

export default Message;
