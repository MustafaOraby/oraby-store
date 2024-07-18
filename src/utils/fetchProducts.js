// src/utils/fetchProducts.js
import axios from "axios";

const fetchProducts = async (language) => {
  try {
    const response = await axios.get(
      `${process.env.PUBLIC_URL}/Data/Products/products_${language}.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchProducts;
