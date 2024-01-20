import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard";
import BgVideo from "./assets/earth-bg.mp4";
import wave from "./assets/waveg.gif";
import Rapidscat from "./components/Rapidscat";
import Satelite from "./components/Satelite";
import Footer from "./components/Footer";
import Footer5 from "./components/Footer5";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Rapidscat />
      <Satelite />
      {/* <Footer /> */}
      <Footer />
      <Footer5 />
    </div>
  );
};

export default App;