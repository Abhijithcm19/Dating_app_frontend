import React, { useRef, useState } from "react";

const ChatPopup = ({ user, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - popupRef.current.getBoundingClientRect().left;
    const offsetY = e.clientY - popupRef.current.getBoundingClientRect().top;
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX =
        e.clientX -
        position.x -
        popupRef.current.getBoundingClientRect().left +
        window.pageXOffset;
      const newY =
        e.clientY -
        position.y -
        popupRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Dummy chat messages
  const chatMessages = [
    {
      id: 1,
      message: "Hello!",
      sender: user.name === "Anjali Rajeev" ? "sender" : "receiver",
    },
    {
      id: 2,
      message: "Hi there!",
      sender: user.name === "Anjali Rajeev" ? "receiver" : "sender",
    },
  ];

  return (
    <div
      className="chat-popup bg-white shadow-md rounded-lg w-96"
      style={{ top: position.y, left: position.x }}
      ref={popupRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="chat-header flex items-center justify-between px-4 py-2 border-b border-gray-300">
        <div className="flex items-center">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <p className="text-lg font-semibold">{user.name}</p>
        </div>
        <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="chat-messages overflow-y-auto px-4 py-2 max-h-60">
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.sender === "sender" ? "sent" : "received"
            } flex items-start mb-2`}
          >
            {message.sender === "received" && (
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <div
              className={`bg-${
                message.sender === "sender" ? "blue" : "gray"
              }-500 p-2 rounded-lg`}
              style={{ marginLeft: message.sender === "sender" ? "auto" : "" }}
            >
              <p
                className={`text-${
                  message.sender === "sender" ? "white" : "gray"
                }-800`}
              >
                {message.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input flex items-center justify-between px-4 py-2 border-t border-gray-300">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
