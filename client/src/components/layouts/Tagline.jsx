import { useContext } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/utils";
import TranslationContext from "../../context/translation/TranslationContext";

const Tagline = ({ tagline, title, description, color, dot }) => {
  const { i18n } = useContext(TranslationContext);
  const isMedium = useMediaQuery("(min-width: 768px)");
  const slideRightVariants = isMedium
    ? {
        hidden: {
          opacity: 0,
          x: -900,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.3,
            delay: 0.3,
          },
        },
      }
    : {
        hidden: {
          opacity: 0,
          x: -100,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.3,
            delay: 0.3,
          },
        },
      };
  return (
    <div className="container mx-auto px-4 lg:px-24 2xl:px-52 pb-20 lg:pb-32">
      <motion.div
        variants={slideRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={
          isMedium
            ? {
                once: true,
                margin: "-50px 0px -50px 0px",
              }
            : { once: true, margin: "-100px 0px -100px 0px" }
        }
        className={`${
          color === "dark" ? "text-neutral-800" : "text-neutral-100"
        } flex flex-col items-center font-ginger text-center`}
      >
        <p
          className={`${
            i18n.language === "th" ? "text-base" : "text-xs"
          } uppercase`}
        >
          {tagline}
        </p>
        <span className={`${dot} w-4 h-4 rounded-full my-3`}></span>
        <h2 className="font-bold text-3xl md:px-20 mt-12">{title}</h2>
        <p className="mt-6">{description}</p>
      </motion.div>
    </div>
  );
};

Tagline.defaultProps = {
  color: "light",
  dot: "bg-gRed-light",
};

export default Tagline;
