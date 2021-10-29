import React from "react";
import Navbar from "../components/Navbar";
import BlockAdress from "../components/BlockAdress";
import AboutUs from "../components/AboutUs";
import MeetFounders from "../components/MeetFounders";
import Testimonials from "../components/Testimonials";
import Info from "../components/Information";
import Footer from "../components/Footer";
import Instagramm from "../components/Instagram";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BlockAdress />
      <AboutUs />
      <MeetFounders />
      <Instagramm />
      <Testimonials />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
