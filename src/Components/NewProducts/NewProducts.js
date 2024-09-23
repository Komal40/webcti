import React, { useRef } from 'react'
import compLine from "../Images/compLine.png";
import auto from '../Images/auto_products.jpg';
import iiot from '../Images/iiot_product.jpg';
import home from '../Images/home_product.jpg';
import bulb from '../Images/bulb.avif';
import ice from '../Images/ice.jpg';
import bulb2 from '../Images/bulb2.jpg';
import flake from '../Images/flake.webp';
import leds from '../Images/leds.jpg';
import icemaking from '../Images/icemaking.jpg';
import water from '../Images/water_purify.jpg';
import electric from '../Images/electric.jpg';
import transformer from '../Images/transformer.jpg';
import diesel from '../Images/diesel.jpg';
import street from '../Images/street.jpg';
import waterheater from '../Images/waterheater.jpg';
import solarpump from '../Images/solarpump.jpeg';
import industrialsolar from '../Images/industrialsolar.jpg';
import electricturnkey from '../Images/electricturnkey.jpeg';
import solarturnkey from '../Images/solarturnkey.jpg';
import industryled from '../Images/industryled.jpg'
import ice2 from '../Images/ice2.jpg'
import ep from '../Images/ep.png'
import embed from '../Images/embed.jpeg';
import sp from '../Images/sp.jpg'
import cled from '../Images/cled.jpg'
import whirlpool from '../Images/whirlpool.jpg'
import './NewProducts.css'
import ref1 from '../Images/ref.jpg'
import solarpanel from '../Images/solarpanel.jpg'
import defreeze from '../Images/defreeze.jpg'
import icee from '../Images/icee.jpg'
import ledcl from '../Images/ledcl.jpg'
import ctiled from '../Images/ctiled.jpg'
import { Link } from 'react-router-dom';
import indus_led from '../Images/indcti.jpeg'
import indus_smart_led from '../Images/indus_smart_led.jpg'
import dom_smart from '../Images/dom_smart.jpg'
import ProductDetails from '../Products/ProductDetails';
import retrofit from '../Images/retrofit.jpg'
import tp from '../Images/tp.jpg'
import smartmotorcont from '../Images/smartmotorcont.avif'
import smartambient from '../Images/smartambient.jpg'
import simulator from '../Images/simulators.jpeg'
import tt from '../Images/testtools.jpg'
import smartwater from '../Images/smartwatermotoring.jpg'
import streetlight from '../Images/streetlight.jpg'
import homeauto from '../Images/homeautomation.jpg'
import light from '../Images/smartlight.jpg'
import ledlight from '../Images/ledlight.jpg'
import smartmotor from '../Images/smartmotor.jpg'
import asl from '../Images/smartledcti.jpeg'
import tube from '../Images/cttii.jpeg'
import hw from '../Images/meter.jpeg'
import solarstreetlight from '../Images/solarstreetlight.jpeg'
import grpleds from '../Images/grpleds.jpg'
import indus from '../Images/in.jpeg'
import starter from '../Images/starter.jpeg'


