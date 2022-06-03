import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import GalleryContext from "../../../context/gallery/GalleryContext";
import TranslationContext from "../../../context/translation/TranslationContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      duration: 0.1,
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    y: 500,
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "linear",
    },
  },
};

const GridGallery = () => {
  const { t } = useContext(TranslationContext);
  let navigate = useNavigate();
  const { portfolios } = useContext(GalleryContext);

  const handleClick = (sample) => {
    navigate(`/work/${sample}`);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={containerVariants}
          key={portfolios[0].category}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 overflow-hidden bg-neutral-100"
        >
          {portfolios.map((item) => (
            // Container

            <motion.div
              variants={itemVariants}
              key={item.name}
              className="relative group hover:scale-105 hover:z-50 transition-all duration-500"
            >
              {/* image */}
              <img
                src={item.thumbnail}
                alt={item.alt}
                className={`w-full h-96 object-cover transition-transform duration-200`}
              />
              {/* hover */}
              <div className="lg:hidden group-hover:flex absolute top-0 w-full h-full lg:bg-neutral-100/30 flex justify-center items-end">
                <button
                  onClick={() => {
                    handleClick(item.name.replace(/\s/g, "-").toLowerCase());
                  }}
                  className="mb-10 font-ginger font-xs bg-neutral-800 text-neutral-100 px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 "
                >
                  {t("learn more")} <BsArrowRight className="inline " />
                </button>

                <p className="lg:block absolute top-4 left-3 lg:max-w-1/2 px-4 py-1 rounded-lg bg-neutral-800 text-neutral-100 text-xs font-ginger capitalize">
                  {item.name}
                </p>
                <p className="hidden lg:block absolute top-4 right-3 px-4 py-1 rounded-lg bg-gRed-light text-neutral-100 text-xs font-ginger capitalize">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default GridGallery;
