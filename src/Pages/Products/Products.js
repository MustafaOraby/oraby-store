import React, { useEffect, useState } from "react";
import ProductContainer from "../../Components/Products/productContainer";
import { useTranslation } from "react-i18next";
import fetchProducts from "../../utils/fetchProducts";

function Products() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        const language = i18n.language;
        const data = await fetchProducts(language);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAndSetProducts();
  }, [i18n.language]);

  return (
    <div className="container mx-auto px-5 py-24 2xl:py-28">
      <h2 className="mb-5 2xl:mb-20 text-center 2xl:text-4xl">
        {t("Products Header")}
      </h2>
      <div className="flex flex-wrap items-center justify-between">
        {products.map((product) => (
          <div key={product.id}>
            <ProductContainer
              id={product.id}
              productName={product.name}
              details={product.details}
              rating={product.rating}
              price={product.price}
              image={require(`../../img/Products/${product.image}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
