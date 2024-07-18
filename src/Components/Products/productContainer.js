import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus, FaHeartCircleMinus } from "react-icons/fa6";

import StarRating from "../utils/StarRating";
import { useAuth } from "../../context/GlobalState";

function ProductContainer({ image, details, price, productName, rating, id }) {
  const { dispatch,  favoriteBasket, basket } = useAuth();
  const [isFavorite, setIsFavorite] = useState(
    favoriteBasket.some((item) => item.id === id)
  );

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        productName: productName,
        details: details,
        image: image,
        price: price,
        rating: rating,
      },
    });
    console.log(basket)
  };

  const addToFavoriteBasket = () => {
    dispatch({
      type: "ADD_TO_FAVORITE_BASKET",
      item: {
        id: id,
        productName: productName,
        details: details,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setIsFavorite(true);
    console.log(favoriteBasket)
  };

  const removeFromFavoriteBasket = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITE_BASKET",
      id: id,
    });
    setIsFavorite(false);
  };

  return (
    <div className="w-[150px] h-[230px] md:w-[220px] md:h-[220px] lg:w-[220px] lg:h-[220px] 2xl:w-[330px] 2xl:h-[480px] p-2 2xl:p-0 2xl:px-3 2xl:py-1 mb-6 md:pb-10 2xl:mb-16 flex items-center flex-col rounded-xl group bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
      <div className="w-full h-[40px] md:h-[60px] flex items-center justify-between">
        <h3 className="text-[10px] md:text-[13px] 2xl:text-[16px] ">{productName}</h3>
        <StarRating rating={rating} />
      </div>
      <div className="w-full h-[135px] 2xl:h-[300px] relative bg-gradient-to-b from-[#006696] to-[#a2e1f0] p-4 flex items-center justify-center rounded-xl">
        {isFavorite ? (
          <FaHeartCircleMinus
            onClick={removeFromFavoriteBasket}
            className="p-1 w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] 2xl:w-[45px] 2xl:h-[45px] absolute top-1 right-1 text-red-300 cursor-pointer z-[5]  lg:text-xl 2xl:text-2xl transition-colors duration-300"
          />
        ) : (
          <FaHeartCirclePlus
            onClick={addToFavoriteBasket}
            className="p-1 w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] 2xl:w-[45px] 2xl:h-[45px] absolute top-1 right-1 text-white cursor-pointer z-[5] hover:text-red-300 lg:text-xl 2xl:text-2xl transition-colors duration-300"
          />
        )}
        <img
          className="max-h-full transition-transform duration-300 group-hover:scale-110"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full 2xl:px-3 2xl:py-1">
        <p className="text-[10px] md:text-[13px] lg:text-[15px] 2xl:text-[20px] md:my-1 2xl:my-2">
          {details}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-meduim md:text-[12px] lg:text-[15px] 2xl:font-bold text-[10px]">
            {price}$
          </span>
          <button onClick={addToBasket}>
            <FaCartPlus className="text-xl lg:text-2xl 2xl:text-3xl dark:text-white hover:dark:text-yellow-500 text-yellow-500"   />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
