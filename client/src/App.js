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

function App() {
  return (
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
              </Routes>
            </BrowserRouter>
          </GalleryProvider>
        </NavigationProvider>
      </TranslationProvider>
    </>
  );
}

export default App;
