import React from "react";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";

function AllItemsBtn({title,sectionLink}) {
  return (
    <Link to={sectionLink} className="flex mx-auto items-center justify-center  w-[50%] h-auto md:h-[30px] 2xl:h-[35px]  px-2 md:px-9 2xl:p-5 text-black bg-lime-400 rounded-3xl my-5">
      <h2 className="text-center w-full text-[15px] md:text-[20px] 2xl:text-[25px] p-auto ">
        {title}
      </h2>
        <TbHandClick className="md:text-[20px] 2xl:text-[30px]" />
    </Link>
  );
}

export default AllItemsBtn;
