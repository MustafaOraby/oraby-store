import React, { useEffect, useState } from "react";
import CategoryContainer from "../../Components/Categories/CategoryContainer";
import { useTranslation } from "react-i18next";
import fetchCategories from "../../utils/fetchCategories";

function Categories() {
  const { i18n } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const Categories = async () => {
      try {
        const language = i18n.language;
        const data = await fetchCategories(language);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    Categories();
  }, [i18n.language]);

  return (
    <div className="container mx-auto px-5 py-28 ">
      <div className="flex justify-between items-center flex-wrap ">
        {categories.map((category, id) => (
          <div
            key={category.id}
            className=" items-center justify-between  mb-10"
          >
            <CategoryContainer
              id={category.id}
              title={category.title}
              image={require(`../../img/Categories/${category.image}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
