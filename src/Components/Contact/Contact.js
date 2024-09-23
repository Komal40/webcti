import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import compLine from "../Images/compLine.png";


export default function Contact() {
  return (
    <>
      <div id="contact_parent">
        <div class="gmap">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.670943541108!2d76.80228785036532!3d28.126056282535068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d49db6bf5b8f5%3A0x2afd37fb013ca6d4!2sCELLUS%20TECH%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1578663789150!5m2!1sen!2sin"
            loading="lazy"
            className="embed-responsive-item"
          ></iframe>

          {/* <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!4v1703144747336!6m8!1m7!1s5hLN07_ZOyWbQ02DYM6ntg!2m2!1d28.12608213264268!2d76.80481133889633!3f25.99!4f4.430000000000007!5f0.7820865974627469"
            loading="lazy"
            className="embed-responsive-item"
          ></iframe> */}
        </div>

        <div className="contact_details">
          <h3>Contact Info</h3>
          <img src={compLine} style={{ width: "17rem" }} />
          <br />
          <div class="space"></div>
          <p style={{ color: "black" }}>
            <i class="fa fa-building-o fa-fw pull-left fa-2x"></i>Cellus Tech
            India Pvt. Ltd.
            <br />
            <br />
            <strong>Corp. Office(Factory)</strong>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            H1-326, RIICO Industrial Area, Khuskhera,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Bhiwadi, Distt.- Alwar(Rajasthan)-301707 (IN)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            +91 1493-452877
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <hr />
          <strong>Regd. Office</strong>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          365, Rohnat, Bhiwani, Haryana-127035 (IN)
          <br />
          <hr />
          <strong>R&D Centre</strong>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Office No: B2, Raghubir Market,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near
          Canara Bank, Tapukara, Bhiwadi,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distt:
          Alwar, Rajasthan-301707 (IN)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <BsTelephoneFill style={{ marginRight: "1em" }} />
          +91 1493-472877
          <p></p>
          <div class="space"></div>
          <p style={{ color: "black" }}>
            {/* <i class="fa fa-envelope-o fa-fw pull-left fa-2x"></i> */}
            <FiMail style={{ marginRight: "1em" }} />
            info@cellustechindia.com
          </p>
          <div class="space"></div>
          {/* <p style={{ color: "black" }}>
            {/* <i class="fa fa-phone fa-fw pull-left fa-2x"></i> */}
          {/* <BsTelephoneFill style={{ marginRight: "1em" }} /> */}
          {/* +91 1493-452877 
            +91 9468375467
            <br />
          </p> */}
          <p style={{ color: "black" }}>
            {/* <i class="fa fa-phone fa-fw pull-left fa-2x"></i> */}
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            +91 9416922877
            <br />
          </p>
          <p>
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            {/* +91 1493-472877
            +91 9468375467 */}
            +91 9034752777
          </p>
        </div>
      </div>
    </>
  );
}
