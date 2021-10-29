import React from "react";
import Navbar from "../components/Navbar";
import Block from "../components/Block";

import Manhattan from "../images/mask.jpg";
import Map from "../components/AddressMap";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Block title="Manhattan Salon" img={Manhattan} />
      <Map />

      <Footer />
    </div>
  );
};

export default Contact;
