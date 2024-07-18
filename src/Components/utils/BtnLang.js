import i18n from "i18next";
import { GrLanguage } from "react-icons/gr";
import Cookies from "js-cookie";

const setLang = () => {
  if (Cookies.get("i18next") === "en") {
    i18n.changeLanguage("ar");
  } else {
    i18n.changeLanguage("en");
  }
};

function BtnLang() {
  return (
    <div>
      <GrLanguage onClick={setLang}  className="bg-main-color bottom-2  2xl:bottom-5 left-2 2xl:left-5 text-2xl md:text-4xl  cursor-pointer fixed z-50 text-light-tertiary dark:text-dark-tertiary"/>
    </div>
  );
}

export default BtnLang;
