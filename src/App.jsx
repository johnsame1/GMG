import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import "./App.css";
import Navbar from "./components/layouts/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Services from "./components/sections/Services/Services";
import Projects from "./components/sections/Projects/Projects";
import Footer from "./components/layouts/Footer/Footer";
import Loader from "./components/layouts/Loader/Loader";
import useLangDirection from "./hooks/useLangDirection";
import ProductsSlider from "./components/sections/SliderProduct/SliderProduct";

function App() {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useLangDirection();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const isAr = i18n.language === "ar";

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />

        <title>
          {isAr
            ? "GMG Marble | رخام وجرانيت طبيعي في مصر"
            : "GMG Marble | Premium Marble & Granite in Egypt"}
        </title>

        <meta
          name="description"
          content={
            isAr
              ? "GMG Marble متخصصة في الرخام والجرانيت الطبيعي في مصر، من استخراج وقطع وتلميع وتصنيع وتركيب الحجر الطبيعي للمشروعات السكنية والتجارية."
              : "GMG Marble specializes in premium natural marble and granite in Egypt, offering quarrying, cutting, polishing, fabrication, installation, and natural stone solutions."
          }
        />

        <meta
          name="keywords"
          content={
            isAr
              ? "GMG Marble, GMGmarble, GMG, رخام, جرانيت, رخام مصر, جرانيت مصر, رخام طبيعي, جرانيت طبيعي, شركة رخام, مصنع رخام, مورد رخام, مورد جرانيت, تركيب رخام, تصدير رخام"
              : "GMG Marble, GMGmarble, GMG, Marble Egypt, Granite Egypt, Egyptian Marble, Egyptian Granite, Natural Marble, Natural Granite, Marble Supplier Egypt, Granite Supplier Egypt, Marble Factory Egypt, Marble Installation, Marble Export"
          }
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="GMG Marble" />

      

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            isAr
              ? "GMG Marble | رخام وجرانيت طبيعي في مصر"
              : "GMG Marble | Premium Marble & Granite in Egypt"
          }
        />

        <meta
          property="og:description"
          content={
            isAr
              ? "رخام وجرانيت طبيعي عالي الجودة من مصر، من الاستخراج والتصنيع حتى التركيب."
              : "Premium Egyptian marble and granite, from quarrying and fabrication to installation."
          }
        />

        <meta
          property="og:url"
          content="https://gmgmarble.vercel.app/"
        />

        <meta
          property="og:image"
          content="https://gmgmarble.vercel.app/og-image.jpg"
        />

        <meta property="og:site_name" content="GMG Marble" />

        <meta
          property="og:locale"
          content={isAr ? "ar_EG" : "en_US"}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content={
            isAr
              ? "GMG Marble | رخام وجرانيت طبيعي"
              : "GMG Marble | Premium Marble & Granite"
          }
        />

        <meta
          name="twitter:description"
          content={
            isAr
              ? "توريد وتصنيع وتركيب الرخام والجرانيت الطبيعي في مصر."
              : "Premium marble and granite supplier in Egypt."
          }
        />

        <meta
          name="twitter:image"
          content="https://gmgmarble.vercel.app/og-image.jpg"
        />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <ProductsSlider />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;