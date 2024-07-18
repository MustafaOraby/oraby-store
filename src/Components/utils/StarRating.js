import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [
    ...Array(fullStars).fill(
      <FaStar className="text-yellow-500 text-[10px] 2xl:text-[15px]" />
    ),
    ...Array(halfStars).fill(
      <FaStarHalfAlt className="text-yellow-500  text-[10px] 2xl:text-[15px]" />
    ),
    ...Array(emptyStars).fill(
      <FaRegStar className="text-yellow-500  text-[10px] " />
    ),
  ];

  return (
    <div className="flex">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default StarRating;
