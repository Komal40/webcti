import React from "react";
import img1 from "../imgs/services/check.webp";
import img6 from "../imgs/services/choose2.png";
import img5 from "../imgs/services/about3.png";
import compLine from "../Images/compLine.png";
import about2 from "../Images/abouut.png";
import about from "../Images/about_us.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <div class="ds-organise" style={{ margin: "4rem" }}>
        <div class="organise-item">
          <div class="o-i-left reveal-top">
            <ol start="1">
              <li style={{ listStyle: "none" }}>About Us</li>
            </ol>
            <div className="iotSol__head">
              <div className="iotSol__headImg1">
                {/* <img src={compLine} style={{ width: "20rem", marginTop:'-7rem' }} /> */}
              </div>
            </div>
            <h1 style={{ marginTop: "-6rem", fontWeight: "400" }}>
              Since our establishment in 2014, we have positioned ourselves as a
              trailblazer in the technology landscape, specializing in embedded
              software solutions across diverse industries. Our expertise spans
              Automotive ECUs with a keen focus on AUTOSAR compliance,
              reflecting our commitment to driving innovation in the automotive
              sector.As we celebrate our 10th anniversary, we're grateful for the journey and look forward to shaping the future of technology.

              <br /><br/>
              In Smart Farming and Smart City domains, we optimize agricultural
              practices and urban ecosystems, respectively, employing advanced
              embedded software to enhance efficiency and sustainability. We
              extend our influence to LED lighting, HVAC systems, Cooling and
              Storage solutions, Solar Lighting Systems, Irrigation Solutions,
              Greenhouses, STP Automation, Industrial Automation, Motor Drives,
              Automation for Assembly Lines, and Vehicle Fitness Testing &
              Automation.
              <br /><br/>
              Our solutions empower industries by combining cutting-edge
              technology with precision engineering, ensuring seamless
              integration and optimal performance. Whether it's enhancing energy
              efficiency in LED lighting, enabling precise climate control in
              HVAC, or automating assembly lines, our embedded software
              solutions are at the forefront of driving advancements. Through
              our commitment to excellence and innovation, we continue to shape
              the future of multiple domains, delivering state-of-the-art
              solutions that elevate industry standards and contribute to a more
              connected, efficient, and sustainable world.
              <br />
              <br />
              {/* In addition to our cutting-edge products, we pride ourselves on a commitment to unparalleled customer service. We consider the journey with our clients to extend far beyond the sale, placing utmost importance on lasting relationships. This dedication is woven into our DNA, ensuring that our customers receive unwavering support and expertise, fostering a reputation of excellence that defines CELLUS TECH INDIA in the industry. */}
            </h1>

            {/* <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
              We resolve to provide outstanding service before and after the sale, and take pride in maintaining long term relationships with our customers.
              </h2>
            </div> */}

            {/*                 
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                We are specialized in Visa application for different countries.
              </h2>
            </div>
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                Our motto is to give you the reliable and satisfactory service
                for your visa application.
              </h2>
            </div>
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                We have a team of visa experts who are specialized in filing
                applications for different countries as per the criteria.
              </h2>
            </div>
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                We have Knowledge about the application for most of the
                Countries to apply for your application.
              </h2>
            </div> */}
          </div>
          <div class="o-i-right reveal-top">
            {/* <img src={img5} style={{scale: '0.8'}}/> */}

            <img src={about} />
          </div>
        </div>
        <div class="organise-item-rev">
          <div class="o-i-right-smaller reveal-top">
            {/* <img src={img6}/> */}

            <img src={about2} />
          </div>
          <div class="o-i-left reveal-top">
            <ol start="2">
              <li>Why Choose Us</li>
            </ol>
            {/* <!-- <h3 class="reveal-top">Day 1: Understand and select</h3> --> */}
            <h2
              class="reveal-top"
              style={{ color: "black", fontWeight: "400" }}
            >
              <br />
              <br />
              The mission of CELLUS TECH INDIA is deeply rooted in our
              aspiration to become the premier provider of cutting-edge,
              high-quality lighting solutions tailored for industrial and
              high-performance applications. We dedicate ourselves to setting
              new benchmarks in the industry, delivering excellence for the
              commercial, municipal, and utility sectors. Our unwavering
              commitment extends across the entire customer journey, from
              pre-sales inquiries to post-purchase support. This commitment is
              evident in the enduring relationships we cultivate with our
              customers. We take immense pride in being a trusted partner in
              their industrial endeavors, always striving to exceed
              expectations.
              <br />
              <br />
              <br />
              <br /> At CELLUS TECH INDIA, we don't just provide illumination;
              we illuminate the path toward enduring partnerships and mutual
              success. Our focus on industrial and high-quality products
              underscores our dedication to delivering lighting solutions that
              not only meet but exceed the rigorous demands of the modern
              industrial landscape.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
