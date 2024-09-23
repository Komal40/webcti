import React, { useRef } from "react";
import compLine from "../Images/compLine.png";
import ce from "../Images/ce.jpg";
import iso from "../Images/iso.jpg";
import rohs from "../Images/rohs.jpg";
import "./Certificate.css";
import { Link } from "react-router-dom";
import iec from '../Images/iec.jpg';
import zedBronze from '../Images/Zed-Bronze.jpg';
import startup from '../Images/startup.jpg';
import msme from '../Images/msme.jpg';
import ic from '../Images/incorporation_certificate.jpg';


export default function Certificates() {
  const teamRef = useRef(null);

  const scrollLeft = () => {
    teamRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
  };

  const scrollRight = () => {
    teamRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
  };

  return (
    <section id="certificates">
      <div>
        <div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Our Certificates</strong>
            </h2>
            <img src={compLine} />
          </div>
        </div>
      </div>
      <div className="iotSol__text">
        <p style={{ marginTop: "3%" }}>
          At Cellus Tech India, we prioritize quality and compliance. Our
          products meet the highest industry benchmarks, validated by ISO, CE
          and RoHS certifications. We uphold these standards to ensure the
          utmost reliability, safety, and environmental responsibility in all
          our offerings.
        </p>
      </div>

      <div className="text_img" ref={teamRef}>
        <div className="certificate__data">
          <div className="certificate__text">
            {/* <p style={{color:'black', fontFamily:'Poppins', fontWeight:'600'}}>At Cellus Tech India, we prioritize quality and compliance. Our products meet the highest industry benchmarks, validated by CE, ISO, and RoHS certifications. We uphold these standards to ensure the utmost reliability, safety, and environmental responsibility in all our offerings.</p> */}
          </div>

          <div className="certificate__img" >
            <div className="certificate__left">
              <h4 style={{ fontWeight: "600" }}>ISO</h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={iso}
                target="_blank"
              >
                <img src={iso} />
              </a>
            </div>


            <div className="certificate__left">
              <h4 style={{ fontWeight: "600" }}>IEC</h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={iec}
                target="_blank"
              >
                <img src={iec} />
              </a>
            </div>

            <div className="certificate__left">
              <h4 style={{ fontWeight: "600" }}>ZED BRONZE</h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={zedBronze}
                target="_blank"
              >
                <img src={zedBronze} />
              </a>
            </div>

            <div className="certificate__left">
              <h4 style={{ fontWeight: "600" }}>startup 
              </h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={startup}
                target="_blank"
              >
                <img src={startup} />
              </a>
            </div>

            <div className="certificate__left">
              <h4 style={{ fontWeight: "600" }}>MSME</h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={msme}
                target="_blank"
              >
                <img src={msme} />
              </a>
            </div>

            <div className="certificate__left">
              <h4 style={{ fontWeight: "600" }}>Incorporation</h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={ic}
                target="_blank"
              >
                <img src={ic} />
              </a>
            </div>


            <div className="certificate__right">
              <h4 style={{ fontWeight: "600" }}>CE</h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={ce}
                target="_blank"
              >
                <img src={ce} />
              </a>
            </div>

            <div className="certificate__mid">
              <h4 style={{ fontWeight: "600" }}>RoHS</h4>
              <a
                style={{ color: "var(--color-primary)" }}
                href={rohs}
                target="_blank"
              >
                <img src={rohs} />
              </a>
            </div>
          </div>
        </div>
        <button className="scroll-cert-btn left" onClick={scrollLeft}>{'<'}</button>
        <button className="scroll-cert-btn right" onClick={scrollRight}>{'>'}</button>
      </div>

      <div className="cert_btn">
        <Link to="/certificates">
          <button className="btn btn-primary" style={{ margin: "auto" }}>
            View More{" "}
          </button>
        </Link>
      </div>
    </section>
  );
}
