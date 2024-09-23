import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Auto_Details.css";
import autosar from '../Images/autosar.png'
import func from '../Images/funcSafety.png'
import ccar from '../Images/connectedcar.png'
import cc from '../Images/cc.jpg';
import nds from '../Images/nds.jpg';
import cu from '../Images/controlunits.png'
import hw from '../Images/hwDesign.png';
import model from '../Images/model.jpg';
import Footer from "../Footer/Footer";
import compLine from "../Images/compLine.png";
import fs from '../Images/fs.jpg'
import embed from "../Images/embedsw.jpeg";
import smartcar from '../Images/smartcar.jpg'
import auto from '../Images/auto.png'
// import firmware from '../Images/firmware.jpg'

// import control_unit from '../Images/control_unit.jpg'


export default function Auto_Details() {
  const arr=[
    {
      src:autosar,
      head:'Autosar',
      para:'Provides end-to-end solutions, including design, assembly, and testing, for electronic products in various industries.'
    },

    
    {
      src:cu,
      head:'Automotive ',
      para:'Standardized automotive software platform, enhancing efficiency, scalability, and interoperability in vehicle electronics systems.'
    },
    
    {
      src:fs,
      head:'Functional Safety',
      para:'Paramount for ensuring the reliable operation of critical systems. Involves rigorous assessment, design, and testing to minimize risks and hazards. Prioritize the well-being of drivers and passengers.'
    },
    {
      src:cc,
      head:'Diagnostic Stacks',
      para:'Diagnostic stacks are specialized software layers enabling fault detection, analysis, and reporting, crucial for troubleshooting and maintaining complex systems.'
    },   

  ]

  const emarr=[
    {
      src: embed,
      head:'Embedded Engineering',
      para: "Embedded engineering for IIoT creates specialized hardware and software for seamless communication, real-time monitoring, and control in industrial environments.",
    },

    {
      src:hw,
      head:'Hardware Design',
      para:'Process of creating electronic circuits and components, including layout, testing, and production for various applications.'
    },
    {
      src:smartcar,
      head:'Connected Car',
      para:'Services revolutionize the automotive industry by seamlessly integrating cutting-edge technology. Real-time data exchange and intelligent systems pave the way for a future of efficient, connected transportation.'
    },

    {
      src:model,
      head:'Model Based',
      para:'Control units are electronic devices managing and regulating functions in machines or systems, interpreting input signals and generating appropriate outputs.'
    }
  ]

  // window.onload = () => {
  //   var targetElement = localStorage.getItem("elementID")
  //   if(targetElement==""){
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
  
      <div>
        <div
          class="bg-primary with-background-image side-banner"
          style={{
            backgroundImage:
              `url(${auto})`,
          }}
        >
          <div class="wrap" style={{marginLeft:'10%'}}>
            <div class="header-content">
              {" "}
              <h1>
                Automotive Technology Platforms, Solutions, and Development
                Services
              </h1>
              <br />
              
              <p>
                {" "}
                <span class="banner2">
                  {" "}
                  Reference Design,
                   Platform Software,
                    Protocol Stacks, ISO:26262 Consulting and More
                </span>
              </p>
            </div>
          </div>

        </div>

        <div className="auto__heading">
          <h2 style={{ color: "var(--color-blue)", textAlign:'left',marginLeft:'3em', marginBottom:'1rem' }}>
          ENGINEERING SERVICES
          </h2>
        <img src={compLine}  />

        </div>


<section id='autosar'>
<div className="autoDetails__cards">
       {
        arr.map((ele)=>(
          <div class="card" style={{width: '18rem', height:'32rem'}}>
          <img class="card-img-top" src={ele.src} alt="Card image cap" style={{height:'15rem'}} />
          <div class="card-body">
            <strong>{ele.head}</strong>
            <p class="card-text" style={{color:'black'}}>{ele.para}</p>
          </div>
        </div>
        ))
       }
       </div>
</section>

<section id='embedded'>
<div className="autoDetails__cards">
       {
        emarr.map((ele)=>(
          <div class="card" style={{width: '18rem', height:'32rem'}}>
          <img class="card-img-top" src={ele.src} alt="Card image cap" style={{height:'15rem'}} />
          <div class="card-body">
            <strong>{ele.head}</strong>
            <p class="card-text" style={{color:'black'}}>{ele.para}</p>
          </div>
        </div>
        ))
       }
       </div>
</section>

       <div className="auto__heading">
          <h2 style={{ color: "var(--color-blue)", textAlign:'left',marginLeft:'3em', marginBottom:'1rem' }}>
          NETWORKING AND DIAGNOSTICS STACKS
          </h2>
        <img src={compLine}  />
        <div>
        
        <div className="auto_details_container">
      <div className="image-side">
        <img src={nds} alt="Image" />
      </div>
      <div className="points-side">
        <ul>
          <li>UDS Stack</li>
          <li>DoIP Stack</li>
          <li>OBD Stack</li>
          <li>OBD II Stack</li>
          <li>CAN Stack</li>
          <li>LIN Stack</li>
          <li>ISOBUS Stack</li>
          <li>CANFD Stack</li>
          <li>Flesray Stack</li>
          <li>NFC Stack</li>
        </ul>
      </div>
    </div>
        </div>
        </div>


      </div>
      <Footer/>
    </>
  );
}
