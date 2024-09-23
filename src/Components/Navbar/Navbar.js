import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ctiskaiologo from "../Images/ctiskaiologo.png";
import cti from "../Images/navcti.png";
// import skaio from '../Images/skaiotm.png'
import newlogo from "../Images/newlogo.jpeg";
import logocti from "../Images/logocti.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Navlogo from "./Navlogo/Navlogo";
import ce from "../Images/ce.jpg";
import iso from "../Images/iso.jpg";
import rohs from "../Images/rohs.jpg";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../../AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldHideLogo, setShouldHideLogo] = useState(false);

  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenus = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  //   const scrollToSection = (sectionId, presentPage, toGo) => {
  //     localStorage.setItem("elementID",sectionId)
  //     const targetElement = document.getElementById(sectionId);
  //     if (!targetElement) {
  //       console.error(`Element with id '${sectionId}' not found.`);
  //       return;
  //     }
  //     //var mycurrentpage = your current page path or name
  //     //var myscrollelementID = element where to scroll
  //     //setLocalStorageItem
  //     //var pageToGo = page where element is present
  //     //if(mycurrentpage == pageToGo){
  // //      scrollintoview
  //    // }else{
  //           //set local variable scrollPending = "sectionId"
  //           //first go to  pageToGO
  //           //HOME PAGE LOGIC
  //           //After loading is finished in homepage, check for pendingVariable
  //               //if(pendingVariable == none){}else{scrollintoview(ElementID)}
  //    //}
  //     const isHomePage=window.location.pathname==='/';
  //     if (isHomePage) {
  //       targetElement.scrollIntoView({ behavior: 'smooth' });
  //     }
  //     else if(presentPage==toGo){
  //       targetElement.scrollIntoView({ behavior: 'smooth' });
  //     }
  //     else {
  //       window.location.href=toGo
  //       window.onload = () => {
  //           targetElement.scrollIntoView({ behavior: 'smooth' });
  //         };
  //     }
  //   };
  // Add this to your existing JavaScript code

  const toggleSubmenu = (event) => {
    const targetElement = event.currentTarget;
    const submenu = targetElement.querySelector(".dropdown-menu");

    if (submenu) {
      submenu.classList.toggle("show");
    }
  };

  const closeSubmenus = () => {
    const submenus = document.querySelectorAll(
      ".dropdown-submenu .dropdown-menu"
    );
    submenus.forEach((submenu) => {
      submenu.classList.remove("show");
    });
  };

  const handleSubmenuClick = (event) => {
    const isMobile = window.innerWidth <= 767;
    if (isMobile) {
      event.preventDefault();
      toggleSubmenu(event);
    }
  };

  // Attach event listeners to handle submenu behavior
  document.querySelectorAll(".dropdown-submenu").forEach((submenu) => {
    submenu.addEventListener("click", handleSubmenuClick);
  });

  // Close submenus when clicking outside the dropdown
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-submenu")) {
      closeSubmenus();
    }
  });

  const scrollToSection = (sectionId, presentPage, toGo) => {
    localStorage.setItem("elementID", sectionId);
    const targetElement = document.getElementById(sectionId);

    if (!targetElement) {
      console.error(`Element with id '${sectionId}' not found.`);
      return;
    }

    const storedElementID = localStorage.getItem("elementID");

    if (storedElementID) {
      localStorage.removeItem("elementID"); // Remove it after use or as needed
      const isHomePage = window.location.pathname === "/";

      if (isHomePage || presentPage === toGo) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = toGo;

        // Listen for the load event on the new page
        window.addEventListener("load", () => {
          const pendingElement = document.getElementById(storedElementID);
          if (pendingElement) {
            pendingElement.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    } else {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://docs.google.com/presentation/d/1I_evdHSSdiIn00Lf1XRBu11oieOL-szD/export/pptx";
    downloadLink.download = "company_profile.pptx";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const downloadImage = (imageURL) => {
    // Create an anchor element and trigger the download of the image
    const downloadLink = document.createElement("a");
    downloadLink.href = imageURL;
    downloadLink.download = "certification_image.jpg"; // You can customize the downloaded file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleCertificationClick = (certification) => {
    const certificationImages = {
      RoHS: rohs,
      ISO: iso,
      CE: ce,
      // ... Add other certifications and their corresponding images
    };

    const image = certificationImages[certification];

    if (image) {
      // Download the image associated with the clicked certification
      downloadImage(image);
    } else {
      console.log(`Image not found for ${certification}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the scroll threshold based on your design
      const scrollThreshold = 50;
      const shouldHide = window.scrollY > scrollThreshold;
      setShouldHideLogo(shouldHide);

      // const navElement = document.getElementById('navbar');
      // if (navElement) {
      //   navElement.style.marginTop = shouldHide ? '0' : '0rem';
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav-container ${shouldHideLogo ? "hide-logo" : ""}`}>
        <Navlogo />

        <div id="navbar">
          {/* <nav className={menuOpen ? 'active' : ''} > */}
          <div id="navbar" className={menuOpen ? "active" : ""}>
            {/* <nav className={shouldHideLogo ? 'scrolled' : ''}> */}
            <nav>
              <div className="nav__logo">
                <img src={logocti} alt="logo" />
              </div>

              <div className={`nav__container ${menuOpen ? "active" : ""}`}>
                <ul className="nav__ul">
                  <li>
                    <a>
                      <Link to="/" onClick={toggleMenus}>
                        Home
                      </Link>
                    </a>
                  </li>
                  {/* <li><a href='#'><Link to='/autoDetails' onClick={toggleMenus}>Automotive Solutions</Link></a></li> */}
                  {/* <li><a href='#'><Link to='/iotDetails' onClick={toggleMenus}>IIoT Solutions</Link></a></li> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Link>Services</Link>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      {/* <Link to="/autoDetails"> */}
                      {/* <a class="dropdown-item">Automotive Solutions</a> */}
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-item dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          // data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <HashLink
                            to="/#automotive"
                            smooth
                            onClick={toggleMenus}
                          >
                            Automotive Solution
                          </HashLink>
                        </a>
                        <ul class="dropdown-menu dropdown-submenu">
                          <li>
                            <a class="dropdown-item">
                              <HashLink
                                to="/autoDetails#autosar"
                                smooth
                                onClick={toggleMenus}
                              >
                                Autosar
                              </HashLink>
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item">
                              <HashLink
                                to="/autoDetails#embedded"
                                smooth
                                onClick={toggleMenus}
                              >
                                Embedded
                              </HashLink>
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* </Link> */}

                      {/* <Link to="/iotDetails">
                        <a class="dropdown-item">IIoT Solutions</a>
                      </Link> */}

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-item dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          // data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Link to="/iotDetails" onClick={toggleMenus}>
                            IIoT Solution
                          </Link>
                        </a>
                        <ul class="dropdown-menu dropdown-submenu">
                          <li>
                            <a class="dropdown-item">
                              <Link to="/iotDetails" onClick={toggleMenus}>
                                Other S/w Services
                              </Link>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a class="dropdown-item">
                          <HashLink to="/#resource" onClick={toggleMenus}>
                            Resource Deployment
                          </HashLink>
                        </a>
                      </li>
                    </div>
                  </li>

                  {/* <li><a href='#'><Link to='/consulting' onClick={toggleMenus}>Consulting Services</Link></a></li> */}
                  {/* <li>
                    <a>
                      <Link to="/products" onClick={toggleMenus}>
                        Products
                      </Link>
                    </a>
                  </li> */}

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      // role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Link
                        // to="/products"
                        className="default-link"
                      >
                        Products
                      </Link>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item">
                        {/* onClick={() => scrollToSection('led_lights',window.location.pathname, '/')}> */}
                        <HashLink
                          to="/products#led_lights"
                          smooth
                          onClick={toggleMenus}
                        >
                          LED Lights
                        </HashLink>
                      </a>
                      {/* smart_city      solar_smart */}
                      <a class="dropdown-item">
                        {/* onClick={() => scrollToSection('smart_farming',window.location.pathname,'/')}> */}
                        <HashLink
                          to="/products#smart_farming"
                          smooth
                          onClick={toggleMenus}
                        >
                          Smart Farming Devices
                        </HashLink>
                      </a>
                      <a class="dropdown-item">
                        {/* onClick={() => scrollToSection('smart_farming',window.location.pathname,'/')}> */}
                        <HashLink
                          to="/products#solar_smart"
                          smooth
                          onClick={toggleMenus}
                        >
                          {/* Sunwise Hub */}
                          Turnkey Projects
                        </HashLink>
                      </a>
                      <a class="dropdown-item">
                        {/* onClick={() => scrollToSection('smart_farming',window.location.pathname,'/')}> */}
                        <HashLink
                          to="/products#smart_city"
                          smooth
                          onClick={toggleMenus}
                        >
                          Smart City Projects
                        </HashLink>
                      </a>

                      <a class="dropdown-item">
                        {/* onClick={() => scrollToSection('home_automation', window.location.pathname, '/')}> */}
                        <HashLink
                          to="/products#home_automation"
                          smooth
                          onClick={toggleMenus}
                        >
                          Home Automation
                        </HashLink>
                      </a>
                      <a class="dropdown-item">
                        {/* onClick={() => scrollToSection('hardware', window.location.pathname, '/')}> */}
                        <HashLink
                          to="/products#hardware"
                          smooth
                          onClick={toggleMenus}
                        >
                          Automotive Hardware
                        </HashLink>
                      </a>
                    </div>
                  </li>

                  <li>
                    <a>
                      <Link to="/career" onClick={toggleMenus}>
                        Career
                      </Link>
                    </a>
                  </li>
                  {/* <li><a ><Link to='/' onClick={toggleMenus}>Testing Tools</Link></a></li> */}
                  {/* <li><a href='https://www.cellustechindia.com/led-leaflet-new.pdf'>Brochure</a></li> */}
                  {/* <li><a href='#'><Link to='/present'>Our Story</Link></a></li> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Link>About Us</Link>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item">
                        <Link to="/present" onClick={toggleMenus}>
                          Our Story
                        </Link>
                      </a>

                      <a class="dropdown-item">
                        <HashLink
                          to="/#incontact_section"
                          onClick={toggleMenus}
                        >
                          Contact Us
                        </HashLink>
                      </a>

                      <a class="dropdown-item">
                        <Link>Privacy Policy</Link>
                      </a>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Link>Download</Link>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" onClick={handleDownload}>
                        <Link>Company Profile</Link>
                      </a>

                      {/* <Link to='/contact'><a class="dropdown-item">Product Catalog</a></Link> */}
                      {/* <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-item dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          // data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Link>Certifications</Link>
                        </a>

                        <ul class="dropdown-menu dropdown-submenu">
                          <li>
                            <a class="dropdown-item">GST</a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              onClick={() => handleCertificationClick("ISO")}
                            >
                              ISO
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              onClick={() => handleCertificationClick("CE")}
                            >
                              CE
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              onClick={() => handleCertificationClick("RoHS")}
                            >
                              RoHS
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item">MSME</a>
                          </li>
                          <li>
                            <a class="dropdown-item">ZED</a>
                          </li>
                          <li>
                            <a class="dropdown-item">IEC</a>
                          </li>
                          <li>
                            <a class="dropdown-item">PAN</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Bank</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Trademark</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Startup India</a>
                          </li>
                        </ul>
                      </li> */}

                      <li>
                        <a class="dropdown-item">
                          <HashLink
                            to="/#certificates"
                            onClick={toggleMenus}
                            smooth
                          >
                            Certificates
                          </HashLink>
                        </a>
                      </li>
                    </div>
                  </li>

                  {/* <li>
                    <a>
                      <Link to="/login" onClick={toggleMenus}>
                        Sign In
                      </Link>
                    </a>
                  </li> */}

                  <li>
          {/* {isLoggedIn ? (
            <a>
            <Link to='/' onClick={handleLogout}>Logout</Link>
          </a>            
            ) : (
              <a>
            // <Link to="/login" onClick={toggleMenus}> Sign In</Link>
            </a>            
          )} */}
        </li>

        <li><Link to="/login" onClick={toggleMenus}> Sign In</Link></li>

                  {/* <li><a href='#'><Link to='/contact' onClick={toggleMenus}>Contact us</Link></a></li>    */}
                  <li>
                    <div id="google_ele"></div>
                  </li>
                </ul>
              </div>

              {/* <div className='loginbtn'>
            <Link to='/login'>
            <button >Login</button>
            </Link>
            </div> */}

              {/* <div className='nav_skaio'>
              <img src={skaio}/>
            </div> */}

              <div className="burger-menu" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

