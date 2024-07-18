import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useEffect } from "react";
import i18n from "i18next";
import Cookies from "js-cookie";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/{{ns}}.json",
    },
  });
function useI18n() {
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);
  return t;
}

export default useI18n;
