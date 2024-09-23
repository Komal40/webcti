import React from "react";
import logo from "../Images/logo.png";
import tag from "../Images/tag.png";
import grp from "../Images/home2__grp.png";
import "./Home2.css";


export default function Home2() {
  return (
    <>
    <div id="home2">
      <div className="home2__left">
        <div className="home2__tag">
          <img src={tag} />
        </div>

        <div className="home2__text">
          <p style={{color:'black'}}>
            An <span style={{color:'var(--color-primary)'}}>ISO 9001:2015</span>, CE, RoHS Certified Company...
            <br/> Trademark and Startup India Registered
          </p>
          {/* <img src={logo} className="home2__logo" /> */}
        </div>
      </div>
      <div className="home2__right">
        <img src={grp} />
      </div>
    </div>
    <div className="below_div_home2"></div>
</>
  );
}



