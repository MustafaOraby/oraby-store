import { FaRegUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { RiHeartsFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import useI18n from "../../Hooks/useI18n";
// import { useState } from "react";
import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase";
function NavRightSide() {
  const t = useI18n();
  // const [searchPar, setSearchPar] = useState(false);
  // const showSearchPar = () => {
  //   setSearchPar(!searchPar);
  // };

  const { user, basket, favoriteBasket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <div className="  flex justify-between items-center  text-sm w-60 text-white  px-8 md:px-3 bg-main dark:bg-dark-background h-10 md:h-8 rounded-xl ">
      <NavLink
        to={!user && "/login"}
        className="flex justify-between items-center "
        onClick={handleAuthentication}
      >
        <FaRegUser className=" dark:text-lime-400" />
        <span className="hidden  md:block mx-2">
          {user ? t("Sign Out") : t("Login Register")}
        </span>
      </NavLink>
      <span>|</span>
      <NavLink to="/cart">
        <div className="">
          <span className="text-xs ms-2 bg-red-700 rounded-full text-white w-4 h-4 flex items-center justify-center ">
            {basket?.length}
          </span>
          <FaShoppingCart className=" dark:text-yellow-500 " />
        </div>
      </NavLink>
      <span>|</span>

      <NavLink to="/favorite">
        <div className="">
          <span className="text-xs ms-2 bg-red-700 rounded-full text-white w-4 h-4 flex items-center justify-center ">
            {favoriteBasket?.length}
          </span>
          <RiHeartsFill className=" dark:text-red-300 " />
        </div>
      </NavLink>
      <span>|</span>

      <NavLink to={"/search"}  className="">
        <FaSearch className="flex dark:text-main" />
      </NavLink>
    </div>
  );
}

export default NavRightSide;
