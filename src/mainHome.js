import React from "react";
import Home from "./Components/Home/Home";
import Home2 from "./Components/Home2/Home2";
import Automotive from "./Components/Automotive/Automotive";
import IotSol from "./Components/IotSol/IotSol";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import { TeamSection } from "./Components/TeamSection/TeamSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import Consulting from "./Components/Consulting/Consulting";
import About from "./Components/About/About";
import Product from "./Components/Products/Products";
import Clients from "./Components/Clients/Clients";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import InContact from "./Components/InContact/InContact";
import Certificates from "./Components/Certificates/Certificates";
import NewProducts from "./Components/NewProducts/NewProducts";
import Career from "./Components/Career/Career";
import Resource from "./Components/Resource/Resource";
import Ratings from "./Components/Ratings/Ratings";

const MainHome = () => {
  return (
    <div>
      <Home />
      <Home2 />
      <Automotive />
      <IotSol />
      <ServiceSection />
      <Consulting />
      <About />
      <TeamSection />
      <Resource/>
      <Testimonials />

      <Certificates />

      <NewProducts />
      <Contact />
      <Clients />

      <InContact />
      <Footer />
    </div>
  );
};

export default MainHome;
