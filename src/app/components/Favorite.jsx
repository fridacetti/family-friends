"use client";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Favorite = () => {
  const [favorit, setFavorit] = useState(false);

  const toggleFavorit = () => {
    setFavorit(!favorit);
  };
  return (
    <div className="z-10 col-start-1 row-start-1 flex items-start justify-end p-3">
      <div
        className="bg-button/30 cursor-pointer rounded-full p-1 backdrop-blur-lg"
        onClick={toggleFavorit}
      >
        {favorit ? (
          <FaStar color="white" size={20} />
        ) : (
          <FiStar color="white" size={20} />
        )}
      </div>
    </div>
  );
};

export default Favorite;
