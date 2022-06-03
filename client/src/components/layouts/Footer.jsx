import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/utils";
import {
  FaLine,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../images/Logo-Dark-1@4x.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMedium = useMediaQuery("(min-width: 768px)");

  const variants = isMedium
    ? {
        hidden: {
          y: 240,
        },
        visible: {
          y: 0,
          transition: {
            duration: 0.4,
          },
        },
      }
    : {
        hidden: {
          y: 130,
        },
        visible: {
          y: 0,
          transition: {
            duration: 0.4,
          },
        },
      };

  return (
    <footer>
      <div className="bg-neutral-100 h-40 md:h-80 relative flex justify-center items-center overflow-y-hidden">
        <motion.div
          className="absolute"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={
            isMedium ? { margin: "0px 0px 100px 0px" } : { margin: "0px" }
          }
        >
          <img className="w-16 md:w-28" src={logo} alt="Graphio logo" />
        </motion.div>
        <h2 className="text-neutral-200 text-3xl md:text-5xl">
          graphio creative studio
        </h2>
      </div>
      <div className="bg-neutral-800 relative">
        <div className="container mx-auto px-4 md:px-0 py-4 flex justify-between">
          <p className="font-ginger text-sm text-neutral-100 ">
            {" "}
            &copy;{currentYear} Graphio Co., Ltd.
          </p>
          <div className="flex gap-2 text-2xl text-neutral-800">
            <a
              href="https://line.me/R/ti/p/@graphio"
              target="_blank"
              rel="noreferrer"
            >
              <FaLine className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
            </a>
            <a
              href="https://www.instagram.com/graphiocreativestudio/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
            </a>
            <a
              href="https://facebook.com/graphiocreativestudio"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/graphio-creative-studio"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-neutral-100 hover:scale-150 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
