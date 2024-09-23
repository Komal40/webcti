import React from "react";
import Navbar from "../Navbar/Navbar";
import autosar from "../Images/autosar.png";
import func from "../Images/funcSafety.png";
import cc from "../Images/connectedcar.png";
import cu from "../Images/controlunits.png";
import hw from "../Images/hwDesign.png";
import Footer from "../Footer/Footer";
import compLine from "../Images/compLine.png";
import embed from "../Images/embedsw.jpeg";
import sfd from "../Images/sfd.jpg";
import qas from "../Images/qas.jpg";
import pcb from "../Images/pcb.jpg";
import fs from '../Images/fs.jpg'
import elect from '../Images/elect.jpg'
import aut from '../Images/aut.jpg'
import hd from '../Images/hd.webp'
import iiotbanner from '../Images/iiotbanner.jpg'
import smartcar from '../Images/smartcar.jpg'
import auto from "../Images/auto_products.jpg";

import "./IotSol_Details.css";

export default function IotSol_Details() {
  const arr = [
    {
      src: embed,
      head:'Embedded Engineering',
      para: "Embedded engineering for IIoT creates specialized hardware and software for seamless communication, real-time monitoring, and control in industrial environments.",
    },
    {
      src: sfd,
      head:'Software Development',
      para: "Expertise in software and firmware development for IIoT solutions, enabling seamless integration, data processing, and control in industrial environments.",
    },
    {
      src: qas,
      head:'Quality Assurance ',
      para: "Ensure robust, reliable performance, compliance, and security, enhancing industrial processes and operations.",
    },
    {
      src: pcb,
      head:'PCB Designing',
      para: " PCB design with real-time monitoring, automated testing, and data analytics, optimizing manufacturing processes and quality assurance.",
    },
    {
      src: hd,
      head:'Hardware Design',
      para: "Encompass instruments and software ensuring product quality, functionality, compliance, and adherence to industry standards.",
    },
    {
      src: aut,
      head:'Automotive Solution',
      para: "Automotive IIoT solutions integrate advanced sensors and data analytics, enhancing vehicle performance, safety, and maintenance in real time.",
    },
    {
      src: fs,
      head:'Testing Tools',
      para: "Enable virtual modeling and analysis, optimizing performance, efficiency, and decision-making in diverse industries and applications.",
    },
    {
      src: elect,
      head:'Electronic Manufacturing Services',
      para: "EMS provide end-to-end solutions, design, assembly, and testing, for electronic products in various industries.",
    },
  ];

  // window.onload = () => {
  //   var targetElement = localStorage.getItem("elementID")
  //   if(targetElement==null){
  //     return
  //   }
  //   // var targetElement = document.getElementById("led_lights")
  //   targetElement.scrollIntoView({ behavior: 'smooth' });
  //   console.log("ITS WORKING")
  //   //Empty the target Element
  //   targetElement = ""
  // };

  return (
    <>
      <Navbar />
      <div className="iotdetails__main">
        <div
          class="bg-primary with-background-image side-banner"
          style={{
            backgroundImage:
              `url(${iiotbanner})`,
          }}
        >
          <div class="wrap" style={{marginLeft:'10%'}}>
            <div class="header-content">
              {" "}
              <h1>IIoT Solutions</h1>
              <br />
              <p>
                {" "}
                <span class="banner2">
                  {" "}
                  Digital Intelligence to Discover Deep Business Insights &amp;
                  Transformative Strategy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="auto__heading">
        <h2
          style={{
            color: "var(--color-blue)",
            textAlign: "left",
            marginLeft: "3em",
            marginBottom: "1rem",
          }}
        >
          IIoT SOLUTIONS
        </h2>
        <img src={compLine} />
      </div>

      <div className="autoDetails__cards">
        {arr.map((ele) => (
          <div class="card" style={{ width: "18rem", height: "30rem" }}>
            <img
              class="card-img-top"
              src={ele.src}
              alt="Card image cap"
              style={{ height: "19rem" }}
            />
            <div class="card-body">
              <strong>{ele.head}</strong>
              <p class="card-text" style={{ color: "black" }}>
                {ele.para}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

