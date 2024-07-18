import React from "react";
import { NavLink } from "react-router-dom";
import useI18n from "../../Hooks/useI18n";
function Nav({closeNavbar}) {
  const t = useI18n();
  
  return (
    <>
      <NavLink onClick={closeNavbar} className="transition-all  duration-100 ease-in-out transform lg:text-[13px] lg:px-3  2xl:text-[18px] 2xl:px-5 2xl:py-1 mb-3 lg:mb-0 bg-main dark:bg-dark-background md:mx-2 lg:mx-auto border-[.5px] border-main text-white px-5   md:py-0 rounded-2xl " to="/">
        {t("Home")}
      </NavLink>
      <span className=" lg:hidden w-full h-0.5 bg-light-background dark:bg-dark-background" />
      <NavLink onClick={closeNavbar} className="transition-all duration-100 ease-in-out transform mb-3 lg:mb-0 lg:text-[13px] lg:px-3  2xl:text-[18px] 2xl:px-5 2xl:py-1 bg-main dark:bg-dark-background mx-2 lg:mx-auto  border-[.5px] border-main text-white px-5  md:py-0 rounded-2xl" to="/categories">
        {t("Categories")}
      </NavLink>{" "}
      <span className=" lg:hidden w-full h-0.5 bg-light-background dark:bg-dark-background" />
      <NavLink onClick={closeNavbar} className="transition-all duration-100 ease-in-out transform mb-3 lg:mb-0 lg:text-[13px] lg:px-3  2xl:text-[18px] 2xl:px-5 2xl:py-1 bg-main dark:bg-dark-background mx-2 lg:mx-auto border-[.5px] border-main text-white px-5  md:py-0 rounded-2xl" to="/products">
        {t("Products")}
      </NavLink>{" "}
      <span className=" lg:hidden w-full h-0.5 bg-light-background dark:bg-dark-background" />
      
      
      <NavLink onClick={closeNavbar} className="transition-all duration-100 ease-in-out transform mb-3 lg:mb-0 lg:text-[13px] lg:px-3  2xl:text-[18px] 2xl:px-5 2xl:py-1 bg-main dark:bg-dark-background mx-2 lg:mx-auto border-[.5px] border-main text-white px-5  md:py-0 rounded-2xl" to="/contact-us">
        {t("Contact Us")}
      </NavLink>{" "}
      <span className=" lg:hidden w-full h-0.5 bg-light-background dark:bg-dark-background" />
    </>
  );
}

export default Nav;
