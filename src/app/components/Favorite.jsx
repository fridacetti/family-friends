"use client";
import useStore from "@/store/favorits";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Favorite = ({ id }) => {
  const { favorite, toggleFavorite } = useStore();
  console.log(favorite);
  if (favorite.includes(id)) {
    console.log("Favorite:", id);
    return <FiStar onClick={() => toggleFavorite(id)} />;
  } else {
    console.log("Not Favorite:", id);
    return <FaStar onClick={() => toggleFavorite(id)} />;
  }
};

export default Favorite;
