// src/utils/fetchProducts.js
import axios from "axios";

const fetchCategories = async (language) => {
  try {
    const response = await axios.get(
      `${process.env.PUBLIC_URL}/Data/Categories/categories_${language}.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchCategories;
