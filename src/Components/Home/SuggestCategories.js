import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import fetchCategories from "../../utils/fetchCategories";


const SuggestCategories = () => {
  const { t, i18n } = useTranslation();
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAndSetCategories = async () => {
      try {
        const language = i18n.language;
        const data = await fetchCategories(language);
        const randomCategories = getRandomCategories(data, 20);
        setCategories(randomCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAndSetCategories();
  }, [i18n.language]);

  const getRandomCategories = (Categories, count) => {
    const shuffled = [...Categories].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  return (
    <div className="flex items-center justify-around bg-light-primary dark:bg-dark-primary w-full h-[120px] md:h-[150px] 2xl:h-[280px] mb-5">
      {Categories.map((category) => (
        <div key={category.id} className=" flex items-center flex-col   mx-1">
        <div className="w-[80px] md:w-[100px] 2xl:w-[200px] 2xl:h-[200px] h-[80px] md:h-[100px] rounded-full p-3 2xl:p-5 mb-3 flex items-center bg-main justify-center">
          <img className="flex max-w-full max-h-full" src={require(`../../img/Categories/${category.image}`)} alt=""/>
        </div>
        <h4 className=" text-[10px] md:text-[15px] 2xl:text-[22px] ">{category.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default SuggestCategories;
