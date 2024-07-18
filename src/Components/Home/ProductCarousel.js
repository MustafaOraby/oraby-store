import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import fetchProducts from '../../utils/fetchProducts';
import ProductContainer from '../Products/productContainer';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute text-sm  2xl:text-2xl top-1/2 right-0 transform -translate-y-1/2 bg-dark-background bg-opacity-50 text-white rounded-full p-2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 text-sm 2xl:text-xl left-0 transform -translate-y-1/2 bg-dark-background bg-opacity-50 text-white rounded-full p-2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const ProductCarousel = () => {
  
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        const language = i18n.language;
        const data = await fetchProducts(language);
        const randomProducts = getRandomProducts(data, 15);
        setProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAndSetProducts();
  }, [i18n.language]);

  const getRandomProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4.2,
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="">
      <Slider {...settings} className=' '>
        {products.map((product, id) => (
          <ProductContainer
            key={id}
            id={product.id}
            productName={product.name}
            details={product.details}
            rating={product.rating}
            price={product.price}
            image={require(`../../img/Products/${product.image}`)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
