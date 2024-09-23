import React from 'react'
import './Footer.css'
import logo from '../Images/ctiskaiologo.png'
import call from "../imgs/home/call.png"
import mail from "../imgs/home/mail.png"
import ctii from '../Images/ctii.png'
import whts from "../imgs/home/whats.png"
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'


export default function Footer() {

  const toggleMenus = () => {
    window.scrollTo(0, 0);
  };

  return (
<>
<div class="footer-container">
        <div class="footer-top" >
            <div class="mainmf-c-1" >
                <img src={ctii} style={{backgroundColor: '#00000000', height:"80px", marginLeft:'3em'}} />
                <h3>CELLUS TECH INDIA is all LED lighting, innovative technology and solution provider company with the focus on smart IoT based energy efficient devices. LED based lighting system and energy conservation. The company envisages a green future by embracing innovative, intelligent lighting solutions, green technology that contributes towards reducing carbon emission. Our extensive product portfolio includes architectural and commercial and household LEDs.</h3>

            </div>
            <div class="mf-c-1" id="alright">
            <HashLink to="/" onClick={toggleMenus}>
                    <h4>Home</h4>
                    </HashLink>
                <HashLink to="/#automotive">
                <h4>Automotive Solutions</h4>
                </HashLink>
                    <Link to="/iotDetails" onClick={toggleMenus}>
                    <h4>IIoT Solutions</h4>
                </Link>
                <HashLink to="/products" onClick={toggleMenus}>
                    <h4>Electronic Products</h4>
                </HashLink>
                {/* <HashLink to="/career">
                    <h4>Career</h4>
                </HashLink> */}
                <HashLink to="/#incontact_section">
                    <h4>Contact Us</h4>
                </HashLink>
                
                </div>
            <div
            class="f-b-left"
          >
            <div
              class="ipart2"
               
            >
              <img
                src={call}
                style={{height:"20px",
                width:"auto", filter: 'brightness(0)'}}
                
              />
               <h4
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '0.8rem'
                }}
              >
                Landline:<br/>+91 1493-452877
              </h4>
            </div>
  
            <div
              class="ipart2"
              
            >
              <img
                src={whts}
                style={{height:"20px",
                width:"auto", filter: 'brightness(0)'}}
              />
              <h4
               style={{
                fontFamily: 'Poppins',
                fontSize: '0.8rem'
              }}
              >
                Whatsapp:<br/>+91 9416922877
              </h4>
            </div>
  
            <div
              class="ipart2"
             

            >
              <img
                src={mail}
                style={{height:"20px",
                width:"auto", filter: 'brightness(0)'}}
              />
              <h4
                style={{
                    fontFamily: 'Poppins',
                    fontSize: '0.8rem'
                  }}
              >
                Mail:<br/>info@cellustechindia.com
              </h4>
            </div>
          </div>
            
        </div>


        <div class="footer-bottom">
            <div class="f-b-left2">
                <h2 style={{paddingTop: '16px', paddingBottom: '16px'}}>© 2023 Cellus Tech India. All rights reserved.</h2>
            </div>
            <div class="f-b-right">
                <a href="https://www.instagram.com/cellustechindiaprivatelimited/?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D">
                    <div class="mybox">
                        <svg height="25px" width="25px" viewBox="0 0 25 25">
                            <path
                                d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z">
                            </path>
                        </svg>
                    </div>
                </a>

                <a href="https://www.facebook.com/people/Cellus-Tech-India-Private-Limited/100063859967855/">
                    <div class="mybox">
                        <svg height="25px" width="25px" viewBox="0 0 25 25">
                            <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                        </svg>
                    </div>
                </a>
                <a href="//api.whatsapp.com/send?phone=+919416922877&text=Hi!">
                    <div class="mybox">
                        <svg height="25px" width="25px" viewBox="0 0 25 25">
                            <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
                        </svg>
                    </div>
                </a>
                
                <a href="https://www.linkedin.com/company/cellus-tech-india-private-limited/mycompany/">
                    <div class="mybox">
                        <svg height="25px" width="25px" viewBox="0 0 25 25">
                            <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
                        </svg>
                    </div>
                </a>

            </div>
        </div>

    </div>
  

</>
  )
}





