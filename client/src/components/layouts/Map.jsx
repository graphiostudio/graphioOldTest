import { useContext } from "react";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import GoogleMaps from "./GoogleMaps";
import TranslationContext from "../../context/translation/TranslationContext";

const Map = () => {
  const { t } = useContext(TranslationContext);
  return (
    <div className="bg-gRed-dark pb-20 lg:pb-40">
      <GoogleMaps />
      {/* contact info */}
      <div className="mx-auto my-10 w-4/6 h-[2px] bg-neutral-100"></div>
      <div className="grid">
        <div className="px-4 text-neutral-100 font-ginger place-self-center flex flex-col gap-6">
          <a href="tel:0612717446" className="flex items-center">
            <FaPhone className="mr-8" />
            +6612717446
          </a>
          <a href="mailto:info@graphio.co.th" className="flex items-center">
            <FaEnvelope className="mr-8" />
            info@graphio.co.th
          </a>
          <p className="flex items-center">
            <FaLocationArrow className="mr-8" />
            {t("address")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
