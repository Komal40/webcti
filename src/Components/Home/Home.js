import React from "react";
import "./Home.css";
import img1 from "../Images/amazon.png";
import img2 from "../Images/flipkart.png";
import img3 from "../Images/orange.png";
import img4 from "../Images/shop.png";
import img5 from "../Images/paytm.png";
import img6 from "../Images/meesho.png";
import iot from "../Images/iot.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Home() {

  const scrollToTop=()=>{
    window.scrollTo(0,0);
  }

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
      <div id="container">
        <div id="home">
          <div className="home__heading">
            <h1 style={{ fontSize: "2.4rem" }}>Welcome To</h1>
            <h1
              style={{
                color: "var(--color-primary)",
                fontSize: "4rem",
                marginTop: "-1rem",
                fontWeight:'520',
                             
              }}
            >
              CELLUS TECH INDIA
            </h1>
            {/* <h2>A Symbol of Technical Excellence</h2> */}
            <p>A Symbol of Technical Excellence...</p>
          </div>

          <div className="home__products">
            <div className="mleft">
              <p >Available on : </p>
              <div className="img__wrapper">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
              </div>
            </div>

            <div className="mright">
              <HashLink to='/products' smooth onClick={scrollToTop}>
              <button> Our Products</button>
              </HashLink>
              
            </div>
          </div>
        </div>
        <div className="home__iot">
          <img src={iot} />
        </div>
      </div>

      <div className="below_div"></div>
    </>
  );
}
