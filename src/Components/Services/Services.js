import React from "react";
import "./Services.css";
import img1 from "../imgs/services/docas.png";
import img2 from "../imgs/services/casestudy.png";
import img3 from "../imgs/services/visa.png";
import img4 from "../imgs/services/inter2.png";
import autosar from "../Images/autosar.png";
import cc from "../Images/cc.jpg";
import fs from "../Images/fs.jpg";
import cyber from "../Images/cyber.jpg";

export default function Services() {
  return (
    <>
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
            <h2>AUTOSAR</h2>
            <div
              class="pic"
              style={{
                backgroundColor: " var(--white)",
                border: " 3px solid #00C2C1",
              }}
            >
              <img src={autosar} style={{ backgroundColor: " var(--white)" }} />
            </div>

            <div class="desc">
              Classic as Standardized, scalable automotive software
              architecture. Adaptive as Dynamic, networking, cloud-integration,
              future-ready vehicle software architecture.
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
            <h2>
              FUNCTIONAL
              <br />
              SAFETY
              <br />
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
              Ensures systems operate safely, mitigating risks of hazards or
              failures.
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
            <h2>CONNECTED CAR TECHNOLOGY</h2>
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
              Integration of vehicles with communication tech for enhanced
              safety and convenience.
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
            <h2>
              RESOURCE <br />
              DEPLOYMENT
            </h2>
            <div
              class="pic"
              style={{
                backgroundColor: " var(--white)",
                border: " 3px solid #00C2C1",
              }}
            >
              <img src={img3} style={{ paddingTop: "16px" }} />
            </div>

            <div class="desc">
              Process of recruiting and selecting qualified individuals .
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
            <h2>
              CYBER <br />
              SECURITY
              <br />
            </h2>
            <div
              class="pic"
              style={{
                backgroundColor: " var(--white)",
                border: " 3px solid #00C2C1",
              }}
            >
              <img src={fs} style={{ paddingTop: "16px" }} />
            </div>

            <div class="desc">
              Safeguards digital systems, data from unauthorized access, attacks
              and potential threats or breaches.
            </div>
          </article>
          {/* <div class="actions">
      <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
      <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>

    </div>  */}
        </div>
      </div>
    </>
  );
}
