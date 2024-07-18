import React from "react";
import StarRating from "../utils/StarRating";
import SubTotal from "./SubTotal";
import { useAuth } from "../../context/GlobalState";
function CartItem({image, productName,details,price,id }) {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <>
      <div className="flex items-center pe-4  mb-2 w-full h-[120px]  md:h-[200px]   lg:h-[220px]  2xl:h-[280px] bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text ">
        <div className="h-4/5 w-[70px] lg:w-[100px]	 me-6 ms-2 flex items-center justify-center">
          <img src={image} alt="" className="max-w-full max-h-full" />
        </div>
        <div className="flex  flex-col w-[250px] ">
          <div className="flex items-center border-b-2 border-light-background dark:border-dark-background  ">
            <h3 className=" w-full">{productName}</h3>
            <StarRating rating={"5"} />
          </div>
          <div className="flex items-center border-b-2  border-light-background dark:border-dark-background">
            <p className=" me-5 ">{details}</p>
            <span>{price}$</span>
          </div>
          <button onClick={removeFromBasket} className="border-2 mt-2 w-5/6 rounded-2xl">
            Remove From Basket
          </button>
        </div>
      </div>
     <SubTotal/>
    </>
  );
}

export default CartItem;
