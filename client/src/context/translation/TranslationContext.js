import { createContext } from "react";
// import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContext;
