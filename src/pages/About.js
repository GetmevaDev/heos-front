import React from "react";
import Navbar from "../components/Navbar";
import Block from "../components/Block";
import Team from "../components/Team";
import Instagramm from "../components/Instagram";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Info from "../components/Information";

import Manhattan from "../images/manh.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <Block title="Meet The Team" img={Manhattan} />
      <Team />
      <Instagramm />
      <Testimonials />
      <Info />
      <Footer />
    </div>
  );
};

export default About;
