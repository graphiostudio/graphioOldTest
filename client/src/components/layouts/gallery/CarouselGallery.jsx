import { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import GalleryContext from "../../../context/gallery/GalleryContext";

const CarouselGallery = () => {
  const { portfolios } = useContext(GalleryContext);

  const carouselRef = useRef();

  const [scrollX, setScrollX] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState();

  useEffect(() => {
    setCarouselWidth(carouselRef.current.clientWidth);
  }, []);

  useEffect(() => {
    setScrollWidth(carouselRef.current.scrollWidth);
    carouselRef.current.scrollLeft = scrollX;
  }, [scrollX]);

  const scrollRight = () => {
    setScrollX(
      (prevState) =>
        prevState +
        carouselRef.current.scrollWidth / carouselRef.current.childNodes.length
    );
  };

  const scrollLeft = () => {
    setScrollX(
      (prevState) =>
        prevState -
        carouselRef.current.scrollWidth / carouselRef.current.childNodes.length
    );
  };

  return (
    <div className="relative my-10 lg:my-20">
      {scrollX > 0 && (
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          transition={{ ease: "easeOut" }}
          style={{ y: "-50%" }}
          onClick={scrollLeft}
          className="hidden md:flex cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 bg-gRed-dark rounded-full justify-center items-center"
        >
          <BsArrowLeft className="text-neutral-100" />
        </motion.div>
      )}
      {scrollX + carouselWidth < scrollWidth && (
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          transition={{ ease: "easeOut" }}
          style={{ y: "-50%" }}
          onClick={scrollRight}
          className="hidden md:flex cursor-pointer absolute top-1/2 right-2 w-10 h-10 bg-gRed-dark rounded-full justify-center items-center"
        >
          <BsArrowRight className="text-neutral-100" />
        </motion.div>
      )}

      <div
        ref={carouselRef}
        className="scroll-smooth no-scrollbar bg-neutral-900 h-60 md:h-80 flex overflow-x-auto "
      >
        {portfolios.map((item) => (
          <img
            key={item.name}
            src={item.thumbnail}
            alt={item.alt}
            className="shrink-0 w-60 md:w-80 2xl:w-96 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselGallery;
