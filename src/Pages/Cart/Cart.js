import React from "react";
import CartItem from "../../Components/Cart/CartItem";
import { useAuth } from "../../context/GlobalState";
import { useTranslation } from "react-i18next";


function Cart() {
  const { basket, user } = useAuth();
  const {t} = useTranslation()
  return (
    <div className="container mx-auto py-20  l:py-24 min-h-screen ">
      <div className=" text-sm text-center border-2 border-main w-1/2 mx-auto rounded-3xl ">
        <h3>Hello, {user?.email}</h3>
        <h2 >Your shopping Basket</h2>
      </div>
      {basket.length > 0 ? (
        basket.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            productName={item.productName}
            details={item.details}
            price={item.price}
          />
        ))
      ) : (
        <h2 className="text-center 2xl:text-5xl mt-5 py-20 ">
{t("Cart title")}
        </h2>
      )}
    </div>
  );
}

export default Cart;
