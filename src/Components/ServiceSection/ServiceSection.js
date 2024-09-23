import React from "react";
import { content } from "./Content.js";
import "./ServiceSection.css";

export default function ServiceSection() {
  return (
    <>
      <div id="consult_services">
        <div className="auto__head" style={{ margin: "auto" }}>
          <div className="auto__heading">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ color: "var(--color-primary)" }}>OUR </span>
              SERVICES
            </h2>
          </div>
          <div className="auto__para">
            <p>
              Explore a wide range of top-quality solutions, from advanced
              lighting options to energy-efficient solar panels. Specializing in AUTOSAR Migration,
              Integration, and cybersecurity solutions, we ensure excellence in
              every aspect of your needs.
            </p>
          </div>
        </div>

        <div className="cardcontent">
          {content.map((item) => (
            <div
              class="card card2"
              style={{
                marginTop: "1.3rem",
                // marginLeft: "3rem",
                margin: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "max-content",
                overflow: "hidden",
                width: "18rem",
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
              key={item.id}
            >
              <div class="card-body">
                <img
                  src={item.bulb}
                  alt="logo"
                  style={{
                    display: "flex",
                    margin: "1rem auto",
                    filter: "invert(100%)",
                    height: "2.5em",
                    backgroundColor: "tint(white, 100%)",
                  }}
                />
                {/* <i class="fa fa-lightbulb-o"></i> */}
                <h5
                  class="card-title"
                  style={{ textAlign: "center", marginBottom: "1rem" }}
                >
                  <strong>{item.heading}</strong>
                </h5>
                <p class="card-text" style={{ textAlign: "left" }}>
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
