import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import NavigationContext from "../context/navigation/NavigationContext";
import TranslationContext from "../context/translation/TranslationContext";
import PageHeader from "../components/layouts/PageHeader";
import Footer from "../components/layouts/Footer";
import Tagline from "../components/layouts/Tagline";
import headerImg from "../components/images/services.png";
import videoProductionMp4 from "../components/videos/our-work-video-production-reel.mp4";
import videoProductionWebM from "../components/videos/our-work-video-production-reel.webm";
import webDevelopmentMp4 from "../components/videos/web-development.mp4";
import webDevelopmentWebM from "../components/videos/web-development.webm";
import graphicDesignMp4 from "../components/videos/graphic-design.mp4";
import graphicDesignWebM from "../components/videos/graphic-design.webm";

const Services = () => {
  const { setNavTheme } = useContext(NavigationContext);
  useEffect(() => {
    setNavTheme("dark");
  }, []);

  const { t } = useContext(TranslationContext);

  // const [initialWidth, setInitialWidth] = useState();
  // const [scrollY, setScrollY] = useState();
  // const [initialHeight, setInitialHeight] = useState();
  // const [newWidth, setNewWidth] = useState(0);
  // const windowHeight = window.innerHeight;
  // const myRef = useRef();

  // useEffect(() => {
  //   if (myRef.current) {
  //     setInitialWidth(myRef.current.clientWidth);
  //     setInitialHeight(myRef.current.offsetTop);
  //     console.log(myRef.current.offsetTop);
  //   }
  // }, []);

  // window.addEventListener("scroll", () => {
  //   setNewWidth(initialWidth - window.scrollY * 1.75);
  //   setScrollY(window.scrollY);
  // });

  return (
    <>
      <div className="bg-gradient-to-tr from-gYellow-dark to-gYellow-light">
        <PageHeader
          text1={t("servicesHeader1")}
          text2={t("servicesHeader2")}
          img={headerImg}
        />
        <Tagline
          tagline={t("servicesTagline")}
          title={t("servicesTaglineTitle")}
          description={t("servicesTaglineContent")}
          color="dark"
        />
      </div>
      {/* services start */}
      {/* service 1 */}
      <div className="bg-neutral-800">
        <div className="container mx-auto px-4 lg:px-20 py-20 lg:py-32 lg:flex lg:gap-10 xl:gap-20">
          <div className="w-full lg:h-80 basis-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={videoProductionMp4} type="video/mp4" />
              <source src={videoProductionWebM} type="video/webm" />
            </video>
          </div>
          <div className="mt-10 lg:mt-0 flex flex-col justify-between items-start basis-full text-neutral-100">
            <div>
              <h2 className="text-gYellow-light text-2xl lg:text-4xl font-bold font-ginger">
                {t("servicesVideoProduction")}
              </h2>
              <p className="font-ginger mt-4">
                {t("servicesVideoProductionContent")}
              </p>
            </div>
            <Link to="/work">
              <button className="mt-5 lg:mb-14 font-ginger text-sm border-2 text-gYellow-light border-gYellow-light px-6 py-2 rounded-full hover:bg-gYellow-light hover:text-neutral-800 transition-colors duration-200">
                {t("seeOurWork")} <BsArrowRight className="inline ml-2" />
              </button>
            </Link>
          </div>
        </div>
        {/* service 2 */}
        <div className="container mx-auto px-4 lg:px-20 py-20 lg:py-32 lg:flex lg:gap-10 xl:gap-20 flex-row-reverse">
          <div className="w-full h-60 lg:h-80 basis-full">
            <video autoPlay muted loop playsInline className=" h-full mx-auto">
              <source src={webDevelopmentMp4} type="video/mp4; codecs='hvc1" />
              <source src={webDevelopmentWebM} type="video/webm" />
            </video>
          </div>
          <div className="mt-10 lg:mt-0 flex flex-col justify-between items-start basis-full text-neutral-100">
            <div>
              <h2 className="text-gYellow-light text-2xl lg:text-4xl font-bold font-ginger">
                {t("servicesWebDesignAndDevelopment")}
              </h2>
              <p className="font-ginger mt-4">
                {t("servicesWebDesignAndDevelopmentContent")}
              </p>
            </div>
            <Link to="/work">
              <button className="mt-5 lg:mb-14 font-ginger text-sm border-2 text-gYellow-light border-gYellow-light px-6 py-2 rounded-full hover:bg-gYellow-light hover:text-neutral-800 transition-colors duration-200">
                {t("seeOurWork")} <BsArrowRight className="inline ml-2" />
              </button>
            </Link>
          </div>
        </div>
        {/* service 3 */}
        <div className="container mx-auto px-4 lg:px-20 py-20 lg:py-32 lg:flex lg:gap-10 xl:gap-20">
          <div className="w-full h-60 lg:h-80 basis-full">
            <video autoPlay muted loop className="h-full mx-auto">
              <source src={graphicDesignMp4} type="video/mp4; codecs='hvc1" />
              <source src={graphicDesignWebM} type="video/webm" />
            </video>
          </div>
          <div className="mt-10 lg:mt-0 flex flex-col justify-between items-start basis-full text-neutral-100">
            <div>
              <h2 className="text-gYellow-light text-2xl lg:text-4xl font-bold font-ginger">
                {t("servicesGraphicMotionDesign")}
              </h2>
              <p className="font-ginger mt-4">
                {t("servicesGraphicMotionDesignContent")}
              </p>
            </div>

            <Link to="/work">
              <button className="mt-5 lg:mb-14 font-ginger text-sm border-2 text-gYellow-light border-gYellow-light px-6 py-2 rounded-full hover:bg-gYellow-light hover:text-neutral-800 transition-colors duration-200">
                {t("seeOurWork")} <BsArrowRight className="inline ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* services end */}
      <Footer />
    </>
  );
};

export default Services;