const NewProducts=()=> {
    const arr = [
        // {
        //   id: 1,
        //   category: "Autosar",
        //   desc: "Multi-Core Safe Operating System and Autosar Classic Platform Consulting",
        //   // src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMpAC04VC2j4DEsGEyKNcTxcOnzM_QUYFfw&usqp=CAU",
        //   src:auto
        // },
        // {
        //   id: 2,
        //   category: "IIoT Services",
        //   desc: "We delivers IIoT solutions for asset tracking, machine monitoring and more for various industries.",
        //   // src: "https://www.cellustechindia.com/img/iiot.jpg",
        //   src:iiot
        // },
        {
          id: 16,
          category: "LED Lightning",
          desc: "Energy-efficient, customizable color temperature, eco-friendly, and provides bright, flicker-free illumination for various applications.",
          src: ledlight,
        },
        {
          id: 3,
          category: "Home Automation",
          desc: "Discover the future of living with our smart home automation solutions. Control lighting, climate, security, and more for ultimate convenience.",
          src: home,
        },
        // {
        //   id: 4,
        //   category: "Lightning",
        //   desc: "Empowering users with intuitive interface, real-time updates, advanced analytics, security, multi-platform support, and personalized support.",
        //   src: bulb,
        //   src:'https://img.freepik.com/free-vector/realistic-led-lamps-set_1284-14396.jpg?size=626&ext=jpg&ga=GA1.1.1069087199.1699256867&semt=ais'
        // },
        {
          id: 10,
          category: "Tube and Flake Ice Plant",
          desc: "High ice production, energy-efficient, automated controls, stainless steel construction, easy maintenance, and customizable sizing options.",
          src: flake,
        },
        // {
        //   id: 11,
        //   category: "Defreezer",
        //   desc: " Rapid thawing, adjustable temperature settings, energy efficiency, durable construction, and easy-to-clean surfaces for efficient and convenient defrosting.",
        //   src: defreeze,
        // },
        // {
        //   id: 12,
        //   category: "Solar Panel",
        //   desc: "High efficiency, durable construction, weather resistance, grid-tied or off-grid options, and easy installation for sustainable energy generation.",
        //   src: solarpanel,
        // },
        // {
        //   id: 5,
        //   category: "Embedded Services",
        //   desc: "Empowering users with intuitive interface, real-time updates, advanced analytics, security, multi-platform support, and personalized support.",
        //   src: embed
        // },
        // {
        //   id: 6,
        //   category: "Light",
        //   desc: "Features include real-time updates, advanced analytics, security, integration, collaboration, automation, and dedicated support for enhanced user experience.",
        //   src: cled,
        // },
        // {
        //     id:7,
        // category:'Smart Lightning',
        // desc:'Enhance your experience with features like intuitive design, customization, real-time updates, advanced analytics, robust security, seamless integration, and personalized support.',
        //     src:industryled
        // },
        // {
        //   id: 8,
        //   category: "Ice Cube Making machine",
        //   desc: "Include precise temperature control, energy efficiency, spacious compartments",
        //   //  adjustable shelving and advanced defrosting.",
        //   // src: "https://www.cellustechindia.com/img/04.jpg",
        //   src:ice2
        // },
        // {
        //   id: 9,
        //   category: "Ice Cube Making machine",
        //   desc: "Small, frozen, typically cube-shaped pieces of ice used to cool beverages and preserve perishable items.",
        //   src: whirlpool
        // },
       
        // {
        //   id: 13,
        //   category: "Water Purifier",
        //   desc: " Advanced filtration, UV sterilization, multi-stage purification, energy efficiency, compact design, easy maintenance, and enhanced taste for clean drinking water.",
        //   src: water,
        // },
        // {
        //   id: 14,
        //   category: "Ice cubes",
        //   desc: "Ice cubes are small, frozen, typically cube-shaped pieces of ice used to cool beverages and preserve perishable items.",
        //   src: icee,
        // },
        // {
        //   id: 15,
        //   category: "Lightning",
        //   desc: "Energy-efficient, long-lasting, low heat emission, and cost-effective illumination solution.",
        //   src: leds
        // },
       
        // {
        //   id: 17,
        //   category: "LED Concealed Light",
        //   desc: "Sleek design, energy-efficient, customizable brightness, long lifespan, easy installation, and provides seamless, hidden illumination for modern interiors.",
        //   src: ledcl,
        // },
        {
          id: 18,
          category: "Electrical Turnkey",
          desc: "Project management, design, installation, testing, and commissioning services for hassle-free, efficient electrical systems implementation.",
          src: electricturnkey,
        },
        // {
        //   id: 19,
        //   category: "Solar Turnkey",
        //   desc: "End-to-end solar solutions, including design, installation, permits, and grid connection, for a seamless and efficient solar energy system.",
        //   src: solarturnkey,
        // },
        // {
        //   id: 20,
        //   category: "Industrial Solar Solution",
        //   // "Renewable",
        //   desc: "Scalable designs, advanced solar panels, monitoring systems, and tailored financing options for sustainable energy production.",
        //   src: industrialsolar,
        // },
        // {
        //   id: 21,
        //   category: "Turnkey",
        //   desc: "Encompass complete project management, from design and procurement to installation, commissioning, and handover, ensuring hassle-free implementation.",
        //   src: sp,
        // },
        // {
        //   id: 22,
        //   category: "Solar Water Pump",
        //   // "Turnkey",
        //   desc: "Harnesses sunlight, energy-efficient, low maintenance, reliable, eco-friendly, suitable for remote areas, and provides sustainable water supply for various applications.",
        //   src:solarpump
        // },
        // {
        //   id: 23,
        //   category:"Solar Water Heater",
        //   // "Renewable" 
        //   desc: "Utilizes sunlight for heating, energy-efficient, reduces electricity bills, eco-friendly, reliable, and provides hot water for domestic use.",
        //   src: waterheater,
        // },
        // {
        //   id: 24,
        //   category: "Solar Street Light",
        //   // "Renewable",
        //   desc: "Harnesses solar energy, energy-efficient LED, automatic dusk-to-dawn operation, low maintenance, durable, and provides eco-friendly outdoor lighting solution.",
        //   src: street,
        // },
    
        // {
        //   id: 25,
        //   category: "CAT Silent Diesel generator",
        //   // "Non Renewable",
        //   desc: "Robust build, low noise emission, high fuel efficiency, reliable power output, advanced control panel, and easy maintenance.",
        //   src: diesel,
        // },
    
        // {
        //   id: 26,
        //   category: "Transformer ",
        //   // "Non Renewable "
        //   desc: "Converts voltage levels, efficient power transfer, reliable performance, durable construction, safety measures, and supports various electrical applications in industries.",
        //   src: transformer
        // },
    
        // {
        //   id: 27,
        //   category:" Electrolytic Earthing Solution",
        //   //  "Non-Renewable ",
        //   desc: "Ensures low resistance, long-lasting, corrosion-resistant, reliable grounding, and enhanced electrical safety for industrial applications.",
        //   src: electric
        // },
        // {
        //   id: 28,
        //   category:"Electrical Panel",
        //   //  "Non-Renewable",
        //   desc: "Centralized control, circuit protection, customizable configurations, safety features, and efficient power management for industrial and commercial applications.",
        //   src: ep,
        // },
      ];

    const led=[
      {
        id:1,
        category:'Industrial Ordinary LED Lights',
        desc:' Durable, and eco-friendly. Superior illumination for industrial spaces, with customizable options.',
        src:indus_led
      },
      {
        id:2,
        category:'Industrial Smart LED Lights',
        desc:' Tailor lighting for productivity in industrial spaces, promoting sustainability and performance',
        // src:indus_smart_led
        src:indus
      },
      {
        id:3,
        category:'Domestic Ordinary LED Lights',
        desc:'Customizable, Illuminate spaces with brilliance, promoting energy savings and comfort.',
        src:tube
      },
      {
        id:4,
        category:'Domestic Smart LED Lights',
        desc:'Innovative, energy-efficient, and customizable. Intelligent lighting for comfort and efficiency.',
        src:dom_smart
      }
    ]


    const homeAuto=[
      {
        id:1,
        category:'Retrofit',
        desc:' Upgrade existing setups seamlessly with our efficient and customizable technology. Elevate performance, reduce costs, and enhance sustainability.',
        src:retrofit
      },
      {
        id:2,
        category:'Touch Panel',
        desc:'Intuitive control at your fingertips. Elevate user experience with responsive touch technology. Effortlessly manage systems for enhanced convenience.',
        src:tp
      }
    ]

    const smartfarming=[
      {
        id:1,
        category:'Smart Motor Controller',
        desc:'Enhance agricultural efficiency with intelligent control. Optimize farming devices, reduce energy consumption, and boost productivity seamlessly.',
        src:starter
      },
      {
        id:2,
        category:'Smart Ambient Controller Condition',
        desc:' Elevate environmental control. Optimize conditions seamlessly for enhanced comfort, efficiency, and sustainability in various settings.',
        src:smartambient
      }
    ]

    const automotive=[
      {
        id:1,
        category:'Simulators',
        desc:'Precision simulators for hardware testing. Elevate automotive performance and reliability with advanced tools for comprehensive testing and analysis.',
        src:simulator
      },
      {
        id:2,
        category:'Testing Tools',
        desc:'Precision hardware for comprehensive testing. Elevate automotive performance, reliability, and efficiency with advanced tools for seamless analysis.',
        src:hw
      }
    ]


    const smartcity=[
      {
        id:1,
        category:'Smart Water Monitoring',
        desc:'Efficient water management through advanced IoT technology for smart monitoring.',
        src:smartwater
      },
      {
        id:2,
        category:'Automated Street Lightning',
        desc:'Intelligent street lighting solutions for safer and energy-efficient urban environments.',
        src:asl
      },
      {
        id:3,
        category:'Home Automation',
        desc:'Transform your living space with cutting-edge home automation solutions.',
        src:homeauto
      },
      {
        id:4,
        category:'Smart Traffic Lightning System',
        desc:'Revolutionizing traffic control with smart, energy-efficient lighting solutions for cities.',
        src:light
      }
    ]


    const solar=[
      {
        id:1,
        category:'Solar Water Heater',
        desc:'Utilizes sunlight for heating, energy-efficient, reduces electricity bills, eco-friendly, reliable, and provides hot water for domestic use.',
        src:waterheater
      },
      {
        id:2,
        category:'Solar Street Light',
        desc:'Harnesses solar energy, automatic dusk-to-dawn operation, durable, and provides eco-friendly outdoor lighting solution.',
        src:solarstreetlight
      },
      {
        id:3,
        category:'Solar Turnkey',
        desc:'End-to-end solar solutions, including design, installation, permits, and grid connection, for a seamless and efficient solar energy system.',
        src:solarturnkey
      },
      // {
      //   id:4,
      //   category:'Solar Water Pump',
      //   desc:'Harnesses sunlight, energy-efficient, low maintenance, reliable, eco-friendly, suitable for remote areas, and provides sustainable water supply for various applications.',
      //   src:solarpump
      // },
      {
        id: 5,
        category: "Industrial Solar Solution",
        // "Renewable",
        desc: "Scalable designs, advanced solar panels, monitoring systems, and tailored financing options for sustainable energy production.",
        src: industrialsolar,
      },
    ]

    
      const handleProductClick = (selectedProduct) => {
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        console.log('Selected Product:', selectedProduct);
      };

      const ledLightsRef = useRef(null);

      const scrollToSection = (sectionId) => {
        if (sectionId === 'led_lights' && ledLightsRef.current) {
          ledLightsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      

  return (
    <>
    <div className='newproduct__parent'>
         <div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Our Products</strong>
            </h2>
            <img src={compLine}  />
          </div>
       
        </div>

        <div
        style={{marginLeft:'2rem'}}
        ><button className='btn btn-secondary'>Go To Store</button></div>

        <div className="iotSol__text">
          <p style={{marginTop:'2.5%'}}>
          Our products are also available at amazon.in , flipkart.com, snapdeal.com, shopclues.com, meesho.com and paytm.com for online selling.
          </p>
        </div>

    <div className='newproduct__main'>
    {
        arr.map((item)=>(
            <div class="card" style={{width: "18rem", height:'32rem'}}>
            <img class="card-img-top" src={item.src} alt="Card image cap" style={{height:'15rem'}}/>
            <div class="card-body">
              <h5 class="card-title">{item.category}</h5>
              <p class="card-text">{item.desc}</p>
              <Link to='/product'>
              <button  class="btn btn-primary" onClick={() => handleProductClick(item)}>Know More</button>
              </Link>
            </div>
          </div>
        ))
    }
    </div>
    </div>

<section  id='led_lights' ref={ledLightsRef}>
<div className='led_items'>
  {/* <h2>LED Lights</h2> */}
  <div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>LED Lightning</strong>
            </h2>
            <img src={compLine} style={{objectFit:'cover'}}/>
          </div>
        </div>

  <div className='newproduct__main'>
    {
        led.map((item)=>(
            <div class="card" style={{width: "18rem", height:'32rem'}}>
            <img class="card-img-top" src={item.src} alt="Card image cap" style={{height:'15rem'}}/>
            <div class="card-body">
              <h5 class="card-title">{item.category}</h5>
              <p class="card-text">{item.desc}</p>
              <Link to='/product'>
              <button  class="btn btn-primary" onClick={() => handleProductClick(item)}>Know More</button>
              </Link>
            </div>
          </div>
        ))
    }
    </div>

</div>
</section>

<section id='home_automation'>
<div className='home_auto_section' >
<div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Home Automation</strong>
            </h2>
            <img src={compLine}  />
          </div>
        </div>
        <div class="card-deck" > 
{
homeAuto.map((item)=>(

  <div class="card" style={{margin:'3rem'}}> 
      <img class="card-img-top" src={item.src} alt="Card image cap" style={{height:'20rem'}}/> 
      <div class="card-block"> 
          <h4 class="card-title" >{item.category}</h4> 
          <p class="card-text" > 
              {item.desc} 
          </p> 
          <Link to='/product'>
              <button  class="btn btn-primary" onClick={() => handleProductClick(item)}>Know More</button>
          </Link>
      </div> 
  </div> 

))
}
</div>
</div>
</section>

<section id='smart_farming'>
<div className='smart_farming' >
<div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Smart Farming Devices</strong>
            </h2>
            <img src={compLine} style={{objectFit:'cover'}}/>
          </div>
        </div>

        <div class="card-deck" > 
{
smartfarming.map((item)=>(

  <div class="card" style={{margin:'3rem'}}> 
      <img class="card-img-top" src={item.src} alt="Card image cap" style={{height:'20rem'}}/> 
      <div class="card-block"> 
          <h4 class="card-title" >{item.category}</h4> 
          <p class="card-text" > 
              {item.desc} 
          </p> 
          <Link to='/product'>
              <button  class="btn btn-primary" onClick={() => handleProductClick(item)}>Know More</button>
          </Link>
      </div> 
  </div> 

))
}
</div>
</div>
</section>

<section  id='solar_smart'>
<div className='led_items'>
  {/* <h2>LED Lights</h2> */}
  <div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              {/* <strong>Sun Wise Hub</strong> */}
              <strong>Turnkey Projects</strong>
            </h2>
            <img src={compLine}  />
          </div>
        </div>

  <div className='newproduct__main'>
    {
        solar.map((item)=>(
            <div class="card" style={{width: "18rem", height:'32rem'}}>
            <img class="card-img-top" src={item.src} alt="Card image cap" style={{height:'15rem'}}/>
            <div class="card-body">
              <h5 class="card-title">{item.category}</h5>
              <p class="card-text">{item.desc}</p>
              <Link to='/product'>
              <button  class="btn btn-primary" onClick={() => handleProductClick(item)}>Know More</button>
              </Link>
            </div>
          </div>
        ))
    }
    </div>

</div>
</section>

<section id='smart_city'>
<div className='led_items'>
  {/* <h2>LED Lights</h2> */}
  <div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Smart City Projects</strong>
            </h2>
            <img src={compLine}  />
          </div>
        </div>

  <div className='newproduct__main'>
    {
        smartcity.map((item)=>(
            <div class="card" style={{width: "18rem", height:'32rem'}}>
            <img class="card-img-top" src={item.src} alt="Card image cap" style={{height:'15rem'}}/>
            <div class="card-body">
              <h5 class="card-title">{item.category}</h5>
              <p class="card-text">{item.desc}</p>
              <Link to='/product'>
              <button  class="btn btn-primary" onClick={() => handleProductClick(item)}>Know More</button>
              </Link>
            </div>
          </div>
        ))
    }
    </div>

</div>
</section>

<section id='hardware'>
<div className='hardware_tools' >
<div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Automotive Instruments</strong>
            </h2>
            <img src={compLine}/>
          </div>
        </div>

        <div class="card-deck" > 
{
automotive.map((item)=>(

  <div class="card" style={{margin:'3rem'}}> 
      <img class="card-img-top" src={item.src} alt="Card image cap" style={{height:'20rem', objectFit:'cover'}}/> 
      <div class="card-block"> 
          <h4 class="card-title" >{item.category}</h4> 
          <p class="card-text" > 
              {item.desc} 
          </p> 
          <Link to='/product'>
              <button  class="btn btn-primary" onClick={() => handleProductClick(item)}>Know More</button>
          </Link>
      </div> 
  </div> 

))
}
</div>
</div>
</section>
</>
  )
}

export default NewProducts