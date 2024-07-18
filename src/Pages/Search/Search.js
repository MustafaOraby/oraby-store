import React, { useEffect, useState, useRef } from 'react';
import ProductContainer from '../../Components/Products/productContainer';
import { useTranslation } from 'react-i18next';
import fetchProducts from '../../utils/fetchProducts';

function Search() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

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

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container min-h-screen mx-auto px-5 py-24 2xl:py-28  ">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={t("Search page placeholder")}
        ref={inputRef}
        className="mb-5 p-2 border-2 border-main rounded-xl w-full bg-light-primary dark:bg-dark-primary  focus:outline-none text-light-text dark:text-dark-text font-semibold  "
      />
      {searchTerm === '' ? (
        <p className="text-center text-gray-500">{t("Search page title")}</p>
      ) : (
        <div>
          <h2 className="mb-5 2xl:mb-20 text-center 2xl:text-4xl">
            {t("Products Header")}
          </h2>
          <div className="flex flex-wrap items-center justify-between">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
              ))
            ) : (
              <p className="text-center text-gray-500 w-full">No products found matching your search.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
