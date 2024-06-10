import React from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

interface Props {
  photo: string | null;
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}

const ImageUploadCard: React.FC<Props> = ({ photo, onUpload, onRemove }) => {
  return (
    <div
      className="rounded-lg border border-gray-300 p-4 relative"
      style={{
        width: "120px",
        height: "160px",
        backgroundColor: "#444",
        borderStyle: "dotted",
        borderWidth: "3px",
        borderColor: "#ccc",
        textAlign: "center",
      }}
    >
      {photo ? (
        <>
          <img src={photo} alt="Uploaded" className="max-w-full h-auto mb-2" />
          <button
            onClick={onRemove}
            className="absolute bottom-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full"
            style={{ transform: "translate(50%, 50%)" }}
          >
            <FaTimes size={16} />
          </button>
        </>
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={onUpload}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer block bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <FaPlus size={24} />
          </label>
        </>
      )}
    </div>
  );
};

export default ImageUploadCard;
