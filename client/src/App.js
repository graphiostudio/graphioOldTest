import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "./context/navigation/NavigationContext";
import { GalleryProvider } from "./context/gallery/GalleryContext";
import { TranslationProvider } from "./context/translation/TranslationContext";
import { ScrollToTop } from "./hooks/ScrollToTop";
import Navigation from "./components/layouts/Navigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return isLoaded ? (
    <>
      <TranslationProvider>
        <NavigationProvider>
          <GalleryProvider>
            <BrowserRouter>
              <Navigation />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work/:portfolioName" element={<Portfolio />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </GalleryProvider>
        </NavigationProvider>
      </TranslationProvider>
    </>
  ) : (
    <div className="bg-neutral-800 h-screen grid">
      <div className="place-self-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 2.3 }}
          className="lds-ripple"
        >
          <div></div>
          <div></div>
        </motion.div>
        <p className="text-neutral-100 font-ginger mt-3">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            graphio
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {" "}
            creative studio
          </motion.span>
        </p>
      </div>
    </div>
  );
}

export default App;
