import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute text-sm 2xl:text-xl top-1/2 right-0 transform -translate-y-1/2 bg-dark-background bg-opacity-50 text-white rounded-full p-2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 text-sm  2xl:text-xl left-0 transform -translate-y-1/2 bg-dark-background bg-opacity-50 text-white rounded-full p-2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

function DiscountContainer() {
  const { t, i18n } = useTranslation();
  const [discount, setDiscount] = useState([]);

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const language = i18n.language;
        const response = await axios.get(
          `${process.env.PUBLIC_URL}/Data/Discount/discount_${language}.json`
        );
        setDiscount(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDiscount();
  }, [i18n.language]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className=" mb-5 w-full">
      {discount.map((discoutItem) => (
        <div
          key={discoutItem.id}
          className="  bg-light-primary dark:bg-dark-primary py-3  "
        >
          <div className=" h-[100px]  md:h-[150px] lg:h-[180px] 2xl:h-[200px] 2xl:w-[320px]  w-[150px] md:w-[200px] lg:w-[260px] relative ">
            <img
              className="w-full h-full rounded-2xl"
              src={require(`../../img/Discount/${discoutItem.image}`)}
              alt=""
            />
            <div className="text-[4.5px] md:text-[7px] lg:text-[9px] 2xl:text-[12px] 2xl:w-[150px] 2xl:h-[55px]  flex flex-col items-center  text-white font-semibold w-[70px] md:w-[100px] h-[20px] md:h-[30px] lg:w-[120px] lg:h-[45px] p-[3px] rounded-sm md:rounded-s-md absolute top-[40%] right-0 bg-stone-800 bg-opacity-[50%]">
              <span>{discoutItem.discount_percentage} % {t("Discount")}</span>
              <p>{discoutItem.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

//     <div className="p-3 w-full flex items-center justify-between flex-col ">
//       {discount.map((discoutItem) => (
//         <div key={discoutItem.id} className=" h-[100px] w-[150px] bg-slate-400 relative ">
//           <img
//             className="w-full h-full rounded-2xl"
//             src={require(`../../img/Discount/${discoutItem.image}`)}
//             alt=""
//           />
//           <div className="text-[4.5px]  text-white font-semibold w-[70px] h-[20px] p-[3px] rounded-sm absolute top-[40%] right-0 bg-stone-800 bg-opacity-[50%]">
//             <span>{discoutItem.discount_percentage}% OFF</span>
//             <p>Kitchenware from Top Brands</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default DiscountContainer;
