import { useState, useContext } from "react";
import { motion } from "framer-motion";
import NavigationContext from "../../context/navigation/NavigationContext";

const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
  invisible: {
    opacity: 1,
  },
};

const PageHeader = ({ text1, text2, img }) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [scrollY, setScrollY] = useState(1);

  window.addEventListener("mousemove", (e) => {
    setX(e.pageX - window.innerWidth / 2);
    setY(e.pageY - window.innerHeight / 2);
  });

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);

    // console.log(window.scrollY, window.innerHeight);
  });

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
    invisible: {
      opacity: 0,
      scale: 1,
    },
  };

  const { navTheme } = useContext(NavigationContext);
  return (
    <div className="container mx-auto h-screen grid">
      {/* <div style={{ transform: `translateY(${scrollY * 0.5})` }}> */}
      <motion.h1
        variants={headerVariants}
        initial="hidden"
        whileInView={scrollY < 500 ? "visible" : "invisble"}
        viewport={{ amount: "all", margin: "-100px 0px 200px 0px" }}
        style={{ y: scrollY * 0.5 }} //make it smoother!
        className={`${
          navTheme === "dark" ? "text-neutral-800" : "text-neutral-100"
        } text-6xl sm:text-7xl lg:text-8xl leading-tight lg:leading-tight font-ginger uppercase font-bold place-self-center text-center bottom-10 relative transition-transform duration-700 ease-out `}
      >
        {text1}
        <br />
        {text2}
      </motion.h1>
      {/* </div> */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={scrollY < 100 ? `visible` : "invisible"}
        style={{ x: "-50%", y: "-35%" }}
        className={`${
          scrollY < 400 ? "fixed" : "hidden"
        }  w-full max-w-[750px] left-1/2 top-1/2`}
      >
        <img
          className="relative"
          style={{
            transform: `translateX(${x * -0.02}px) translateY(${y * -0.02}px)`,
          }}
          src={img}
          alt=""
        />
      </motion.div>
      {/* <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="fixed"
        style={{
          transform: `translateX(${x * -0.02}px) translateY(${y * -0.02}px)`,
        }}
      >
        <img className="" src={img} alt="" />
      </motion.div> */}
    </div>
  );
};

export default PageHeader;
