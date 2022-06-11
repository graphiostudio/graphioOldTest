import { useEffect, useContext } from "react";
import NavigationContext from "../context/navigation/NavigationContext";
import TranslationContext from "../context/translation/TranslationContext";
import PageHeader from "../components/layouts/PageHeader";
import Tagline from "../components/layouts/Tagline";
import Footer from "../components/layouts/Footer";
import ContactForm from "../components/layouts/ContactForm";
import Map from "../components/layouts/Map";
import headerImg from "../components/images/contact.webp";

const Contact = () => {
  const { setNavTheme } = useContext(NavigationContext);
  const { t } = useContext(TranslationContext);

  useEffect(() => {
    setNavTheme("yellow");
  }, []);

  return (
    <>
      {/* <Navigation logo="yellow" /> */}
      <div className="bg-gradient-to-tr from-gRed-dark to-gRed-light">
        <PageHeader
          text1={t("contactHeader1")}
          text2={t("contactHeader2")}
          img={headerImg}
        />
        <Tagline
          tagline={t("contactTagline")}
          title={t("contactTaglineTitle")}
          description={t("contactTaglineContent")}
          dot="bg-gYellow-light"
        />
      </div>
      <Map />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
