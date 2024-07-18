import axios from "axios";
import React, { useEffect, useState } from "react";

function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          `${process.env.PUBLIC_URL}/Data/Brands/brands.json`
        );
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className=" flex items-center justify-between p-auto  md:px-4 border-2 bg-white border-main rounded-xl">
      {brands.map((brand) => (
        <div key={brand.id} className=" flex justify-center w-auto md:w-[90px] 2xl:w-[120px] items-center m-1 ">
        <img className="w-full" src={require(`../../img/Brands/${brand.image}`)} alt=""/>
        </div>
      ))}
    </div>
  );
}

export default Brands;
