import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLine,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaGlobeAmericas,
} from "react-icons/fa";
import { changeLanguage } from "i18next";
import NavigationContext from "../../context/navigation/NavigationContext";
import TranslationContext from "../../context/translation/TranslationContext";

const HamburgerMenu = ({ hamburgerIsOpen, setHamburgerIsOpen }) => {
  const { t, i18n } = useContext(TranslationContext);
  const { navTheme } = useContext(NavigationContext);

  // Set color of hamburger because Alex made it too complicated
  const [hamburgerColor, setHamburgerColor] = useState("bg-neutral-100");
  useEffect(() => {
    if (navTheme === "dark" && hamburgerIsOpen) {
      setHamburgerColor("bg-neutral-100");
      return;
    } else if (navTheme === "dark") {
      setHamburgerColor("bg-neutral-800");
    } else {
      setHamburgerColor("bg-neutral-100");
    }
  }, [hamburgerIsOpen, navTheme]);

  const handleHamburger = () => {
    setHamburgerIsOpen((prevState) => !prevState);
  };

  const handleClick = () => {
    setHamburgerIsOpen((prevState) => !prevState);
  };

  const changeLang = () => {
    if (i18n.language !== "th") {
      changeLanguage("th");
    } else changeLanguage("en");
  };

  const top = {
    opened: {
      rotate: 45,
      y: 9,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },

    closed: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const middle = {
    opened: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const bottom = {
    opened: {
      rotate: -45,
      y: -9,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },

    closed: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const container = {
    opened: {
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    closed: {
      x: "100vw",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const pop = {
    opened: {
      scale: [0, 1.2, 1],
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeOut",
      },
    },
    closed: {
      scale: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div
        className={`${
          hamburgerIsOpen ? "fixed" : "absolute"
        } right-4 top-9 cursor-pointer z-50 flex flex-col justify-between items-end h-5 md:hidden`}
        onClick={handleHamburger}
      >
        <motion.div
          className={`${hamburgerColor} h-[2.8px] w-7 rounded-lg`}
          variants={top}
          initial={false}
          animate={hamburgerIsOpen ? "opened" : "closed"}
        ></motion.div>
        <motion.div
          variants={middle}
          initial={false}
          animate={hamburgerIsOpen ? "opened" : "closed"}
          className={`${hamburgerColor} h-[2.8px] w-7 rounded-lg`}
        ></motion.div>
        <motion.div
          variants={bottom}
          initial={false}
          animate={hamburgerIsOpen ? "opened" : "closed"}
          className={`${hamburgerColor} h-[2.8px] w-7 rounded-lg`}
        ></motion.div>
      </div>

      {/* Modal */}

      <motion.div
        variants={container}
        initial={false}
        animate={hamburgerIsOpen ? "opened" : "closed"}
        className="z-30 bg-neutral-800 fixed left-0 top-0 right-0 bottom-0 h-full w-screen flex flex-col justify-evenly items-center"
      >
        <ul className="text-neutral-100 flex flex-col gap-6 text-center font-ginger font-bold text-2xl">
          <Link to="/">
            <motion.li variants={container} onClick={handleClick}>
              {t("home")}
            </motion.li>
          </Link>
          <Link to="/services">
            <motion.li variants={container} onClick={handleClick}>
              {t("services")}
            </motion.li>
          </Link>
          <Link to="/work">
            <motion.li variants={container} onClick={handleClick}>
              {t("work")}
            </motion.li>
          </Link>
          <Link to="/contact">
            <motion.li variants={container} onClick={handleClick}>
              {t("contact")}
            </motion.li>
          </Link>
        </ul>
        <motion.div
          variants={pop}
          initial={false}
          animate={hamburgerIsOpen ? "opened" : "closed"}
          className="flex text-neutral-100 text-3xl gap-4"
        >
          <a
            href="https://facebook.com/graphiocreativestudio"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
          </a>
          <a
            href="https://www.instagram.com/graphiocreativestudio/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
          </a>
          <a
            href="https://line.me/R/ti/p/@graphio"
            target="_blank"
            rel="noreferrer"
          >
            <FaLine className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/company/graphio-creative-studio"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
          </a>
        </motion.div>
        <div
          onClick={changeLang}
          className="absolute top-9 left-4 flex items-center cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <FaGlobeAmericas className="text-neutral-100 text-3xl" />
          {i18n.language !== "th" ? (
            <p className="ml-3 text-neutral-100 text-lg font-ginger">ภาษาไทย</p>
          ) : (
            <p className="ml-3 text-neutral-100 text-lg font-ginger">english</p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default HamburgerMenu;
