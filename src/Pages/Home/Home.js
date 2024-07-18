import React from "react";
import ProductCarousel from "../../Components/Home/ProductCarousel";
import Cover from "../../img/Cover/pngwing.Cover.png";
// import CategoryContainer from "../../Components/Categories/CategoryContainer";
import AllItemsBtn from "../../Components/utils/AllItemsBtn";
// import Tv from "../../img/Products/apple_headphones.png";
import SuggestCategories from "../../Components/Home/SuggestCategories";
import Brands from "../../Components/Home/Brands";
import DiscountContainer from "../../Components/Home/DiscountContainer";
import { useTranslation } from "react-i18next";

function Home() {
  const {t} = useTranslation()
  return (
    <div className=" pt-16 container mx-auto  ">
      <div className=" h-[150px] md:h-auto mb-5   2xl:h-screen">
        <img src={Cover} alt="coverImage" />
      </div>
      <div>
        <DiscountContainer />
      <AllItemsBtn title={t("Home discount title")} sectionLink={"/login"}/>
        <SuggestCategories />
        <AllItemsBtn title={t("Home category title")} sectionLink={"/categories"}/>
        <ProductCarousel />
        <AllItemsBtn title={t("Home products title")} sectionLink={"/products"}/>
        <Brands />
      </div>
    </div>
  );
}

export default Home;
