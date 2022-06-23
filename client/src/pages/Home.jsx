import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "../index.css";
import NavigationContext from "../context/navigation/NavigationContext";
import TranslationContext from "../context/translation/TranslationContext";
import Tagline from "../components/layouts/Tagline";
import CarouselGallery from "../components/layouts/gallery/CarouselGallery";
import Footer from "../components/layouts/Footer";
import PageHeader from "../components/layouts/PageHeader";
import headerImg from "../components/images/homepage.webp";
import videoMp4 from "../components/videos/we-are-graphio-15sec-no-sound.mp4";
import videoWebM from "../components/videos/we-are-graphio-15sec-no-sound.webm";
// test
const Home = () => {
  const { setNavTheme } = useContext(NavigationContext);
  const { t } = useContext(TranslationContext);

  useEffect(() => {
    setNavTheme("light");
  }, []);

  return (
    <>
      <div className="bg-gradient-to-tr from-gBlue-dark to-gBlue-light">
        <PageHeader text1={t("creative")} text2={t("agency")} img={headerImg} />

        <Tagline
          tagline={t("homepageTagline")}
          title={t("homepageTaglineTitle")}
          description={t("homepageTaglineContent")}
        />
        <div className="container mx-auto lg:w-2/3 xl:w-1/2 mt-7 mb-4 lg:mt-28 lg:mb-28">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={videoMp4} type="video/mp4; codecs='hvc1" />
            <source src={videoWebM} type="video/webm" />
          </video>
        </div>

        {/* Recent work */}
        <div className="select-none py-20 lg:py-40 container mx-auto flex flex-col items-center">
          <h3 className="text-neutral-100 font-ginger font-bold text-3xl text-center">
            {t("recent work")}
          </h3>

          <CarouselGallery />

          <Link to="/work">
            <button className="text-neutral-100 font-ginger border-2 rounded-full py-2 px-8 flex items-center group hover:bg-neutral-100 hover:text-neutral-700 transition-colors duration-200">
              {t("view all work")}
              <BsArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
