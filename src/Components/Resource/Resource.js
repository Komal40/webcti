import React from "react";
// import './Services.css'
import "../Services/Services.css";
import img1 from "../imgs/services/docas.png";
import img2 from "../imgs/services/casestudy.png";
import img3 from "../imgs/services/visa.png";
import img4 from "../imgs/services/inter2.png";
import autosar from "../Images/autosar.png";
import cc from "../Images/cc.jpg";
import fs from "../Images/fs.jpg";
import iotSol from "../Images/iotSolution.png";
import iot3 from "../Images/iot3.png";
import compLine from "../Images/compLine.png";
import Services from "../Services/Services.js";
import cyber from "../Images/cyber.jpg";
import embed from "../Images/embed.jpeg";
// import emb from '../Images/emb.jpg'
// import android from '../Images/android.jpg'


export default function Resource() {
  return (
    <>
    <section id='resource'>
      <div className="iotSol__head">
        <div className="iotSol__headImg1">
          {/* <img src={iotSol} style={{marginLeft:'5rem'}} /> */}
          <h1>
            {" "}
            <span style={{ color: "var(--color-blue)" }}>
              Resource Deployment
            </span>{" "}
          </h1>
          <img src={compLine} />
        </div>
      </div>

      <div className="iotSol__text">
        <p>
          {/* Efficiently allocate human expertise and
          technological assets to maximize productivity, foster innovation, and
          achieve organizational goals through strategic resource allocation. */}
          We Associates with organisation to Depute out expertised resources as services for Multiple Domain.
        </p>
      </div>

      <div id="consulting" class="livenbrathe" style={{ zIndex: "0" }}>
        {/* <h1 style={{display:'flex', justifyContent:'center', margin:'1rem'}}>Our Products</h1> */}
        {/* <h3>Exposure Immigration provides a wide range of immigration services and solutions!</h3> */}
      </div>

      <div class="mymargin"></div>

      <div id="includeHtmlcards"></div>
      <div class="mymargin"></div>

      <div class="cards">
        <div class="card">
          <span class="close"></span>
          <span class="arrow"></span>
          <article>
            <h2>Embedded<br/> Design</h2>
            <div
              class="pic"
              style={{
                backgroundColor: " var(--white)",
                border: " 3px solid #00C2C1",
              }}
            >
              <img src={embed} style={{ backgroundColor: " var(--white)" , objectFit:'cover'}} />
            </div>

            <div class="desc">
              Development Domain with expertise into Linux, C, C++, MCU, ICU (HSM, HSE), microcontroller programming.
            </div>
          </article>
          {/* <!-- <div class="actions">
       <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
       <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>
     </div> --> */}
        </div>
        <div class="card" >
          <span class="close"></span>
          <span class="arrow"></span>
          <article>
            <h2>
              Android
              <br />
              Development
            </h2>
            <div
              class="pic"
              style={{
                backgroundColor: " var(--white)",
                border: " 3px solid #00C2C1",
              }}
            >
              <img
                src={img2}
                style={{ paddingTop: "16px", backgroundColor: "var(--white)" }}
              />
            </div>

            <div class="desc">
              Allocate resources for Android app development, ensuring seamless
              user experiences and functionality.
            </div>
          </article>
          {/* <!-- <div class="actions">
       <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
       <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>
     </div> --> */}

        </div>
        <div class="card">
          <span class="close"></span>
          <span class="arrow"></span>
          <article>
            <h2>IIoT 
              <br/>Solutions</h2>
            <div
              class="pic"
              style={{
                backgroundColor: " var(--white)",
                border: " 3px solid #00C2C1",
              }}
            >
              <img src={cc} style={{ paddingTop: "16px" }} />
            </div>

            <div class="desc">
              Allocate skilled developers and resources
              for ensuring functionality,
              security, and optimal performance.
            </div>
          </article>
          {/* <!-- <div class="actions">
      <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
      <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>
    </div> --> */}
        </div>

      </div>
      </section>
    </>
  );
}
