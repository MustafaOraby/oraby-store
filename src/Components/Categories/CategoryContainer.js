import React from "react";
import { Link } from "react-router-dom";
function CategoryContainer({title,image,handleCategoryFilter,categoryFilterLink}) {
  return (
    <Link to={categoryFilterLink} onClick={handleCategoryFilter} className="cursor-pointer">
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="w-[100px] md:w-[130px] lg:w-[170px] 2xl:w-[210px] h-[100px] md:h-[130px] lg:h-[170px] 2xl:h-[210px] p-5 md:p-5 lg:p-6 2xl:p-8 2xl:m-6  bg-light-primary dark:bg-dark-primary border border-main rounded-full flex items-center justify-center">
        <img className="  h-full" src={image} alt="" />
      </div>
      <h3 className="text-sm 2xl:text-2xl  ">{title}</h3>
    </div>
    </Link>
  );
}

export default CategoryContainer;
