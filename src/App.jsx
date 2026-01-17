import Hero from "./components/Hero";
import Trending from "./components/Trending";
import FloatingImage from "./components/FloatingImage";
import Cards from "./components/Cards";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [showCard, setShowCard] = useState(false);
  const [currCard, setCurrCard] = useState(null);

  // floating cards activation
  useEffect(() => {
    document.body.style.overflow = showCard ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCard]);

  return (
    <>
      <main className="w-full min-h-screen relative bg-black text-white flex flex-col justify-start items-center">
        <Hero />
        <Trending props={{ setShowCard, setCurrCard }} />
        {showCard && (
          <FloatingImage props={{ setShowCard, currCard, setCurrCard }} />
        )}
        <Cards />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default App;
