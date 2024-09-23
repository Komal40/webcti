import React, { createFactory } from "react";
import "./IotSol.css";
import iotSol from "../Images/iiotchange.png";
import iot3 from "../Images/iot3.png";
import iot4 from "../Images/iotnoshadow.png";
import cloud from "../Images/cloudnoshadow.png";
import temp from "../Images/temporary.png";
import compLine from "../Images/compLine.png";
import car from "../Images/carnoshadow.png";
import cell from "../Images/cell.png";
import iiot from "../Images/iiot.png";
import pcb from '../Images/pcb.jpg'
import speed from "../Images/speedometer.png";
import grp from "../Images/grp.png";
import qs from '../Images/qs.jpg'
import embed from '../Images/embed.jpeg'
import fwd from '../Images/fwd.jpg'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function IotSol() {

  const scrollToTop=()=>{
    window.scrollTo(0,0);
  }

  return (
    <div id="iotSol">
      <div className="iotSol__head">
        <div className="iotSol__headImg1">
          <img className='iot_img' src={iotSol} style={{ marginLeft: "5%" }} />
          <img className='iot_line' src={compLine} style={{width:'50%'}}/>
        </div>
        <div className="iotSol__headImg2">
          <img className='iot_img2' src={iot3} style={{ width: "80%", height:'100%' }} />
        </div>
      </div>

      <div className="iotSol__text">
        <p>
        IIoT (Industrial Internet of Things) solutions integrate smart technologies with industrial processes to enhance efficiency, productivity, and connectivity in various sectors. These solutions leverage data analytics, sensors, and communication networks to enable real-time monitoring, predictive maintenance, and automation. By bridging the gap between physical machinery and digital systems, IIoT drives innovation in manufacturing, energy, logistics, and more. It empowers industries to make informed decisions, reduce operational costs, and adapt to changing market demands. 
        </p>
      </div>



      <div className="iotSol__belowhead">
        <div className="iotSol__img">
          {/* card temp */}
          

          <div class="itemwrapper">
            <div class="main2" style={{ backgroundImage: `url(${fwd})` }}>
              <div id="bottom">
                <div className="back">Firmware Development</div>
              </div>
            </div>
            <div>
              <p className="iotSol_para">
              Expertise in software and firmware development for IIoT solutions, enabling seamless integration, data processing, and control in industrial environments.
              </p>
            </div>
          </div>

          <div class="itemwrapper">
            <div class="main2" style={{ backgroundImage: `url(${embed})` }}>
              <div id="bottom">
                <div className="back">Embedded Engineering</div>
              </div>
            </div>

            <div>
              <p className="iotSol_para">
               IIoT creates specialized hardware and software for seamless communication, real-time monitoring, and control in industrial environments.
              </p>
            </div>
          </div>

          <div class="itemwrapper">
            <div class="main2" style={{ backgroundImage: `url(${qs})` }}>
              <div id="bottom">
                <div className="back">Quality Assurance</div>
              </div>
            </div>
            <div>
              <p className="iotSol_para">
              Ensure robust, reliable performance, compliance, and security, enhancing industrial processes and operations.
              </p>
            </div>
          </div>


          <div class="itemwrapper">
            <div class="main2" style={{ backgroundImage: `url(${pcb})` }}>
              <div id="bottom">
                <div className="back">PCB Designing</div>
              </div>
            </div>
              <div className="iotSol_para">
              PCB design with real-time monitoring, automated testing, and data analytics, optimizing manufacturing processes and quality assurance.
              </div>
          </div>


          {/* <img src={car}/>
            
            <img src={cell}/>
            <img src={iiot}/>
            <img src={speed}/> */}

        </div>



        <div className="iotSol__sidebar">
          <h3>Need Assisstance?</h3>
          <p>We can assist with you</p>

          <div className="iotbtn">
            <Link to='/iotDetails' onClick={scrollToTop}>
            <button className="iotbtn1">Explore More</button>
            </Link>
            <HashLink to='/#incontact_section' onClick={scrollToTop} smooth>
            <button className="iotbtn2">Reach Us</button>
            </HashLink>
          </div>
        </div>
      </div>

      <div className="iotSol__below"></div>
    </div>
  );
}



