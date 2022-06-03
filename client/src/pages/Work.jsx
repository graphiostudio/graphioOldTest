import { useEffect, useContext } from "react";
import NavigationContext from "../context/navigation/NavigationContext";
import TranslationContext from "../context/translation/TranslationContext";
import PageHeader from "../components/layouts/PageHeader";
import Tagline from "../components/layouts/Tagline";
import Search from "../components/layouts/Search";
import GridGallery from "../components/layouts/gallery/GridGallery";
import Footer from "../components/layouts/Footer";
import headerImg from "../components/images/our-work.png";

const Work = () => {
  const { setNavTheme } = useContext(NavigationContext);
  const { t } = useContext(TranslationContext);

  useEffect(() => {
    setNavTheme("light");
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <div className="bg-gradient-to-tr from-gTeal-dark to-gTeal-light">
        <PageHeader
          text1={t("workHeader1")}
          text2={t("workHeader2")}
          img={headerImg}
        />
        <Tagline
          tagline={t("workTagline")}
          title={t("workTaglineTitle")}
          description={t("workTaglineContent")}
        />
      </div>
      <Search />
      <GridGallery />
      <Footer />
    </>
  );
};

export default Work;
