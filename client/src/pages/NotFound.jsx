import Footer from "../components/layouts/Footer";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-full bg-neutral-700 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-neutral-100 text-5xl lg:text-6xl font-bold font-ginger ">
            <FaExclamationTriangle className="inline mb-4" /> 404
          </h2>
          <h4 className="mt-3 text-neutral-100 text-lg lg:text-3xl font-ginger font-bold">
            Sorry, page not found
          </h4>
          <Link to="/">
            <button className="cursor-pointer mt-20 text-neutral-800 font-ginger font-bold bg-neutral-100 px-6 py-3 lg:px-8 lg:py-4 rounded-lg hover:opacity-80 transition-all duration-200">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
