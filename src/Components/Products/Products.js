import React, { useState } from "react";
import "./Products.css";
import compLine from "../Images/compLine.png";
import { Link } from "react-router-dom";

export default function Products() {
  const arr = [
    {
      id: 1,
      category: "IIOT Services",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMpAC04VC2j4DEsGEyKNcTxcOnzM_QUYFfw&usqp=CAU",
    },
    {
      id: 2,
      category: "IIOT Services",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/iiot.jpg",
    },
    {
      id: 3,
      category: "Lightning",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/01.jpg",
    },
    {
      id: 4,
      category: "Lightning",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/011.jpg",
    },
    {
      id: 5,
      category: "Lightning",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/02.jpg",
    },
    {
      id: 6,
      category: "IIOT Services",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/08.jpg",
    },
    {
      id: 7,
      category: "IIOT Services",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/04.jpg",
    },
    {
      id: 8,
      category: "Refrigeration",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/04.jpg",
    },
    {
      id: 9,
      category: "Refrigeration",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/05.jpg",
    },
    {
      id: 10,
      category: "Refrigeration",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/tube_ice_plant.jpg",
    },
    {
      id: 11,
      category: "Refrigeration",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/09.jpg",
    },
    {
      id: 12,
      category: "IIOT Services",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/03-preview.jpg",
    },
    {
      id: 13,
      category: "IIOT Services",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/07.jpg",
    },
    {
      id: 14,
      category: "Ice",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/010.jpg",
    },
    {
      id: 15,
      category: "Lightning",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/13.jpg",
    },
    {
      id: 16,
      category: "Lightning",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/14.jpg",
    },
    {
      id: 17,
      category: "IIOT Services",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/15.jpg",
    },
    {
      id: 18,
      category: "Ice",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/electrical-turnkey.jpg",
    },
    {
      id: 19,
      category: "Ice",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/solar-turnkey.jpg",
    },
    {
      id: 20,
      category: "Turnkey",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/industrial-solar.jpeg",
    },
    {
      id: 21,
      category: "Turnkey",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/solar-parking.jpg",
    },
    {
      id: 22,
      category: "Turnkey",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/residential-solar.jpg",
    },
    {
      id: 23,
      category: "Turnkey",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/water-heater.jpg",
    },

    {
      id: 24,
      category: "Non-Renewable",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/streetlight.jpg",
    },

    {
      id: 25,
      category: "Renewable",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/cat-genset.jpeg",
    },

    {
      id: 26,
      category: "Renewable",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/transformer.png",
    },

    {
      id: 27,
      category: "Non-Renewable",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/Earthing.jpg",
    },
    {
      id: 28,
      category: "Non-Renewable",
      desc: "Emburse Cards Dashboard the Card will show two lines, but only the first and last name of the assigned cardholder will print on the card",
      src: "https://www.cellustechindia.com/img/electrical-panel.png",
    },
  ];

  const handleProductClick = (selectedProduct) => {
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    console.log("Selected Product:", selectedProduct);
  };

  const [items, subItems] = useState(arr);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (catItems) => {
    const updatedItems = arr.filter((ele) => ele.category === catItems);
    subItems(updatedItems);
    setActiveButton(catItems);
  };

  return (
    <div id="ele_products">
      <div>
        {/* <h2 className="heading_products">Our Products</h2> */}
        <div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Our Products</strong>
            </h2>
            {/* <img src={compLine} style={{ width: "30rem" }} /> */}
          </div>
        </div>

        <div className="iotSol__text">
          <p>
            Our products are also available at amazon.in , flipkart.com,
            snapdeal.com, shopclues.com, meesho.com and paytm.com for online
            selling.
          </p>
        </div>

        {/* <div className="button_products">
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === null ? "active" : ""
            }`}
            onClick={() => {
              subItems(arr);
              setActiveButton(null);
            }}
          >
            All
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === "IIOT Services" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("IIOT Services")}
          >
            IIOT Services
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === "Lightning" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Lightning")}
          >
            LED Lightning Products
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === "Refrigeration" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Refrigeration")}
          >
            Refrigeration Machines
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === "Ice" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Ice")}

          >
            Ice cube Making Machines
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === "Turnkey" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Turnkey")}

          >
            Turnkey Project
          </button>


          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === "Renewable" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Renewable")}
          >
            Renewable Energy
          </button>




          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeButton === "Non-Renewable" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Non-Renewable")}
          >
            Non-Renewable Energy
          </button>


          
        </div>  */}

        <div className="products">
          {items.map((item) => (
            <div className="card " key={item.id}>
              <img
                style={{ height: "14rem", width: "18rem" }}
                src={item.src}
                className="card-img-top"
                alt={item.category}
                // onClick={() => handleProductClick(item)}
              />
              <div className="overlay">
                <h5 style={{ fontWeight: "900" }}>{item.category}</h5>
                <Link to="/product">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleProductClick(item)}
                  >
                    <strong>+</strong>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
