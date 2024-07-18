import React from "react";
import { NumericFormat } from "react-number-format";
import { useAuth } from "../../context/GlobalState";
import { getBasketTotal } from "../../context/AppReducer";
import { useTranslation } from "react-i18next";

function SubTotal() {
  const { basket } = useAuth();
  const {t} = useTranslation()

  return (
    <div className="flex items-center justify-center flex-col bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text w-full h-24 fixed bottom-0 left-0 mb-0 border-t-2 border-main rounded-t-2xl p-3">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"'EGP'"}
        decimalScale={2}
        renderText={(value) => (
          <>
            <div>
            <span className=""><span className="dark:text-main">{basket.length}</span>{t("Cart items")}</span>
            <span>{t("Cart subtotal")}: <strong className="dark:text-green-400">{value}</strong></span>
            <p>
             
            </p>
            </div>
            <small className="subtotal__gift">
              <input type="checkbox" /> {t("Cart gift")}
            </small>
            
          </>
        )}
      />
      <button className="border-2 px-2 mt-2 text-sm rounded-2xl border-main">
        {t("Cart Checkout")}
      </button>
    </div>
  );
}

export default SubTotal;
