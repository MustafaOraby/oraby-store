import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/Categories/Categories";
import Products from "./Pages/Products/Products";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Favorite from "./Pages/Favorite/Favorite";
import Search from "./Pages/Search/Search";
import CategoryFilter from "./Pages/CategoryFilter/CategoryFilter";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import SpecialOffers from "./Pages/SpecialOffers/SpecialOffers";
import BtnLang from "./Components/utils/BtnLang";
import useI18n from "./Hooks/useI18n";
import BtnTheme from "./Components/utils/BtnTheme";
import useTheme from "./Hooks/useTheme";
import Login from "./Pages/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";

function App() {
  useI18n();
  const { changeTheme } = useTheme();

  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <div className="bg-light-background font-custom dark:bg-dark-background text-light-text dark:text-dark-text  ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <Header />
                <Categories />
                <Footer />
              </>
            }
          />
          <Route
            path="/category-filter:title"
            element={
              <>
                <Header />
                <CategoryFilter />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            }
          />
          <Route
            path="/favorite"
            element={
              <>
                <Header />
                <Favorite />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Header />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                <Header />
                <SingleProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />
          <Route
            path="/special-offers/:id"
            element={
              <>
                <Header />
                <SpecialOffers />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/search"
            element={
              <>
                <Header />
                <Search />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <h1 className="text-center text-5xl py-52">Page Not Found</h1>
            }
          />
        </Routes>
        <BtnLang />
        <BtnTheme changeTheme={changeTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
