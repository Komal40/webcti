import React from "react";
import "./Consulting.css";
import iotSol from "../Images/iotSolution.png";
import iot3 from "../Images/iot3.png";
import compLine from "../Images/compLine.png";
import Services from "../Services/Services.js";

export default function Consulting() {
  return (
    <div>
      <div className="iotSol__head">
        <div className="iotSol__headImg1">
          {/* <img src={iotSol} style={{marginLeft:'5rem'}} /> */}
          <h1 >
            {" "}
            <span style={{ color: "var(--color-primary)" }}>
              Consulting Services
            </span>{" "}
            Offering
          </h1>
          <img src={compLine} />
        </div>
        <div className="iotSol__headImg2">
          <img className="consult_img2" src={iot3} style={{ width: "15rem" }} />
        </div>
      </div>

      <div className="iotSol__text">
        <p>
          Cellus Tech India along with its associate companies is a one-stop
          solution provider for embedded product engineering and development.
          The in-house R&D is recognized by Dept. of Science and Technology,
          Govt. of India. ESA is a member of Consortium of Electronic Industries
          of Karnataka (CLIK), India Electronics & Semiconductor Association
          (IESA), NSIC and ARM Connected Community.
        </p>
      </div>

      <Services />
    </div>
  );
}
