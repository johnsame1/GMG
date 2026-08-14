import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useLangDirection() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
}
