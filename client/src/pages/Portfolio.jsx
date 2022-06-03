import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import GalleryContext from "../context/gallery/GalleryContext";
import YoutubeEmbed from "../components/layouts/YoutubeEmbed";
import Footer from "../components/layouts/Footer";

const variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
};

const Portfolio = () => {
  const { portfolios } = useContext(GalleryContext);
  const { portfolioName } = useParams();
  const [currentPortfolio, setCurrentPortfolio] = useState();

  const [current] = portfolios.filter(
    (portfolio) =>
      portfolio.name.replace(/\s/g, "-").toLowerCase() === portfolioName
  );
  useEffect(() => {
    setCurrentPortfolio(current);
  });

  if (currentPortfolio) {
    return (
      <>
        {/* header starts */}
        <div className="h-screen">
          {/* for image */}
          {currentPortfolio.header.image && (
            <>
              {/* <div
                className="h-full w-full bg-no-repeat bg-cover bg-center flex items-center"
                style={{
                  backgroundImage: `url(${currentPortfolio.header.image})`,
                }}
              ></div> */}

              <img
                className="h-full w-full object-cover fixed bottom-0"
                src={currentPortfolio.header.image}
                alt=""
              />

              <div className="container mx-auto px-4">
                <h1 className="text-neutral-100 font-ginger font-bold text-5xl lg:text-7xl leading-snug w-1/2 absolute top-1/2 -translate-y-1/2">
                  {currentPortfolio.name}
                </h1>
              </div>
            </>
          )}
          {/* for video */}
          {currentPortfolio.header.video && (
            <div className="h-full bg-black">
              <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover fixed"
              >
                <source
                  src={currentPortfolio.header.video.mp4}
                  type="video/mp4"
                />
                <source
                  src={currentPortfolio.header.video.webm}
                  type="video/webm"
                />
              </motion.video>
              <div className="container mx-auto px-4">
                <h1 className="absolute top-1/2 -translate-y-1/2 text-neutral-100 font-ginger font-bold text-5xl lg:text-7xl leading-snug w-1/2">
                  {currentPortfolio.name}
                </h1>
              </div>
            </div>
          )}
        </div>
        {/* header ends */}

        {/* info starts */}
        <div className="bg-white relative">
          <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_3fr] z-30">
            <div className="pt-20 lg:pr-16 lg:sticky top-0 self-start flex flex-col items-center sm:grid sm:grid-cols-3 sm:items-start lg:flex lg:flex-col sm:gap-4 text-neutral-800">
              <div className="w-4 h-4 bg-gRed-dark rounded-full shrink-0 sm:col-span-3"></div>
              <div className="mt-8 font-ginger basis-full text-center sm:text-left">
                <h4 className="text-md uppercase font-normal">Who</h4>
                <p className="text-sm mt-1 font-thin">
                  {currentPortfolio.info.who}
                </p>
              </div>
              <div className="mt-8 font-ginger basis-full text-center sm:text-left">
                <h4 className="text-md uppercase font-normal">What</h4>
                {currentPortfolio.info.services.map((service) => (
                  <p
                    key={service}
                    className="text-sm mt-1 font-thin capitalize"
                  >
                    {service}
                  </p>
                ))}
              </div>
              <div className="mt-8 font-ginger basis-full text-center sm:text-left">
                <h4 className="text-md uppercase font-normal">How</h4>
                <p className="text-sm mt-1 font-thin">
                  {currentPortfolio.info.how}
                </p>
              </div>
            </div>
            {/* info ends */}
            {/* content section starts */}
            <div className="py-20">
              {currentPortfolio.items.map((item, index) => (
                <div
                  key={index}
                  className={`pb-4 sm:pb-12 lg:pb-16 flex flex-col ${
                    item.reverse ? "flex-col-reverse" : ""
                  }`}
                >
                  <div>
                    {/* image */}
                    {item.image && (
                      <motion.img
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-full w-full object-cover"
                        src={item.image}
                        alt={item.alt}
                      />
                    )}
                    {/* youtube */}
                    {item.youtubeEmbedId && (
                      <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <YoutubeEmbed embedId={item.youtubeEmbedId} />
                      </motion.div>
                    )}
                    {/* video */}
                    {item.video && (
                      <motion.video
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={item.video.webm} type="video/webm" />
                        <source src={item.video.mp4} type="video/mp4" />
                      </motion.video>
                    )}
                  </div>

                  {(item.title || item.text) && (
                    <motion.div
                      variants={variants}
                      initial="hidden"
                      whileInView="visible"
                      className="my-8 font-ginger"
                    >
                      <h5 className="font-bold text-2xl text-neutral-800">
                        {item.title}
                      </h5>
                      {item.text &&
                        item.text.map((textItem, index) => (
                          <p
                            key={index}
                            className="text-base mt-4 text-neutral-600 "
                          >
                            {textItem}
                          </p>
                        ))}
                    </motion.div>
                  )}
                  {/* divider */}
                  {item.divider && (
                    <div className="h-[2px] bg-neutral-800 w-full my-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* content section ends */}
          <div className="flex justify-end bg-white container mx-auto">
            <div className="px-4 my-4 font-ginger group">
              <Link to="/work">
                <BsArrowLeft className="inline mr-2 group-hover:-translate-x-3 transition-transform duration-300" />
                back
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Portfolio;
