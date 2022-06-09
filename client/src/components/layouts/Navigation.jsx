import { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import { changeLanguage } from "i18next";
import TranslationContext from "../../context/translation/TranslationContext";
import NavigationContext from "../../context/navigation/NavigationContext";
import HamburgerMenu from "./HamburgerMenu";
import logoDark from "../images/Logo-Dark-3300ppi.png";
import logoLight from "../images/Logo-Light-3300ppi.png";
import logoYellow from "../images/logo-yellow-light.png";
import "../../App.css";

const Navigation = () => {
  const { t, i18n } = useContext(TranslationContext);
  const { navTheme } = useContext(NavigationContext);

  const [thisLogo, setThisLogo] = useState(logoLight);
  const [thisColor, setThisColor] = useState("text-neutral-100");
  const [thisLineColor, setThisLineColor] = useState("after:bg-neutral-100");

  const items = [
    { text: t("home"), path: "/" },
    { text: t("services"), path: "/services" },
    { text: t("work"), path: "/work" },
  ];

  useEffect(() => {
    if (navTheme === "dark") {
      setThisLogo(logoDark);
      setThisColor("text-neutral-900");
      setThisLineColor("after:bg-neutral-900");
    } else if (navTheme === "yellow") {
      setThisLogo(logoYellow);
      setThisColor("text-neutral-100");
      setThisLineColor("after:bg-neutral-100");
    } else {
      setThisLogo(logoLight);
      setThisColor("text-neutral-100");
      setThisLineColor("after:bg-neutral-100");
    }
  }, [navTheme]);

  const changeLang = () => {
    if (i18n.language !== "th") {
      changeLanguage("th");
    } else changeLanguage("en");
  };

  // Hide navigation when scroll down 100 px
  const [isVisible, setIsVisible] = useState(true);

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 100 && !hamburgerIsOpen) {
      setIsVisible(false);
    } else if (window.scrollY < 100) {
      setIsVisible(true);
    }
  });

  // Class name for active NavLink
  const activeClassName = `underlined ${thisLineColor}`;

  return (
    <nav className="overflow-hidden mx-auto container">
      <div
        className={`${
          isVisible ? "" : "-translate-y-20"
        } fixed container px-4 md:px-0 mx-auto left-0 right-0 grid grid-cols-3 w-full h-24 z-10 transition-transform duration-200`}
      >
        <div className="w-36 self-center">
          <Link to="/">
            <img src={thisLogo} alt="" />
          </Link>
        </div>
        <ul className="hidden md:flex place-self-center gap-10">
          {items.map((item) => (
            <li
              key={item.text}
              className={`${thisColor} ${
                i18n.language === "th" ? "text-sm" : "text-xs"
              } uppercase font-bold font-ginger tracking-widest`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? activeClassName : "")}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={`${thisColor} hidden md:flex justify-self-end self-center uppercase font-bold font-ginger tracking-widest items-center`}
        >
          <NavLink
            to="/contact"
            className={`${({ isActive }) =>
              isActive ? activeClassName : ""} ${
              i18n.language === "th" ? "text-sm" : "text-xs"
            }`}
          >
            {t("contact")}
          </NavLink>
          <div
            onClick={changeLang}
            className="relative flex items-center cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <FaGlobeAmericas className="ml-6 text-xl" />
            {i18n.language === "th" ? (
              <p className="ml-2 lowercase">En</p>
            ) : (
              <p className="ml-2 text-sm lowercase">ไทย</p>
            )}
          </div>
        </div>
      </div>
      <HamburgerMenu
        hamburgerIsOpen={hamburgerIsOpen}
        setHamburgerIsOpen={setHamburgerIsOpen}
      />
    </nav>
  );
};

Navigation.defaultProps = {
  theme: "light",
};

export default Navigation;
