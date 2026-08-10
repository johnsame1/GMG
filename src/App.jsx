import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/layouts/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Services from "./components/sections/Services/Services";
import Projects from "./components/sections/Projects/Projects";
import Footer from "./components/layouts/Footer/Footer";
import Loader from "./components/layouts/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
