import React from "react";
import "./Automotive.css";
import car from "../Images/carnoshadow.png";
import cell from "../Images/wheelnoshadow.png";
import cloud from "../Images/cloudnoshadow.png";
import iiot from "../Images/iotnoshadow.png";
import speed from "../Images/speednoshadow.png";
import phn from "../Images/temporary.png";
import autosar from '../Images/autosar.png'
import cc from '../Images/c_unit.jpg'
import nds from '../Images/nds.jpg';
import hwd from '../Images/hwd.jpg'
import ns from '../Images/ns.jpg'
import smartcar from '../Images/smartcar.jpg'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function Automotive() {
  const scrollToTop=()=>{
    window.scrollTo(0,0)
  }

  return (
    <section id="automotive">
      <div className="auto__head">
        <div className="auto__heading">
          <h2 style={{textAlign:'center'}}>
            AUTOMOTIVE{" "}
            <span style={{ color: "var(--color-primary)" }}>SOLUTIONS</span>
          </h2>
        </div>
        <div className="auto__para">
          <p>
            Automotive solutions encompass a diverse range of technologies,
            products, and services tailored to the automotive industry. They
            address critical needs such as safety, efficiency, and connectivity.
            From advanced driver assistance systems (ADAS) to electric vehicle
            technologies and telematics, these solutions drive innovation,
            enhance performance, and pave the way for the future of
            transportation. Whether it's optimizing vehicle performance,
            ensuring functional safety, or enabling autonomous driving,
            automotive solutions play a pivotal role in shaping the vehicles of
            tomorrow.
          </p>
        </div>
      </div>

      <div className="auto__btn">
        <Link to="/autoDetails" onClick={scrollToTop}>
          <button className="auto__explore">Explore More</button>
        </Link>
        <HashLink to="/#incontact_section" onClick={scrollToTop} smooth>
          <button className="auto__consult">Consult Us</button>
        </HashLink>
      </div>

      <div className="auto__images">
        <div class="automotive__itemwrapper">
          <div class="auto_main2" style={{ backgroundImage: `url(${smartcar})` }}>
            <div id="bottom">
              <div className="auto_back">Engineering Services</div>
            </div>
          </div>
          <div className="iotSol_para">
            Provides end-to-end solutions, including design, assembly, and
            testing, for electronic products in various industries
          </div>
        </div>

        <div class="automotive__itemwrapper">
          <div class="auto_main2" style={{ backgroundImage: `url(${ns})` }}>
            <div id="bottom">
              <div className="auto_back">Networking Stacks</div>
            </div>
          </div>
          <div className="iotSol_para">
            Networking stacks are layered protocols enabling communication
            between devices. They manage tasks like data transmission, routing,
            and error handling.
          </div>
        </div>

        <div class="automotive__itemwrapper">
          <div class="auto_main2" style={{ backgroundImage: `url(${nds})` }}>
            <div id="bottom">
              <div className="auto_back">Diagnostic Stacks</div>
            </div>
          </div>
          <div className="iotSol_para">
            Diagnostic stacks are specialized software layers enabling fault
            detection, analysis, and reporting, crucial for troubleshooting and
            maintaining complex systems.
          </div>
        </div>

        <div class="automotive__itemwrapper">
          <div class="auto_main2" style={{ backgroundImage: `url(${autosar})` }}>
            <div id="bottom">
              <div className="auto_back">Autosar</div>
            </div>
          </div>
          <div className="iotSol_para">
            Standardized automotive software platform, enhancing efficiency,
            scalability, and interoperability in vehicle electronics systems.
          </div>
        </div>

        <div class="automotive__itemwrapper">
          <div class="auto_main2" style={{ backgroundImage: `url(${hwd})` }}>
            <div id="bottom">
              <div className="auto_back">Hardware Design</div>
            </div>
          </div>
          <div className="iotSol_para">
            Hardware design is the process of creating electronic circuits and
            components, including layout, testing, and production for various
            applications.
          </div>
        </div>

        <div class="automotive__itemwrapper">
          <div class="auto_main2" style={{ backgroundImage: `url(${cc})` }}>
            <div id="bottom">
              <div className="auto_back">Control Units</div>
            </div>
          </div>
          <div className="iotSol_para">
            Control units are electronic devices managing and regulating
            functions in machines or systems, interpreting input signals and
            generating appropriate outputs.
          </div>
        </div>
      </div>
    </section>
  );
}


